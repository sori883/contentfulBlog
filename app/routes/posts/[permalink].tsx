import { ssgParams } from "hono/ssg";
import { createRoute } from "honox/factory";
import { getAllPosts, getPostByPermalink } from "@/features/posts";
import { extractToc } from "@/features/toc";
import { parseTwemoji } from "@/libs/twemoji";
import { parseDate } from "@/utils/timer";
import { format } from "@formkit/tempo";

import { DoubleContentLayout } from "@/components/layouts/dubleContentLayout";
import { GeneralLayout } from "@/components/layouts/generalLayout";
import { TocRender } from "@/components/toc/tocRender";

export default createRoute(
  ssgParams(() => {
    const allPosts = getAllPosts();
    return allPosts.map((post) => ({
      permalink: post.frontmatter.permalink,
    }));
  }),

  async (c) => {
    const permalink = c.req.param("permalink");
    const post = getPostByPermalink(permalink);
    if (!post) return c.redirect("/404");

    const twemoji = parseTwemoji(post.frontmatter.icon);
    const toc = await extractToc(post.MDXContent({}));

    return c.render(
      <div>
        <title></title>
        <GeneralLayout>
          <div className="text-theme mb-8 text-center">
            <div className="mb-8 flex justify-center">
              <img
                class="h-auto w-36"
                src={twemoji[0]!.url}
                alt="この記事のアイキャッチ"
              />
            </div>
            <h1 className="mb-8 px-1">
              <span className="text-3xl">{post.frontmatter.title}</span>
            </h1>
            <div>
              <time dateTime={post.frontmatter.date}>
                {format(parseDate(post.frontmatter.date), "YYYY/MM/DD")}に公開
              </time>
            </div>
          </div>
          <div className="text-theme gap-1 md:grid md:grid-cols-4">
            <div className="md:col-span-3">
              <DoubleContentLayout>
                <div className="mb-5 flex px-2 md:hidden">
                  <TocRender toc={toc} />
                </div>
                <article className="znc">{post.MDXContent({})}</article>
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
      </div>,
      {
        title: post.frontmatter.title + " | 今日も生きてるだけでえらい",
        description: post.frontmatter.description,
      }
    );
  }
);
