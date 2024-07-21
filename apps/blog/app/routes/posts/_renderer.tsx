import { format } from "@formkit/tempo";
import { jsxRenderer } from "hono/jsx-renderer";
import { parseDate } from "~/utils/time";

export default jsxRenderer(({ children, Layout, frontmatter, filepath }) => {
  if (!(frontmatter && filepath)) {
    return <div>Not Post Page</div>;
  }

  return (
    <Layout title={frontmatter.title} frontmatter={frontmatter}>
      <div>
        <time dateTime={frontmatter.date}>
          {format(parseDate(frontmatter.date), "YYYY/MM/DD")}
        </time>
      </div>
      <h1>{frontmatter.title}</h1>
      <article>{children}</article>
    </Layout>
  );
});
