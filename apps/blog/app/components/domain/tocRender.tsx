import { cx } from "hono/css";

import type { RouterOutputs } from "~/utils/rpc";

type Toc = RouterOutputs["GetToc"]["data"][0];

export function TocRender({ toc }: { toc: Toc[] }) {
  const renderList = (tocItems: Toc[]) => {
    return (
      <div className="min-w-full">
        <h1 className="mb-2 text-xl font-bold">目次</h1>
        <ul className="list-inside list-decimal">
          {tocItems.map((toc) => (
            <li
              key={toc.id}
              className={cx(
                "my-1 hover:text-gray-400 hover:underline",
                toc.level === 2 ? "" : "pl-[1rem]",
              )}
            >
              <a
                href={`#${toc.id}`}
                className="a-link inline-flex items-center break-all py-1 text-sm"
              >
                {toc.text}
              </a>
              {toc.children.length > 0 && <ul>{renderList(toc.children)}</ul>}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="w-full">
      <ol>{renderList(toc)}</ol>
    </div>
  );
}
