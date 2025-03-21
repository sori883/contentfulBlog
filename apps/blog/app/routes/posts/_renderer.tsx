import { format } from "@formkit/tempo";
import { jsxRenderer } from "hono/jsx-renderer";
import { renderToString } from "hono/jsx/dom/server";

import { TocRender } from "~/components/domain/tocRender";
import { DoubleContentLayout } from "~/components/layouts/dubleContentLayout";
import { GeneralLayout } from "~/components/layouts/generalLayout";
import { client } from "~/utils/rpc";
import { parseDate } from "~/utils/time";

export default jsxRenderer(
  async ({ children, Layout, frontmatter, filepath }) => {
    if (!(frontmatter && filepath)) {
      return <div>Not Post Page</div>;
    }

    const html = renderToString(await children?.toString());
    const toc = (
      await (await client.api.toc.parseTocPost.$post({ json: { html } })).json()
    ).data;

    const twemoji = (
      await (await client.api.twemoji.getTwemoji.$get({query: {emoji: frontmatter.icon}})).json()
    ).data;

    return (
      <Layout title={frontmatter.title} frontmatter={frontmatter}>
        <GeneralLayout>
          <div className="mb-8 text-center">
            <div className="mb-8 flex justify-center">
              <img  class="w-36 h-auto" src={twemoji[0]!.url} alt="この記事のアイキャッチ" />
            </div>
            <h1 className="mb-8 px-1">
              <span className="text-3xl">{frontmatter.title}</span>
            </h1>
            <div>
              <time dateTime={frontmatter.date}>
                {format(parseDate(frontmatter.date), "YYYY/MM/DD")}に公開
              </time>
            </div>
          </div>
          <div className="gap-1 md:grid md:grid-cols-4">
            <div className="md:col-span-3">
              <DoubleContentLayout>
                <div className="mb-5 flex px-2 md:hidden">
                  <TocRender toc={toc} />
                </div>
                <article className="znc">{children}</article>
              </DoubleContentLayout>
            </div>
            <div className="hidden md:col-span-1 md:flex">
              <div className="min-w-full">
                <div className="sticky top-6">
                  <DoubleContentLayout>
                    <TocRender toc={toc} />
                  </DoubleContentLayout>
                </div>
              </div>
            </div>
          </div>
        </GeneralLayout>
      </Layout>
    );
  },
);
