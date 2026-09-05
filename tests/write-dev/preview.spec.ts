import { expect, test } from "playwright/test";

import { readWrites } from "../../app/features/write/content";

test("開発環境では下書きを含む一覧・本文・画像を表示する", async ({
  page,
  request,
}) => {
  const content = readWrites(undefined, { includeDrafts: true });
  await page.goto("/write");
  await expect(page.locator(".write-list li")).toHaveCount(
    content.entries.length
  );
  for (const entry of content.entries) {
    await page.goto(`/write/${entry.slug}`);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      entry.title
    );
  }
  for (const asset of content.assets) {
    const response = await request.get(asset.url);
    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toContain(asset.mime);
  }
});
