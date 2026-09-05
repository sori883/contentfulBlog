import { createRoute } from "honox/factory";

export default createRoute((c) =>
  c.text(
    `<?xml version="1.0" encoding="utf-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://sori883.dev</loc></url>
</urlset>`,
    200,
    { "Content-Type": "application/xml" }
  )
);
