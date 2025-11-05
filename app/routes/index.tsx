import { createRoute } from "honox/factory";
import { getAllPosts, getMaxPageNumber, getPosts } from "@/features/posts";

import { GeneralLayout } from "@/components/layouts/generalLayout";
import { GridListLayout } from "@/components/layouts/gridListLayout";
import { PrimeContentLayout } from "@/components/layouts/primeContentLayout";
import { Pagination } from "@/components/pagination/pagination";
import { CategoryList } from "@/components/post/categoryList";
import { PostSummary } from "@/components/post/postSummary";
import { QiitaLink } from "@/components/social/qiitaLink";
import { ZennLink } from "@/components/social/zennLink";

export default createRoute((c) => {
  const totalCount = getMaxPageNumber(getAllPosts());
  const pageNum = 1;
  const { posts } = getPosts(pageNum);

  return c.render(
    <GeneralLayout>
      <PrimeContentLayout>
        <h2 className="text-theme mb-8 text-xl font-bold">ブログ</h2>
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
});
