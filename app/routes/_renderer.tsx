import { jsxRenderer } from "hono/jsx-renderer";
import { Link, Script } from "honox/server";
import { GoogleAnalytics } from "@/libs/analytics/googleAnalytics";
import { ThemeInit } from "@/libs/tailwind/theme";

export default jsxRenderer(({ children }, c) => {
  const title = "今日も生きてるだけでえらい";
  const ogImage = "https://sori883.dev/static/ogp.png";
  const description = "sori883のポートフォリオ";

  return (
    <html lang="ja">
      <head>
        <title>{title}</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={`https://sori883.dev${c.req.path}`} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@sori883" />
        <meta name="twitter:creator" content="@sori883" />
        <meta property="og:title" content={title} />
        <link href={`https://sori883.dev${c.req.path}`} rel="canonical" />
        <link href="https://rsms.me/inter/inter.css" rel="preload" as="style" />
        <link href="https://rsms.me/inter/inter.css" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
        <ThemeInit />
        <Link href="/app/css/style.css" rel="stylesheet" />
        <Script src="/app/client.ts" async />
        {import.meta.env.PROD ? <GoogleAnalytics /> : null}
      </head>
      <body>{children}</body>
    </html>
  );
});
