import { getPosts } from "~/mdx/posts";
import { Pagination } from "~/components/elements/pagination";
import { PostSummary } from "~/components/domain/postSummary";
import { GeneralLayout } from "~/components/layouts/generalLayout";

export default function Top() {
  const pageNum = 1;
  const { posts, hasPrev, hasNext } = getPosts(pageNum);

  return (
    <GeneralLayout>
      <div className="grid grid-cols-3 gap-4">
          {posts.map(post => {
            return (
              <div key={post.id}><PostSummary post={post} /></div>
            );
          })}
      </div>
      <Pagination pageNumber={pageNum} hasPrev={hasPrev} hasNext={hasNext} />
    </GeneralLayout>
  );
};

