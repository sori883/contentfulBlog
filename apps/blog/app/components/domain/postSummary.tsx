import { format } from "@formkit/tempo";
import { client } from "~/utils/rpc";

import type { Post } from "~/mdx/posts";
import { parseDate } from "~/utils/time";

type Props = {
  post: Post;
};

export async function PostSummary({ post }: Props) {
    const twemoji = (
      await (await client.api.twemoji.getTwemoji.$get({query: {emoji: post.frontmatter.icon}})).json()
    ).data;

  return (
    <section className="h-[12rem] w-[20rem] rounded-[0.5rem] bg-secondary shadow">
      <a href={post.permalink}>
        <div className="flex min-h-[12rem] flex-col overflow-hidden">
          <div className="container flex-1 p-6 px-4 pt-5 flex justify-center">
          <img  class="w-16 h-auto" src={twemoji[0]!.url} alt="記事のアイキャッチ" />
          </div>
          <div className="px-6 pb-6">
            <h1 className="text-lg font-bold">{post.frontmatter.title}</h1>
            <div className="flex">
              <time className="text-xs" dateTime={post.frontmatter.date}>
                {format(parseDate(post.frontmatter.date), "YYYY/MM/DD")}
              </time>
            </div>
          </div>
        </div>
      </a>
    </section>
  );
}
