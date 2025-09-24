import { html } from "hono/html";

export const GoogleAnalytics = () => {
  return (
    <>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-6M0STNVBYY"
      />
      {html`
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag("js", new Date());

          gtag("config", "G-6M0STNVBYY");
        </script>
      `}
    </>
  );
};
