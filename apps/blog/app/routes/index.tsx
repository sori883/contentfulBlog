import { CategoryList } from "~/components/domain/categoryList";
import { PostSummary } from "~/components/domain/postSummary";
import { Pagination } from "~/components/elements/pagination";
import { GeneralLayout } from "~/components/layouts/generalLayout";
import { GridListLayout } from "~/components/layouts/gridListLayout";
import { PrimeContentLayout } from "~/components/layouts/primeContentLayout";
import { getAllPosts, getMaxPageNumber, getPosts } from "~/mdx/posts";

export default function Top() {
  const allPosts = getAllPosts();
  const totalCount = getMaxPageNumber(allPosts);

  const pageNum = 1;

  const { posts } = getPosts(pageNum);

  return (
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
        <Pagination currentPage={pageNum} totalCount={totalCount} />
      </div>
    </GeneralLayout>
  );
}
