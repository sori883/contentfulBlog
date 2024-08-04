import { createRoute } from "honox/factory";

export default createRoute(c => {
  // ファイル書き出しするため、改行必須
  const robotsTxt = `Use-Agent: *
Allow: /`;
  return c.text(robotsTxt, 200, {});
});