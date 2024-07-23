import { format } from "@formkit/tempo";

import type { Post } from "~/mdx/posts";
import { parseDate } from "~/utils/time";

type Props = {
  post: Post
}

export async function PostSummary({ post }: Props) {
  return (
    <section className="bg-secondary shadow rounded-[0.5rem] w-[20rem] sm:w-[20rem] md:w-[20rem] h-[12rem]">
      <a href={post.permalink}>
        <div className="overflow-hidden flex flex-col min-h-[12rem]">
          <div className="flex-1 container mx-auto px-4 pt-5 sm:p-6 text-center">
            <span className="text-6xl text-center">{post.frontmatter.icon}</span>
          </div>
          <div className="pb-6 sm:px-6">
            <h1 className="font-bold text-lg">{post.frontmatter.title}</h1>
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
