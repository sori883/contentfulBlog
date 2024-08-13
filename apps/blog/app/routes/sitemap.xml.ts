import { format } from "@formkit/tempo";
import { createRoute } from "honox/factory";

import type { Post } from "~/mdx/posts";
import { getAllPosts } from "~/mdx/posts";

const SITEMAP_DATE_FORMAT = "YYYY-MM-DD";

function generateSitemap(posts: Post[]): string {
  const now = new Date();
  return `<?xml version="1.0" encoding="utf-8" standalone="yes"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
    <url>
        <loc>https://sori883.dev.com</loc>
        <lastmod>${format(now, SITEMAP_DATE_FORMAT, "en")}</lastmod>
    </url>
    ${posts.map((post) => generateSitemapItem(post)).join("\n")}
</urlset>`;
}

function generateSitemapItem(post: Post): string {
  return `<url>
      <loc>https://sori883.dev${post.permalink}</loc>
      <lastmod>${format(post.frontmatter.date, SITEMAP_DATE_FORMAT, "en")}</lastmod>
    </url>`;
}

export default createRoute((c) => {
  const sitemap = generateSitemap(getAllPosts());
  return c.text(sitemap, 200, {
    "Content-Type": "application/xml",
  });
});
