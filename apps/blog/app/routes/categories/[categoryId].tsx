import type { Env } from "hono";
import { ssgParams } from "hono/ssg";
import { createRoute } from "honox/factory";

import { CategoryList } from "~/components/domain/categoryList";
import { PostSummary } from "~/components/domain/postSummary";
import { Pagination } from "~/components/elements/pagination";
import { GeneralLayout } from "~/components/layouts/generalLayout";
import { GridListLayout } from "~/components/layouts/gridListLayout";
import { PrimeContentLayout } from "~/components/layouts/primeContentLayout";
import { getCategories, getCategoryPosts, getMaxPageNumber } from "~/mdx/posts";

const param = ssgParams<Env>((_c) => {
  const categories = getCategories();
  const params = [];
  for (const category of categories) {
    // 各カテゴリの1ページ目のみSSG生成（他はクライアント側ルーティング）
    params.push({
      categoryId: category.id,
    });
  }
  return params;
});

export default createRoute(param, (c) => {
  const categoryId = c.req.param("categoryId");
  const pageStr = c.req.query("page") ?? "1";
  const pageNum = Number.parseInt(pageStr);

  if (Number.isNaN(pageNum) || pageNum < 1) {
    return c.notFound();
  }

  const categoryData = getCategoryPosts(categoryId, pageNum);

  if (!categoryData) {
    return c.render(
      <GeneralLayout>
        <div className="text-center">
          <h1 className="text-2xl font-bold">カテゴリが見つかりません</h1>
        </div>
      </GeneralLayout>,
    );
  }

  // カテゴリの全記事数から総ページ数を計算
  const category = getCategories().find((c) => c.id === categoryId);
  const totalCount = category ? getMaxPageNumber(category.posts) : 1;

  return c.render(
    <GeneralLayout>
      <PrimeContentLayout>
        <CategoryList />
      </PrimeContentLayout>
      <PrimeContentLayout>
        <div className="mb-6">
          <h1 className="text-2xl font-bold">{categoryData.name}</h1>
          <p className="mt-2">{category?.posts.length ?? 0}件の記事</p>
        </div>
      </PrimeContentLayout>

      <GridListLayout>
        {categoryData.posts.map((post) => {
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
          totalCount={totalCount}
          basePath={`/categories/${categoryId}`}
        />
      </div>
    </GeneralLayout>,
  );
});
