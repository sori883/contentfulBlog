import { expect, test } from "playwright/test";

const siteTitle = "sori883.dev";
const siteUrl = "https://sori883.dev";

const pageContracts = [
  { path: "/", title: siteTitle, canonical: `${siteUrl}/` },
  {
    path: "/about",
    title: `About Me | ${siteTitle}`,
    robots: "noindex, nofollow, noimageindex",
  },
] as const;

for (const contract of pageContracts) {
  test(`${contract.path} の公開契約を維持する`, async ({ page }) => {
    const response = await page.goto(contract.path);

    expect(response?.status()).toBe(200);
    await expect(page).toHaveTitle(contract.title);

    if ("canonical" in contract) {
      await expect(page.locator("link[rel=canonical]")).toHaveAttribute(
        "href",
        contract.canonical
      );
    } else {
      await expect(page.locator("link[rel=canonical]")).toHaveCount(0);
    }

    if ("robots" in contract) {
      await expect(page.locator("meta[name=robots]")).toHaveAttribute(
        "content",
        contract.robots
      );
    }
  });
}

test("存在しないURLは404を返す", async ({ request }) => {
  const response = await request.get("/not-found-for-contract-test");

  expect(response.status()).toBe(404);
});

for (const width of [375, 768, 1440]) {
  test(`${width}pxで表示が収まりナビゲーションを利用できる`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.emulateMedia({ reducedMotion: "reduce" });
    for (const path of ["/", "/activities", "/likes", "/about"]) {
      await page.goto(path);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth
        )
      ).toBe(true);
      await expect(page.locator("header")).toHaveCount(0);
      await expect(page.locator("footer")).toHaveCount(0);
      await expect(
        page.getByRole("link", {
          name: path === "/" ? "ABOUT" : "HOME",
          exact: true,
        })
      ).toBeVisible();
    }
    await page.goto("/");
    await page.keyboard.press("Tab");
    await expect(page.getByRole("link", { name: "本文へ移動" })).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page).toHaveURL(/#main-content$/);
    await expect(page.locator(".hero-flower")).toHaveCount(0);
    const roomLoaded = await page
      .locator(".hero-artwork")
      .evaluate(
        (el) =>
          (el as HTMLImageElement).complete &&
          (el as HTMLImageElement).naturalWidth > 0
      );
    expect(roomLoaded).toBe(true);
  });
}

test("ABOUTとHOMEのリンクからページを移動する", async ({ page }) => {
  await page.goto("/");
  for (const [label, path, title] of [
    ["ABOUT", "/about", "About Me | sori883.dev"],
    ["HOME", "/", "sori883.dev"],
  ]) {
    await page.getByRole("link", { name: label, exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`${path === "/" ? "/" : path}$`));
    await expect(page).toHaveTitle(title);
    await expect(page.locator("meta[property='og:title']")).toHaveAttribute(
      "content",
      title
    );
  }
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    /sori883.dev/
  );
  await expect(page.locator("main #activities")).toHaveCount(0);
  await expect(page.locator("main .likes-gallery")).toHaveCount(0);
  await page.goto("/likes");
  await expect(page.locator(".likes-gallery img")).toHaveCount(0);
  await page.goto("/about");
  await expect(page.locator("main img[src^='/like/']")).toHaveCount(0);
});

test("旧サイト名が残らず廃止ページをサイトマップから除く", async ({
  request,
}) => {
  for (const path of ["/", "/about", "/activities", "/likes"]) {
    const response = await request.get(path);
    expect(response.status()).toBe(200);
    expect(await response.text()).not.toMatch(/今日も生きてる|だけでえらい/);
  }
  const sitemap = await (await request.get("/sitemap.xml")).text();
  expect(sitemap).not.toContain(`<loc>${siteUrl}/activities</loc>`);
  expect(sitemap).not.toContain(`<loc>${siteUrl}/likes</loc>`);
  expect(sitemap).not.toContain(`<loc>${siteUrl}/about</loc>`);
});

test("トップは紹介文とボタンを除き大きなイラストを中央に表示する", async ({
  page,
}) => {
  for (const width of [375, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    await expect(page.locator("main")).not.toContainText("HELLO, WORLD!");
    await expect(page.locator("main")).not.toContainText("インフラも、");
    await expect(page.locator("main")).not.toContainText("アプリも。");
    await expect(page.locator("main")).not.toContainText(
      "つくる、学ぶ、たまにひと休み。"
    );
    await expect(page.locator("main")).not.toContainText(
      "sori883の活動と日々の記録。"
    );
    await expect(
      page.getByRole("link", { name: "プロフィールを見る" })
    ).toHaveCount(0);
    const room = await page.locator(".hero-artwork").boundingBox();
    const scene = await page.locator(".hero-scene").boundingBox();
    expect(room).not.toBeNull();
    expect(scene).not.toBeNull();
    expect(
      Math.abs(room!.x + room!.width / 2 - (scene!.x + scene!.width / 2))
    ).toBeLessThan(2);
    expect(room!.width / scene!.width).toBeGreaterThan(0.8);
  }
});

test("OSと保存設定がdarkでも全ページをライトで表示する", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "dark" });
  await page.addInitScript(() => localStorage.setItem("theme", "dark"));
  for (const path of ["/", "/activities", "/likes", "/about"]) {
    await page.goto(path);
    await expect(page.locator("html")).not.toHaveClass(/dark/);
    await expect(page.locator("html")).toHaveCSS("color-scheme", "light");
    await expect(page.locator("body")).toHaveCSS(
      "background-color",
      "rgb(250, 248, 242)"
    );
    await expect(page.getByRole("button", { name: /theme icon/ })).toHaveCount(
      0
    );
    await expect(page.locator(".theme-control")).toHaveCount(0);
  }
});

