import { expect, test } from "playwright/test";

import { Pagination } from "../../app/components/pagination/pagination";
import { getOGP } from "../../app/features/ogp";

const siteTitle = "sori883.dev";
const siteUrl = "https://sori883.dev";

const pageContracts = [
  { path: "/", title: siteTitle, canonical: `${siteUrl}/` },
  {
    path: "/about",
    title: `About Me | ${siteTitle}`,
    robots: "noindex, nofollow, noimageindex",
  },
  {
    path: "/privacypolicy",
    title: `プライバシーポリシー | ${siteTitle}`,
    canonical: `${siteUrl}/privacypolicy`,
  },
  {
    path: "/posts/first_post",
    title: `テスト投稿 | ${siteTitle}`,
    canonical: `${siteUrl}/posts/first_post`,
  },
  {
    path: "/posts/ouj_entranc_ceremony",
    title: `放送大学の「入学者の集い」に行ってきました | ${siteTitle}`,
    canonical: `${siteUrl}/posts/ouj_entranc_ceremony`,
  },
  {
    path: "/posts/remake_blog_architecture",
    title: `個人ブログをHonoXに作り変えました | ${siteTitle}`,
    canonical: `${siteUrl}/posts/remake_blog_architecture`,
  },
  {
    path: "/posts/remix_auth_with_supabasessr",
    title: `@supabase/ssrとRemixでGoogle認証を行う | ${siteTitle}`,
    canonical: `${siteUrl}/posts/remix_auth_with_supabasessr`,
  },
  {
    path: "/posts/remix_on_hono_adapter",
    title: `hono-remix-adapterを使ってみた（Cloudflare Workers） | ${siteTitle}`,
    canonical: `${siteUrl}/posts/remix_on_hono_adapter`,
  },
  {
    path: "/posts/sass_update_migration_1.80",
    title: `Sassの@import廃止対応しました | ${siteTitle}`,
    canonical: `${siteUrl}/posts/sass_update_migration_1.80`,
  },
  {
    path: "/posts/this_blog_architecture",
    title: `Contentful、Next.jsとGithub Appsでブログ作ったので構成紹介 | ${siteTitle}`,
    canonical: `${siteUrl}/posts/this_blog_architecture`,
  },
  {
    path: "/posts/try_claude_code",
    title: `Claude Codeを導入してこのブログを改修してみた。 | ${siteTitle}`,
    canonical: `${siteUrl}/posts/try_claude_code`,
  },
  {
    path: "/categories/hono",
    title: `Hono | ${siteTitle}`,
    canonical: `${siteUrl}/categories/hono`,
  },
  {
    path: "/categories/sass",
    title: `Sass | ${siteTitle}`,
    canonical: `${siteUrl}/categories/sass`,
  },
  {
    path: "/categories/claude",
    title: `Claude | ${siteTitle}`,
    canonical: `${siteUrl}/categories/claude`,
  },
  {
    path: "/categories/supabase",
    title: `supabase | ${siteTitle}`,
    canonical: `${siteUrl}/categories/supabase`,
  },
  {
    path: "/categories/個人開発",
    title: `個人開発 | ${siteTitle}`,
    canonical: `${siteUrl}/categories/個人開発`,
  },
  {
    path: "/categories/放送大学",
    title: `放送大学 | ${siteTitle}`,
    canonical: `${siteUrl}/categories/放送大学`,
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

test("ブログページに記事一覧と外部リンクを表示する", async ({ page }) => {
  await page.goto("/blog");

  await expect(
    page.getByRole("heading", { name: "ブログ.", exact: true })
  ).toBeVisible();
  await expect(page.getByRole("link", { name: /Qiita/ })).toBeVisible();
  await expect(page.getByRole("link", { name: /Zenn/ })).toBeVisible();
});

test("記事本文と目次を表示する", async ({ page }) => {
  await page.goto("/posts/first_post");

  await expect(page.getByRole("article")).toContainText("ブログ作ってみました");
  await expect(
    page.getByRole("heading", { name: "目次" }).first()
  ).toBeVisible();
});

test("フィード、サイトマップ、robots.txtを配信する", async ({ request }) => {
  const feed = await request.get("/feed.xml");
  expect(feed.status()).toBe(200);
  expect(feed.headers()["content-type"]).toContain("application/xml");
  expect(await feed.text()).toContain(`<title>${siteTitle}</title>`);

  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.status()).toBe(200);
  expect(await sitemap.text()).toContain(`<loc>${siteUrl}</loc>`);

  const robots = await request.get("/robots.txt");
  expect(robots.status()).toBe(200);
  expect(await robots.text()).toContain(`Sitemap: ${siteUrl}/sitemap.xml`);
});

test("存在しないURLは404を返す", async ({ request }) => {
  const response = await request.get("/not-found-for-contract-test");

  expect(response.status()).toBe(404);
});

test("プロフィールから活動とブログへ移動できる", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(/sori883/);
  await expect(page.locator("main > section")).toHaveCount(1);
  await expect(page.locator("main article")).toHaveCount(0);
  await expect(page.locator("main")).not.toContainText("1998.05.18");
  await expect(page.locator("main")).not.toContainText("伊藤 健治");
  await page
    .getByRole("navigation", { name: "メインナビゲーション" })
    .getByRole("link", { name: "ABOUT", exact: true })
    .click();
  await expect(page).toHaveURL(/\/about$/);
  await expect(page.locator("meta[name=robots]")).toHaveAttribute(
    "content",
    "noindex, nofollow, noimageindex"
  );
  await page
    .getByRole("navigation", { name: "メインナビゲーション" })
    .getByRole("link", { name: "BLOG", exact: true })
    .click();
  await expect(page).toHaveURL(/\/blog$/);
  await expect(page.locator(".post-card").first()).toBeVisible();
  await page.locator(".post-card a").first().click();
  await expect(page).toHaveURL(/\/posts\//);
  await expect(page.getByRole("article")).toBeVisible();
});

test("ブログ一覧を公開しページ送りの先頭はブログへ戻る", async ({
  page,
  request,
}) => {
  const response = await page.goto("/blog");
  expect(response?.status()).toBe(200);
  await expect(page.locator("link[rel=canonical]")).toHaveAttribute(
    "href",
    `${siteUrl}/blog`
  );
  const pagination = page.getByRole("navigation", { name: "Pagination" });
  await expect(
    pagination.getByRole("link", { name: "1", exact: true })
  ).toHaveAttribute("href", "/blog");
  await expect(pagination.locator("[aria-current=page]")).toHaveCount(1);
  const nextPage = pagination.getByRole("link", { name: "2", exact: true });
  if (await nextPage.count()) {
    await nextPage.click();
    await expect(page).toHaveURL(/\/pages\/2$/);
    await page
      .getByRole("navigation", { name: "Pagination" })
      .getByRole("link", { name: "1", exact: true })
      .click();
    await expect(page).toHaveURL(/\/blog$/);
  }
  const sitemap = await request.get("/sitemap.xml");
  expect(await sitemap.text()).toContain(`<loc>${siteUrl}/blog</loc>`);
});

for (const width of [375, 768, 1440]) {
  test(`${width}pxで表示が収まりナビゲーションを利用できる`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.emulateMedia({ reducedMotion: "reduce" });
    for (const path of [
      "/",
      "/activities",
      "/likes",
      "/blog",
      "/about",
      "/posts/first_post",
    ]) {
      await page.goto(path);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth
        )
      ).toBe(true);
      await expect(
        page
          .getByRole("navigation", { name: "メインナビゲーション" })
          .getByRole("link", { name: "ABOUT", exact: true })
      ).toBeVisible();
    }
    await page.goto("/");
    await page.keyboard.press("Tab");
    await expect(page.getByRole("link", { name: "本文へ移動" })).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page).toHaveURL(/#main-content$/);
    const animation = await page
      .locator(".hero-flower")
      .evaluate((el) => getComputedStyle(el).animationName);
    expect(animation).toBe("none");
    const roomLoaded = await page
      .locator(".room-illustration")
      .evaluate(
        (el) =>
          (el as HTMLImageElement).complete &&
          (el as HTMLImageElement).naturalWidth > 0
      );
    expect(roomLoaded).toBe(true);
  });
}

