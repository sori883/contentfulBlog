import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { expect, test } from "playwright/test";

import { readWrites } from "../../app/features/write/content";

function withContent(
  run: (root: string, add: (slug: string, source: string) => void) => void
) {
  const root = mkdtempSync(path.join(tmpdir(), "write-content-"));
  const add = (slug: string, source: string) => {
    mkdirSync(path.join(root, slug), { recursive: true });
    writeFileSync(path.join(root, slug, "index.md"), source);
  };
  try {
    run(root, add);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
}
const front = (title: string, updated: string) =>
  `---\ntitle: ${title}\nupdated: ${updated}\n---\n`;

test("更新日順に並べる", () =>
  withContent((root, add) => {
    add("old", front("古い文書", "2026-01-01") + "本文");
    add("new", front("新しい文書", "2026-09-06") + "本文");
    expect(readWrites(root).entries.map((e) => e.slug)).toEqual(["new", "old"]);
    expect(readWrites(root).assets).toEqual([]);
  }));

test("Markdownと相対画像を変換しHTML直書きは実行させない", () =>
  withContent((root, add) => {
    add(
      "sample",
      front("表示", "2026-09-06") +
        "# 見出し\n\n**強調**\n\n- 箇条書き\n\n![説明](./assets/写真.png)\n\n<script>alert(1)</script>\n"
    );
    mkdirSync(path.join(root, "sample/assets"));
    writeFileSync(path.join(root, "sample/assets/写真.png"), "fixture");
    const result = readWrites(root);
    expect(result.entries[0].html).toContain("<h2>見出し</h2>");
    expect(result.entries[0].html).toContain("<strong>強調</strong>");
    expect(result.entries[0].html).toContain(
      "/write-assets/sample/%E5%86%99%E7%9C%9F.png"
    );
    expect(result.entries[0].html).not.toContain("<script>");
    expect(result.assets).toHaveLength(1);
  }));

for (const source of [
  front("日付不正", "2026-02-30"),
  "---\nupdated: 2026-09-06\n---\n",
  front("画像不明", "2026-09-06") + "![画像](./assets/no.png)",
  front("範囲外", "2026-09-06") + "![画像](../secret.png)",
]) {
  test(`不正な文書をファイル名付きで拒否: ${source}`, () =>
    withContent((root, add) => {
      add("invalid", source);
      expect(() => readWrites(root)).toThrow(/invalid\/index.md/);
    }));
}
