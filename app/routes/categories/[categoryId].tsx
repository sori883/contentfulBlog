import { ssgParams } from "hono/ssg";
import { createRoute } from "honox/factory";
import { getCategories, getCategoryPosts } from "@/features/posts";

import { GeneralLayout } from "@/components/layouts/generalLayout";
import { GridListLayout } from "@/components/layouts/gridListLayout";
import { PrimeContentLayout } from "@/components/layouts/primeContentLayout";
import { Pagination } from "@/components/pagination/pagination";
import { CategoryList } from "@/components/post/categoryList";
import { PostSummary } from "@/components/post/postSummary";
import { QiitaLink } from "@/components/social/qiitaLink";
import { ZennLink } from "@/components/social/zennLink";

export default createRoute(
  ssgParams(() => {
    const categories = getCategories();
    const params = [];
    for (const category of categories) {
      // 各カテゴリの1ページ目のみSSG生成
      params.push({
        categoryId: category.id,
      });
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
          <h2 className="text-theme mb-8 text-xl font-bold"># {posts?.name}</h2>
          <div className="mb-8 flex gap-3">
            <div>
              <QiitaLink />
            </div>
            <div>
              <ZennLink />
            </div>
          </div>
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
      </GeneralLayout>,
      {
        title: posts?.name + " | 今日も生きてるだけでえらい",
        description: `${posts?.name}記事一覧`,
      }
    );
  }
);
