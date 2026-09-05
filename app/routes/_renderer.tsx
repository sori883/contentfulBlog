import { jsxRenderer } from "hono/jsx-renderer";
import { Link, Script } from "honox/server";
import { GoogleAnalytics } from "@/libs/analytics/googleAnalytics";

export default jsxRenderer(({ children }, c) => {
  const title = "sori883.dev";
  const ogImage = "https://sori883.dev/ogp.png";
  const description =
    "sori883のプロフィールと活動紹介。インフラ、アプリ開発、学びの記録。";

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <Link href="/app/css/style.css" rel="stylesheet" />
        <Script src="/app/client.ts" async />
        {import.meta.env.PROD ? <GoogleAnalytics /> : null}
      </head>
      <body>{children}</body>
    </html>
  );
});