test("複数ページの記事一覧とカテゴリでページ送りのURLを維持する", async ({
  page,
}) => {
  for (const basePath of [undefined, "/categories/hono"]) {
    await page.setContent(
      String(Pagination({ currentPage: 2, totalCount: 3, basePath }))
    );
    const navigation = page.getByRole("navigation", { name: "Pagination" });
    await expect(
      navigation.getByRole("link", { name: "1", exact: true })
    ).toHaveAttribute("href", basePath ?? "/blog");
    await expect(
      navigation.getByRole("link", { name: "3", exact: true })
    ).toHaveAttribute("href", basePath ? `${basePath}/3` : "/pages/3");
    await expect(navigation.locator("[aria-current=page]")).toHaveText("2");
  }
});

test("メニューから独立した各ページへ移動しサイト名を表示する", async ({
  page,
}) => {
  await page.goto("/");
  for (const [label, path, title] of [
    ["BLOG", "/blog", "ブログ | sori883.dev"],
    ["ABOUT", "/about", "About Me | sori883.dev"],
    ["HOME", "/", "sori883.dev"],
  ]) {
    await page
      .getByRole("navigation", { name: "メインナビゲーション" })
      .getByRole("link", { name: label, exact: true })
      .click();
    await expect(page).toHaveURL(new RegExp(`${path === "/" ? "/" : path}$`));
    await expect(page).toHaveTitle(title);
    await expect(page.locator("meta[property='og:title']")).toHaveAttribute(
      "content",
      title
    );
    await expect(
      page.getByRole("link", { name: "sori883.dev ホーム", exact: true })
    ).toBeVisible();
  }
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    /sori883.dev/
  );
  await expect(page.locator("main #activities")).toHaveCount(0);
  await expect(page.locator("main .likes-gallery")).toHaveCount(0);
  await page.goto("/likes");
  await expect(page.locator(".likes-gallery img")).toHaveCount(6);
  await page.goto("/about");
  await expect(page.locator("main img[src^='/like/']")).toHaveCount(6);
});

