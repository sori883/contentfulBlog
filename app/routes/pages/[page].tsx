import { ssgParams } from "hono/ssg";
import { createRoute } from "honox/factory";
import { getAllPosts, getMaxPageNumber, getPosts } from "@/features/posts";

import { GeneralLayout } from "@/components/layouts/generalLayout";
import { GridListLayout } from "@/components/layouts/gridListLayout";
import { PrimeContentLayout } from "@/components/layouts/primeContentLayout";
import { Pagination } from "@/components/pagination/pagination";
import { CategoryList } from "@/components/post/categoryList";
import { PostSummary } from "@/components/post/postSummary";
import { ZennLink } from "@/components/social/zennLink";

export default createRoute(
  ssgParams(() => {
    const posts = getAllPosts();
    const maxPageNumber = getMaxPageNumber(posts);
    const params = [];
    for (let num = 1; num <= maxPageNumber; num++) {
      // 1ページ目はトップページなので生成不要
      if (num <= 1) {
        continue;
      }
      params.push({ page: num.toString() });
    }
    return params;
  }),

  (c) => {
    const pageNumStr = c.req.param("page");
    const pageNum = Number.parseInt(pageNumStr);

    const allPosts = getAllPosts();
    const totalCount = getMaxPageNumber(allPosts);

    if (Number.isNaN(pageNum)) {
      return c.notFound();
    }

    const { posts } = getPosts(pageNum);

    return c.render(
      <GeneralLayout>
        <PrimeContentLayout>
          <h2 className="text-theme mb-8 text-xl font-bold">ブログ</h2>
          <div className="mb-8">
            <ZennLink />
          </div>
          <CategoryList />
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
          <Pagination currentPage={pageNum} totalCount={totalCount} />
        </div>
      </GeneralLayout>
    );
  }
);
