import { createRoute } from "honox/factory";

export default createRoute((c) => {
  // ファイル書き出しするため、改行必須
  const robotsTxt = `User-Agent: *
Allow: /
Sitemap: https://sori883.dev/sitemap.xml`;
  return c.text(robotsTxt, 200, {});
});
