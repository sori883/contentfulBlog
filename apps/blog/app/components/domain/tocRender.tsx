import type { RouterOutputs } from "~/utils/rpc";
import { cx } from "hono/css";

type Toc = RouterOutputs["GetToc"]["data"][0];


export function TocRender({ toc }: {toc: Toc[]}) {
const renderList = (tocItems: Toc[]) => {
    return (
      <div className="min-w-full">
        <h1 className="font-bold text-xl mb-2">目次</h1>
        <ul className="list-inside list-decimal">
          {tocItems.map((toc) => (
            <li key={toc.id} className={cx("hover:underline hover:text-gray-400 my-1", toc.level === 2 ? "" : "pl-[1rem]")}>
              <a
                href={`#${toc.id}`}
                className="py-1 a-link inline-flex items-center break-all text-midium"
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