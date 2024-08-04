import { html } from "hono/html";
import { jsxRenderer } from "hono/jsx-renderer";
import { Link, Script } from "honox/server";

export default jsxRenderer(({ children, title: propsTitle, frontmatter }, c) => {
  const description =
  frontmatter?.description ??
  "sori883のポートフォリオ";

  const title = propsTitle
    ? `${propsTitle} - KITUNE IS GOOD`
    : "KITUNE IS GOOD";

  const ogImage = "https://sori883.dev/static/ogp.png";


  return (
    <html lang="ja">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta
          property="og:url"
          content={`https://sori883.dev${c.req.path}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sorinaji" />
        <meta name="twitter:creator" content="@sorinaji" />
        <meta property="og:title" content={title} />

        <Link rel="icon" href="/favicon.ico" />
        <Link href={`https://sori883.dev${c.req.path}`} rel="canonical" />
        <Link href="/app/css/tailwind.css" rel="stylesheet" />
        <Link href="https://rsms.me/inter/inter.css" rel="preload" as="style" />
        <Link href="https://rsms.me/inter/inter.css" rel="stylesheet" />
        <Script src="/app/client.ts" async />
        {import.meta.env.PROD ? <GoogleAnalytics /> : null}
        <Script
            async
            src="https://platform.twitter.com/widgets.js"
          />
        <Link href="/app/css/index.scss" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
});

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-6M0STNVBYY"
      />
      {html`
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag("js", new Date());

          gtag("config", "G-6M0STNVBYY");
        </script>
      `}
    </>
  );
};