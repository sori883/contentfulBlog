import { expect, test } from "playwright/test";

const siteTitle = "今日も生きてるだけでえらい";
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

test("トップページにブログ一覧と外部リンクを表示する", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: "ブログ", exact: true })
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