test("旧サイト名が残らず廃止ページをサイトマップから除く", async ({
  request,
}) => {
  for (const path of [
    "/",
    "/about",
    "/activities",
    "/likes",
    "/blog",
    "/privacypolicy",
    "/posts/first_post",
    "/categories/hono",
    "/feed.xml",
  ]) {
    const response = await request.get(path);
    expect(response.status()).toBe(200);
    expect(await response.text()).not.toMatch(/今日も生きてる|だけでえらい/);
  }
  const sitemap = await (await request.get("/sitemap.xml")).text();
  expect(sitemap).not.toContain(`<loc>${siteUrl}/activities</loc>`);
  expect(sitemap).not.toContain(`<loc>${siteUrl}/likes</loc>`);
  expect(sitemap).not.toContain(`<loc>${siteUrl}/about</loc>`);
});

test("旧公開版から得た自サイトのリンクカードだけ名称を更新する", async () => {
  const originalFetch = globalThis.fetch;
  const oldName = "今日も生きてるだけでえらい";
  globalThis.fetch = async () =>
    new Response(
      `<meta property="og:title" content="記事 | ${oldName}"><meta property="og:description" content="${oldName}"><meta property="og:site_name" content="${oldName}">`
    );
  try {
    const own = await getOGP("https://sori883.dev/posts/first_post");
    expect(own.title).toBe("記事 | sori883.dev");
    expect(own.description).toBe("sori883.dev");
    expect(own.siteName).toBe("sori883.dev");
    const external = await getOGP("https://example.com/");
    expect(external.title).toBe(`記事 | ${oldName}`);
  } finally {
    globalThis.fetch = originalFetch;
  }
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
    const room = await page.locator(".room-illustration").boundingBox();
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
  for (const path of [
    "/",
    "/activities",
    "/likes",
    "/about",
    "/blog",
    "/posts/first_post",
    "/categories/hono",
    "/privacypolicy",
  ]) {
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

test("活動ページを廃止して好きなものをAboutの下に統合する", async ({
  page,
  request,
}) => {
  for (const [path, destination] of [
    ["/activities", "/about"],
    ["/likes", "/about#likes"],
  ]) {
    const response = await request.get(path, { maxRedirects: 0 });
    expect(response.status()).toBe(302);
    expect(
      new URL(response.headers().location, "http://127.0.0.1:4173").pathname +
        new URL(response.headers().location, "http://127.0.0.1:4173").hash
    ).toBe(destination);
  }
  await page.goto("/likes");
  await expect(page).toHaveURL(/\/about#likes$/);
  await expect(page.locator("#likes img")).toHaveCount(6);
  await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
  await expect(page.locator("#likes h2")).toContainText("ひと休みも、");
  const navigation = page.getByRole("navigation", {
    name: "メインナビゲーション",
  });
  await expect(navigation.getByRole("link")).toHaveText([
    "HOME",
    "ABOUT",
    "BLOG",
  ]);
  const likesAfterProfile = await page.locator("#likes").evaluate((el) => {
    const main = el.closest("main");
    return (
      main?.lastElementChild === el &&
      main.innerText.indexOf("資格") <
        main.innerText.indexOf("LIKES / OFF THE CLOCK")
    );
  });
  expect(likesAfterProfile).toBe(true);
  await expect(page.locator("meta[name=robots]")).toHaveAttribute(
    "content",
    "noindex, nofollow, noimageindex"
  );
});
