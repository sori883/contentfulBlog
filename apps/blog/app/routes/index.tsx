import { PostSummary } from "~/components/domain/postSummary";
import { Pagination } from "~/components/elements/pagination";
import { GeneralLayout } from "~/components/layouts/generalLayout";
import { GridListLayout } from "~/components/layouts/gridListLayout";
import { getAllPosts, getMaxPageNumber, getPosts } from "~/mdx/posts";

export default function Top() {
  const allPosts = getAllPosts();
  const totalCount = getMaxPageNumber(allPosts);

  const pageNum = 1;

  const { posts } = getPosts(pageNum);

  return (
    <GeneralLayout>
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
