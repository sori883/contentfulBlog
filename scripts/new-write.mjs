import process from "node:process";
import console from "node:console";
import { mkdirSync, writeFileSync, existsSync } from "node:fs";
import path from "node:path";

const slug = process.argv[2];
if (!slug || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
  console.error("使い方: pnpm write:new my-note（英小文字・数字・ハイフン）");
  process.exit(1);
}
const directory = path.resolve("contents/write", slug);
if (existsSync(directory)) {
  console.error(`既に存在します: ${directory}`);
  process.exit(1);
}
const updated = new Date().toLocaleDateString("sv-SE", { timeZone: "Asia/Tokyo" });
mkdirSync(path.join(directory, "assets"), { recursive: true });
writeFileSync(path.join(directory, "assets", ".gitkeep"), "");
writeFileSync(path.join(directory, "index.md"), `---\ntitle: タイトル\nupdated: ${updated}\n---\n\nここから本文を書きます。\n`);
console.log(`作成しました: ${path.join(directory, "index.md")}`);
