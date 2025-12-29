import { ssgParams } from "hono/ssg";
import { createRoute } from "honox/factory";
import {
  getCategories,
  getCategoryPosts,
  getMaxPageNumber,
} from "@/features/posts";

import { GeneralLayout } from "@/components/layouts/generalLayout";
import { GridListLayout } from "@/components/layouts/gridListLayout";
import { PrimeContentLayout } from "@/components/layouts/primeContentLayout";
import { Pagination } from "@/components/pagination/pagination";
import { CategoryList } from "@/components/post/categoryList";
import { PostSummary } from "@/components/post/postSummary";

export default createRoute(
  ssgParams(() => {
    const categories = getCategories();
    const params = [];
    for (const category of categories) {
      const totalPages = getMaxPageNumber(category.posts);
      for (let page = 2; page <= totalPages; page++) {
        // 1ページ目は /categories/[categoryId] で処理されるので2ページ目から
        params.push({
          categoryId: category.id,
          page: page.toString(),
        });
      }
    }
    return params;
  }),

  (c) => {
    const pageNum = c.req.param("page") ? Number(c.req.param("page")) : 1;
    const categoryId = c.req.param("categoryId");
    const posts = getCategoryPosts(categoryId!, pageNum);

    return c.render(
      <GeneralLayout>
        <PrimeContentLayout>
          <h2 className="mb-8 text-xl font-bold"># {posts?.name}</h2>
          <CategoryList />
        </PrimeContentLayout>
        <GridListLayout>
          {posts?.posts &&
            posts.posts.map((post) => {
              return (
                <div key={post.id}>
                  <PostSummary post={post} />
                </div>
              );
            })}
        </GridListLayout>
        <div className="flex justify-center">
          <Pagination
            currentPage={pageNum}
            totalCount={posts?.totalCount || 1}
            basePath={`/categories/${categoryId}`}
          />
        </div>
      </GeneralLayout>
    );
  }
);
