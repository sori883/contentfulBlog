import { format } from "@formkit/tempo";

import type { Post } from "~/mdx/posts";
import { parseDate } from "~/utils/time";

type Props = {
  post: Post
}

export async function PostSummary({ post }: Props) {
  return (
    <section>
      <a href={post.permalink}>
        <div>
          <time dateTime={post.frontmatter.date}>
            {format(parseDate(post.frontmatter.date), "YYYY/MM/DD")}
          </time>
          <h1>{post.frontmatter.title}</h1>
          <div />
        </div>
      </a>

      <a href={post.permalink}>
        続きを読む
      </a>
    </section>
  );
}