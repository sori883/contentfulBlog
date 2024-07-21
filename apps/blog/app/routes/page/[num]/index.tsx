import type { Env } from "hono";
import { ssgParams } from "hono/ssg";
import { createRoute } from "honox/factory";
import { Pagination } from "~/components/elements/pagination";
import { PostSummary } from "~/components/domain/postSummary";
import { getAllPosts, getMaxPageNumber, getPosts } from "~/mdx/posts";

const param = ssgParams<Env>(_c => {
  const posts = getAllPosts();
  const maxPageNumber = getMaxPageNumber(posts);
  const params = [];
  for (let num = 1; num <= maxPageNumber; num++) {
    // 1ページ目はトップページなので生成する必要がない
    if (num <= 1) {
      continue;
    }
    params.push({ num: num.toString() });
  }
  return params;
});

export default createRoute(param, c => {
  const numStr = c.req.param("num");
  const num = Number.parseInt(numStr);
  if (Number.isNaN(num)) {
    return c.notFound();
  }

  const { posts, hasPrev, hasNext } = getPosts(num);

  return c.render(
    <div>
      <div>
        {posts.map(post => {
          return (<div key={post.id}><PostSummary post={post} /></div>);
        })}
      </div>
      <Pagination pageNumber={num} hasPrev={hasPrev} hasNext={hasNext} />
    </div>,
  );
});