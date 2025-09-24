import { createRoute } from "honox/factory";
import type { Category, Post } from "@/features/posts";
import { getAllPosts, getCategories } from "@/features/posts";
import { format } from "@formkit/tempo";

const SITEMAP_DATE_FORMAT = "YYYY-MM-DD";

function generateSitemap(posts: Post[], categories: Category[]): string {
  const now = new Date();
  return `<?xml version="1.0" encoding="utf-8" standalone="yes"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
    <url>
        <loc>https://sori883.dev</loc>
        <lastmod>${format(now, SITEMAP_DATE_FORMAT, "en")}</lastmod>
    </url>
    <url>
        <loc>https://sori883.dev/privacypolicy</loc>
        <lastmod>${format(now, SITEMAP_DATE_FORMAT, "en")}</lastmod>
    </url>
    ${posts.map((post) => generateSitemapItem(post)).join("\n")}
    ${categories.map((category) => generateSitemapCategory(category)).join("\n")}
</urlset>`;
}

function generateSitemapItem(post: Post): string {
  return `<url>
      <loc>https://sori883.dev/posts/${post.frontmatter.permalink}</loc>
      <lastmod>${format(post.frontmatter.date, SITEMAP_DATE_FORMAT, "en")}</lastmod>
    </url>`;
}

function generateSitemapCategory(category: Category): string {
  const now = new Date();
  return `<url>
      <loc>https://sori883.dev/categories/${category.id}</loc>
      <lastmod>${format(now, SITEMAP_DATE_FORMAT, "en")}</lastmod>
    </url>`;
}

export default createRoute((c) => {
  const sitemap = generateSitemap(getAllPosts(), getCategories());
  return c.text(sitemap, 200, {
    "Content-Type": "application/xml",
  });
});
