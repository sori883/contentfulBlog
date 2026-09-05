import { createRoute } from "honox/factory";
import { readWrites } from "@/features/write/content";

export default createRoute((c) =>
  c.text(
    `<?xml version="1.0" encoding="utf-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://sori883.dev</loc></url>
  <url><loc>https://sori883.dev/write</loc></url>
  ${readWrites()
    .entries.map(
      (entry) =>
        `<url><loc>https://sori883.dev/write/${entry.slug}</loc><lastmod>${entry.updated}</lastmod></url>`
    )
    .join("\n")}
</urlset>`,
    200,
    { "Content-Type": "application/xml" }
  )
);