test("活動・好きなものを廃止し旧URLをAboutへ転送する", async ({
  page,
  request,
}) => {
  for (const [path, destination] of [
    ["/activities", "/about"],
    ["/likes", "/about"],
  ]) {
    const response = await request.get(path, { maxRedirects: 0 });
    expect(response.status()).toBe(302);
    expect(
      new URL(response.headers().location, "http://127.0.0.1:4173").pathname +
        new URL(response.headers().location, "http://127.0.0.1:4173").hash
    ).toBe(destination);
  }
  await page.goto("/likes");
  await expect(page).toHaveURL(/\/about$/);
  await expect(page.locator("#likes img")).toHaveCount(0);
  await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
  await expect(page.locator("main")).not.toContainText("LIKES / OFF THE CLOCK");
  await expect(page.locator("meta[name=robots]")).toHaveAttribute(
    "content",
    "noindex, nofollow, noimageindex"
  );
});

test("ブログの全ページと記事画像を配信しない", async ({ request, page }) => {
  const removedPaths = [
    "/privacypolicy",
    "/blog",
    "/feed.xml",
    "/feed",
    "/pages/2",
    "/posts/first_post",
    "/posts/ouj_entranc_ceremony",
    "/posts/remake_blog_architecture",
    "/posts/remix_auth_with_supabasessr",
    "/posts/remix_on_hono_adapter",
    "/posts/sass_update_migration_1.80",
    "/posts/this_blog_architecture",
    "/posts/try_claude_code",
    "/categories/hono",
    "/categories/sass",
    "/categories/claude",
    "/categories/supabase",
    "/categories/個人開発",
    "/categories/放送大学",
    "/categories/hono/2",
    "/posts/remix_on_hono_adapter/deploy_log.webp",
    "/posts/remix_on_hono_adapter/deploy_header.webp",
    "/posts/remix_on_hono_adapter/local_header.webp",
    "/posts/remix_auth_with_supabasessr/supabasessr_gcp4.webp",
    "/posts/remix_auth_with_supabasessr/supabasessr_gcp8.webp",
    "/posts/remix_auth_with_supabasessr/supabasessr_gcp5.webp",
    "/posts/remix_auth_with_supabasessr/supabasessr_gcp2.webp",
    "/posts/remix_auth_with_supabasessr/supabasessr_gcp3.webp",
    "/posts/remix_auth_with_supabasessr/supabasessr_sb1.webp",
    "/posts/remix_auth_with_supabasessr/supabasessr_gcp1.webp",
    "/posts/remix_auth_with_supabasessr/supabasessr_gcp6.webp",
    "/posts/remix_auth_with_supabasessr/supabasessr_gcp7.webp",
    "/posts/try_claude_code/try_claude_code_category_2.webp",
    "/posts/try_claude_code/try_claude_code_category_1.webp",
    "/posts/remake_blog_architecture/new_infra.webp",
    "/posts/remake_blog_architecture/old_infra.webp",
    "/posts/this_blog_architecture/1month_money.webp",
    "/posts/this_blog_architecture/infra.webp",
    "/posts/ouj_entranc_ceremony/ouj_entranc_ceremony_2.webp",
    "/posts/ouj_entranc_ceremony/ouj_entranc_ceremony_3.webp",
    "/posts/ouj_entranc_ceremony/ouj_entranc_ceremony_4.webp",
    "/posts/ouj_entranc_ceremony/ouj_entranc_ceremony_1.webp",
    "/posts/sass_update_migration_1.80/sass_architecture.webp",
    "/posts/first_post/kitune500.webp",
  ];
  for (const path of removedPaths) {
    expect((await request.get(path)).status(), path).toBe(404);
  }
  await page.goto("/");
  await expect(
    page.locator("a[href='/blog'], a[href='/feed.xml']")
  ).toHaveCount(0);
  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.status()).toBe(200);
  expect((await sitemap.text()).match(/<loc>.*?<\/loc>/g)).toEqual([
    `<loc>${siteUrl}</loc>`,
  ]);
  const robots = await request.get("/robots.txt");
  expect(robots.status()).toBe(200);
  expect(await robots.text()).toContain(`Sitemap: ${siteUrl}/sitemap.xml`);
});

test("デフォルメされたキツネを静止画で表示する", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator(".hero-stage img")).toHaveCount(1);
  await expect(page.locator(".hero-artwork")).toBeVisible();
  await expect(page.locator(".hero-artwork")).toHaveAttribute(
    "src",
    "/fox-chibi.png"
  );
  await expect(
    page.locator(".pixel-fox, .motion-toggle, .motion-label")
  ).toHaveCount(0);
  expect(
    await page
      .locator(".hero-stage")
      .evaluate((el) => el.getAnimations({ subtree: true }).length)
  ).toBe(0);
});
