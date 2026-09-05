import { createRoute } from "honox/factory";
import { readWrites } from "@/features/write/content";

import { GeneralLayout } from "@/components/layouts/generalLayout";
import { SiteMenu } from "@/components/navigation/siteMenu";

export default createRoute((c) => {
  const { entries } = readWrites();
  return c.render(
    <GeneralLayout>
      <div className="write-page">
        <h1 className="page-title">
          Write<span className="coral-dot">.</span>
        </h1>
        <SiteMenu current="write" />
        {entries.length ? (
          <ul className="write-list">
            {entries.map((entry) => (
              <li key={entry.slug}>
                <a href={`/write/${entry.slug}`}>
                  <time dateTime={entry.updated}>
                    更新 {entry.updated.replaceAll("-", "/")}
                  </time>
                  <h2>{entry.title}</h2>
                  {entry.description ? <p>{entry.description}</p> : null}
                  <span className="write-arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="write-empty">まだ文章はありません。</p>
        )}
      </div>
    </GeneralLayout>,
    { title: "Write", description: "sori883が書いた文章。" }
  );
});
