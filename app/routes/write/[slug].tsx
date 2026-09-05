import { ssgParams } from "hono/ssg";
import { createRoute } from "honox/factory";
import { readWrites } from "@/features/write/content";

import { GeneralLayout } from "@/components/layouts/generalLayout";
import { SiteMenu } from "@/components/navigation/siteMenu";

export default createRoute(
  ssgParams(() => readWrites().entries.map((entry) => ({ slug: entry.slug }))),
  (c) => {
    const entry = readWrites().entries.find(
      (entry) => entry.slug === c.req.param("slug")
    );
    if (!entry) return c.notFound();
    return c.render(
      <GeneralLayout>
        <div className="write-page">
          <SiteMenu current="write" />
          <article className="write-document">
            <h1>{entry.title}</h1>
            <p className="write-updated">
              <time dateTime={entry.updated}>
                更新 {entry.updated.replaceAll("-", "/")}
              </time>
            </p>
            <div
              className="write-prose"
              dangerouslySetInnerHTML={{ __html: entry.html }}
            />
          </article>
          <a className="write-back" href="/write">
            ← WRITEの一覧へ
          </a>
        </div>
      </GeneralLayout>,
      { title: entry.title, description: entry.description || entry.title }
    );
  }
);
