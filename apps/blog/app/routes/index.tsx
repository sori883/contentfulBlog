import { getAllPosts, getMaxPageNumber, getPosts } from "~/mdx/posts";
import { Pagination } from "~/components/elements/pagination";
import { PostSummary } from "~/components/domain/postSummary";
import { GeneralLayout } from "~/components/layouts/generalLayout";
import { createRoute } from "honox/factory";
import { GridListLayout } from "~/components/layouts/gridListLayout";


export default createRoute((c) => {
  const allPosts = getAllPosts();
  const totalCount = getMaxPageNumber(allPosts);
  
  const pageNum = 1; 
  
  const { posts } = getPosts(pageNum);

  return c.render(
    <GeneralLayout>
      <GridListLayout>
          {posts.map(post => {
            return (
              <div key={post.id}><PostSummary post={post} /></div>
            );
          })}
      </GridListLayout>

      <div className="flex justify-center">
        <Pagination
          currentPage={pageNum}
          totalCount={totalCount}
          />
      </div>
    </GeneralLayout>
  );
});