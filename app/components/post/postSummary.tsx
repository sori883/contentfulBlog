import type { Post } from "@/features/posts/index";
import { parseTwemoji } from "@/libs/twemoji";
import { parseDate } from "@/utils/timer";
import { format } from "@formkit/tempo";

export function PostSummary({ post }: { post: Post }) {
  const twemoji = parseTwemoji(post.frontmatter.icon);
  return (
    <article className="post-card">
      <a href={`/posts/${post.frontmatter.permalink}`}>
        <div className="post-art">
          <img
            src={twemoji[0].url}
            alt=""
            width="80"
            height="80"
            loading="lazy"
          />
          <span aria-hidden="true">↗</span>
        </div>
        <div className="post-copy">
          <div className="post-meta">
            <time dateTime={post.frontmatter.date}>
              {format(parseDate(post.frontmatter.date), "YYYY.MM.DD")}
            </time>
            <span>{post.frontmatter.category}</span>
          </div>
          <h3>{post.frontmatter.title}</h3>
          <span className="read-note">
            READ NOTE <span aria-hidden="true">→</span>
          </span>
        </div>
      </a>
    </article>
  );
}
