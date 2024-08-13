import { format } from "@formkit/tempo";

import type { Post } from "~/mdx/posts";
import { parseDate } from "~/utils/time";

type Props = {
  post: Post;
};

export async function PostSummary({ post }: Props) {
  return (
    <section className="h-[12rem] w-[20rem] rounded-[0.5rem] bg-secondary shadow">
      <a href={post.permalink}>
        <div className="flex min-h-[12rem] flex-col overflow-hidden">
          <div className="container mx-auto flex-1 p-6 px-4 pt-5 text-center">
            <span className="text-center text-6xl">
              {post.frontmatter.icon}
            </span>
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
