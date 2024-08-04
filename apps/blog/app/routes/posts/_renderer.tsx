import { format } from "@formkit/tempo";
import { jsxRenderer } from "hono/jsx-renderer";
import { parseDate } from "~/utils/time";
import { renderToString } from "hono/jsx/dom/server";
import { GeneralLayout } from "~/components/layouts/generalLayout";
import { DoubleContentLayout }from "~/components/layouts/dubleContentLayout";
import { client } from "~/utils/rpc";
import { TocRender } from "~/components/domain/tocRender";


export default jsxRenderer(async ({ children, Layout, frontmatter, filepath }) => {
  if (!(frontmatter && filepath)) {
    return <div>Not Post Page</div>;
  }

  const html = renderToString(await children?.toString());
  const toc = (await (await client.api.toc.parseToc.$get({"query": {html}})).json()).data;

  return (
    <Layout title={frontmatter.title} frontmatter={frontmatter}>
      <GeneralLayout>
        <div className="mb-8 text-center">
          <div className="mb-8">
            <span className="text-9xl">{frontmatter.icon}</span>
          </div>
          <h1 className="mb-8">
              <span className="text-3xl">{frontmatter.title}</span>
          </h1>
          <div>
            <time dateTime={frontmatter.date}>
              {format(parseDate(frontmatter.date), "YYYY/MM/DD")}に公開
            </time>
          </div>
        </div>
        <div className="md:grid md:grid-cols-4 gap-1">
        <div className="md:col-span-3">
          <DoubleContentLayout>
            <div className="flex md:hidden px-2 mb-5">
              <TocRender toc={toc} />
            </div>
            <article className="znc">{children}</article>
          </DoubleContentLayout>
        </div>
        <div className="hidden md:col-span-1 md:flex">
          <div className="min-w-full">
            <div className="sticky top-20">
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
});
