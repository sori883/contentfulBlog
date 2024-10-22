import { createRoute } from "honox/factory";

export default createRoute((c) => {
  // ファイル書き出しするため、改行必須
  const robotsTxt = `dh=1eb6b52002473dc923cfc58bc269805735dd4d1d`;
  return c.text(robotsTxt, 200, {});
});
