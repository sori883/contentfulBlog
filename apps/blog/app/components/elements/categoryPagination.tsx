const range = (start: number, end: number) =>
  [...Array<number>(end - start + 1)].map((_, i) => start + i);

type Props = {
  totalCount: number;
  currentPage: number;
  categoryId: string;
};

export function CategoryPagination({
  totalCount,
  currentPage,
  categoryId,
}: Props) {
  const basePath = `/categories/${categoryId}`;
  const maxPage = totalCount;

  const getPageUrl = (page: number) => {
    return page === 1 ? basePath : `${basePath}?page=${page}`;
  };

  const backlink = getPageUrl(currentPage - 1);
  const nextlink = getPageUrl(currentPage + 1);

  if (maxPage > 0) {
    return (
      <div className="mt-10 flex items-center justify-between">
        <div className="flex flex-1 justify-between sm:hidden">
          <a
            href={currentPage === 1 ? basePath : backlink}
            className="relative inline-flex items-center rounded-[0.5rem] bg-secondary px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
          >
            ＜
          </a>
          <a
            href={currentPage === maxPage ? getPageUrl(currentPage) : nextlink}
            className="relative ml-3 inline-flex items-center rounded-[0.5rem] bg-secondary px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:text-white"
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
                href={currentPage === 1 ? basePath : backlink}
                className="relative inline-flex items-center rounded-bl-[0.5rem] rounded-tl-[0.5rem] bg-secondary px-2 py-2 text-gray-400 hover:text-white focus:z-20"
              >
                ＜
              </a>
              {range(1, maxPage).map((number, index) => (
                <a
                  href={getPageUrl(number)}
                  aria-current="page"
                  key={index}
                  className={` ${
                    currentPage === number
                      ? "bg-seagreen-600 relative z-10 inline-flex items-center px-4 py-2 text-sm font-bold text-white focus:z-20"
                      : "relative inline-flex items-center bg-secondary px-4 py-2 text-sm font-bold text-gray-500 hover:text-white focus:z-20"
                  } `}
                >
                  {number}
                </a>
              ))}
              <a
                href={
                  currentPage === maxPage ? getPageUrl(currentPage) : nextlink
                }
                className="relative inline-flex items-center rounded-br-[0.5rem] rounded-tr-[0.5rem] bg-secondary px-2 py-2 text-gray-500 hover:text-white focus:z-20"
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
