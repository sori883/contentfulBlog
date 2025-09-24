import type { Post } from "@/features/posts/index";
import { parseTwemoji } from "@/libs/twemoji";
import { parseDate } from "@/utils/timer";
import { format } from "@formkit/tempo";

type Props = {
  post: Post;
};

export async function PostSummary({ post }: Props) {
  const twemoji = parseTwemoji(post.frontmatter.icon);

  return (
    <section className="bg-theme hover:bg-theme-hover h-[22rem] w-[24rem] rounded-[0.5rem] shadow transition-colors duration-200">
      <a href={`/posts/${post.frontmatter.permalink}`}>
        <div className="flex h-full flex-col overflow-hidden">
          <div className="flex justify-center p-6 px-4 pt-5">
            <img
              class="h-auto w-28"
              src={twemoji[0].url}
              alt="ポストのアイキャッチ"
            />
          </div>
          <div className="flex flex-1 items-center px-6">
            <h1 className="text-theme line-clamp-3 text-left text-2xl font-bold">
              {post.frontmatter.title}
            </h1>
          </div>
          <div className="px-6 pb-6">
            <div className="mb-2">
              <span className="text-theme-secondary text-sm">
                # {post.frontmatter.category}
              </span>
            </div>
            <div className="flex">
              <time
                className="text-theme-secondary text-xs"
                dateTime={post.frontmatter.date}
              >
                {format(parseDate(post.frontmatter.date), "YYYY/MM/DD")}
              </time>
            </div>
          </div>
        </div>
      </a>
    </section>
  );
}
