import { createRoute } from "honox/factory";
import { getPosts } from "~/mdx/posts";
import { Pagination } from "~/components/elements/pagination";
import { PostSummary } from "~/components/domain/postSummary";

export default createRoute((c) => {
  const pageNum = 1;
  const { posts, hasPrev, hasNext } = getPosts(pageNum);

  return c.render(
    <div className="font-bold">
        {posts.map(post => {
          return (<div key={post.id}><PostSummary post={post} /></div>);
        })}
      <Pagination pageNumber={pageNum} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
});

