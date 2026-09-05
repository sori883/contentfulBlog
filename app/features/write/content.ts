import { existsSync, lstatSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import MarkdownIt from "markdown-it";
import { parse } from "yaml";

export type WriteEntry = {
  slug: string;
  title: string;
  updated: string;
  description: string;
  html: string;
};
export type WriteAsset = {
  url: string;
  fileName: string;
  sourcePath: string;
  mime: string;
};
const imageTypes: Record<string, string> = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".avif": "image/avif",
};

export function readWrites(
  root = path.resolve("contents/write"),
  { includeDrafts = false }: { includeDrafts?: boolean } = {}
): {
  entries: WriteEntry[];
  assets: WriteAsset[];
} {
  if (!existsSync(root)) return { entries: [], assets: [] };
  const assets = new Map<string, WriteAsset>();
  const entries: WriteEntry[] = [];
  for (const directory of readdirSync(root, { withFileTypes: true })) {
    if (!directory.isDirectory()) continue;
    const slug = directory.name;
    const filename = path.join(root, slug, "index.md");
    if (!existsSync(filename)) continue;
    try {
      if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug))
        throw new Error(
          "フォルダ名は英小文字・数字・ハイフンで指定してください"
        );
      if (lstatSync(filename).isSymbolicLink())
        throw new Error("記事のシンボリックリンクは使えません");
      const raw = readFileSync(filename, "utf8")
        .replace(/^\uFEFF/, "")
        .replace(/\r\n/g, "\n");
      const match = /^---\n([\s\S]*?)\n---(?:\n|$)/.exec(raw);
      if (!match) throw new Error("冒頭にフロントマターが必要です");
      const meta = parse(match[1]);
      if (!meta || typeof meta !== "object" || Array.isArray(meta))
        throw new Error("フロントマターを確認してください");
      if (meta.draft !== undefined && typeof meta.draft !== "boolean")
        throw new Error("draftはtrueまたはfalseで指定してください");
      if (meta.draft === true && !includeDrafts) continue;
      if (typeof meta.title !== "string" || !meta.title.trim())
        throw new Error("titleが必要です");
      if (
        typeof meta.updated !== "string" ||
        !/^\d{4}-\d{2}-\d{2}$/.test(meta.updated) ||
        !Number.isFinite(Date.parse(meta.updated)) ||
        new Date(meta.updated).toISOString().slice(0, 10) !== meta.updated
      )
        throw new Error("updatedは実在する日付をYYYY-MM-DDで指定してください");
      if (
        meta.description !== undefined &&
        typeof meta.description !== "string"
      )
        throw new Error("descriptionは文字列で指定してください");
      const md = new MarkdownIt({ html: false, linkify: true });
      md.renderer.rules.heading_open = (tokens, index) =>
        `<h${Math.min(Number(tokens[index].tag.slice(1)) + 1, 6)}>`;
      md.renderer.rules.heading_close = (tokens, index) =>
        `</h${Math.min(Number(tokens[index].tag.slice(1)) + 1, 6)}>\n`;
      const defaultImage = md.renderer.rules.image!;
      md.renderer.rules.image = (tokens, index, options, env, renderer) => {
        const token = tokens[index];
        const src = String(token.attrGet("src") ?? "");
        if (/^https?:\/\//i.test(src)) {
          // Explicit remote images are kept as authored.
        } else if (src.startsWith("/")) {
          if (src.startsWith("//"))
            throw new Error("画像URLにはhttps://を指定してください");
        } else {
          let decoded: string;
          try {
            decoded = decodeURIComponent(src);
          } catch {
            throw new Error(`画像パスを確認してください: ${src}`);
          }
          const relative = decoded.replace(/^\.\//, "");
          const parts = relative.split("/");
          if (
            parts[0] !== "assets" ||
            parts.length < 2 ||
            parts.some(
              (part) =>
                !part || part === "." || part === ".." || /[\\\0?#]/.test(part)
            )
          )
            throw new Error(`画像は./assets/内に置いてください: ${src}`);
          const mime = imageTypes[path.extname(relative).toLowerCase()];
          if (!mime) throw new Error(`非対応の画像形式です: ${src}`);
          let sourcePath = path.join(root, slug);
          for (const part of parts) {
            sourcePath = path.join(sourcePath, part);
            if (
              !existsSync(sourcePath) ||
              lstatSync(sourcePath).isSymbolicLink()
            )
              throw new Error(`画像が見つかりません: ${src}`);
          }
          if (!lstatSync(sourcePath).isFile())
            throw new Error(`画像ファイルではありません: ${src}`);
          const fileName = `write-assets/${slug}/${parts.slice(1).join("/")}`;
          const url = `/${fileName.split("/").map(encodeURIComponent).join("/")}`;
          assets.set(url, { url, fileName, sourcePath, mime });
          token.attrSet("src", url);
        }
        token.attrSet("loading", "lazy");
        token.attrSet("decoding", "async");
        return defaultImage(tokens, index, options, env, renderer);
      };
      const html = md.render(raw.slice(match[0].length));
      entries.push({
        slug,
        title: meta.title.trim(),
        updated: meta.updated,
        description: meta.description ?? "",
        html,
      });
    } catch (error) {
      throw new Error(
        `${filename}: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  }
  entries.sort(
    (a, b) => b.updated.localeCompare(a.updated) || a.slug.localeCompare(b.slug)
  );
  return { entries, assets: [...assets.values()] };
}
