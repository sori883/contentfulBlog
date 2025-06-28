import type { Env } from "hono";
import { ssgParams } from "hono/ssg";
import { createRoute } from "honox/factory";

import { CategoryList } from "~/components/domain/categoryList";
import { PostSummary } from "~/components/domain/postSummary";
import { Pagination } from "~/components/elements/pagination";
import { GeneralLayout } from "~/components/layouts/generalLayout";
import { GridListLayout } from "~/components/layouts/gridListLayout";
import { PrimeContentLayout } from "~/components/layouts/primeContentLayout";
import { getAllPosts, getMaxPageNumber, getPosts } from "~/mdx/posts";

const param = ssgParams<Env>((_c) => {
  const posts = getAllPosts();
  const maxPageNumber = getMaxPageNumber(posts);
  const params = [];
  for (let num = 1; num <= maxPageNumber; num++) {
    // 1ページ目はトップページなので生成する必要がない
    if (num <= 1) {
      continue;
    }
    params.push({
      num: num.toString(),
    });
  }
  return params;
});

export default createRoute(param, (c) => {
  const numStr = c.req.param("num");
  const num = Number.parseInt(numStr);

  const allPosts = getAllPosts();
  const totalCount = getMaxPageNumber(allPosts);

  if (Number.isNaN(num)) {
    return c.notFound();
  }

  const { posts } = getPosts(num);

  return c.render(
    <GeneralLayout>
      <PrimeContentLayout>
        <CategoryList />
      </PrimeContentLayout>
      <PrimeContentLayout>
        <h2 className="mb-4 text-xl font-bold">新規記事</h2>
      </PrimeContentLayout>
      <GridListLayout>
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <PostSummary post={post} />
            </div>
          );
        })}
      </GridListLayout>
      <div className="flex justify-center">
        <Pagination currentPage={num} totalCount={totalCount} />
      </div>
    </GeneralLayout>,
  );
});
