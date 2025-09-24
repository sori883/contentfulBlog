import type { Toc } from "@/features/toc";

export function TocRender({ toc }: { toc: Toc[] }) {
  const renderList = (tocItems: Toc[], parentCounter: number[] = []) => {
    return (
      <ul
        className={
          parentCounter.length === 0
            ? "list-inside list-decimal"
            : "ml-4 list-inside list-decimal"
        }
      >
        {tocItems.map((toc, index) => {
          const currentCounter = [...parentCounter, index + 1];
          const isTopLevel = toc.level === 2;

          return (
            <li
              key={toc.id}
              className="my-1"
              style={!isTopLevel ? { listStyleType: "none" } : {}}
            >
              <a
                href={`#${toc.id}`}
                className="a-link inline-flex items-center py-1 text-sm break-all hover:text-gray-400 hover:underline"
              >
                {!isTopLevel && (
                  <span className="mr-2">{currentCounter.join(".")}</span>
                )}
                {toc.text}
              </a>
              {toc.children.length > 0 &&
                renderList(toc.children, currentCounter)}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="w-full">
      <h1 className="mb-2 text-xl font-bold">目次</h1>
      {renderList(toc)}
    </div>
  );
}
