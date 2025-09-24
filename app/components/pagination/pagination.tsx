const range = (start: number, end: number) =>
  [...Array<number>(end - start + 1)].map((_, i) => start + i);

export function Pagination(props: {
  totalCount: number;
  currentPage: number;
  basePath?: string;
}) {
  const basePath = props.basePath ?? "/";
  const maxPage = props.totalCount;

  const getPageUrl = (page: number) => {
    if (basePath === "/") {
      return page === 1 ? "/" : `/pages/${page}`;
    } else {
      return page === 1 ? basePath : `${basePath}/${page}`;
    }
  };

  const backlink = getPageUrl(props.currentPage - 1);

  if (maxPage > 0) {
    return (
      <div className="mt-10 flex items-center justify-between">
        <div className="flex flex-1 justify-between sm:hidden">
          <a
            href={props.currentPage === 1 ? getPageUrl(1) : backlink}
            className="bg-secondary text-theme bg-theme hover:bg-theme-hover relative inline-flex items-center rounded-[0.5rem] px-4 py-2 text-sm font-medium"
          >
            ＜
          </a>
          <a
            href={
              props.currentPage === maxPage
                ? getPageUrl(props.currentPage)
                : getPageUrl(props.currentPage + 1)
            }
            className="bg-secondary text-theme bg-theme hover:bg-theme-hover relative ml-3 inline-flex items-center rounded-[0.5rem] px-4 py-2 text-sm font-medium"
          >
            ＞
          </a>
        </div>

        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <nav
              className="-space-x-pxshadow-sm isolate inline-flex"
              aria-label="Pagination"
            >
              <a
                href={props.currentPage === 1 ? getPageUrl(1) : backlink}
                className="bg-secondary text-theme bg-theme hover:bg-theme-hover relative inline-flex items-center rounded-tl-[0.5rem] rounded-bl-[0.5rem] px-2 py-2 focus:z-20"
              >
                ＜
              </a>
              {range(1, maxPage).map((number, index) => (
                <a
                  href={getPageUrl(number)}
                  aria-current="page"
                  key={index}
                  className={` ${
                    props.currentPage === number
                      ? "bg-seagreen-600 text-theme bg-theme hover:bg-theme-hover relative z-10 inline-flex items-center px-4 py-2 text-sm font-bold focus:z-20"
                      : "bg-secondary text-theme bg-theme hover:bg-theme-hover relative inline-flex items-center px-4 py-2 text-sm font-bold focus:z-20"
                  } `}
                >
                  {number}
                </a>
              ))}
              <a
                href={
                  props.currentPage === maxPage
                    ? getPageUrl(props.currentPage)
                    : getPageUrl(props.currentPage + 1)
                }
                className="bg-secondary text-theme bg-theme hover:bg-theme-hover relative inline-flex items-center rounded-tr-[0.5rem] rounded-br-[0.5rem] px-2 py-2 focus:z-20"
              >
                ＞
              </a>
            </nav>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
