const range = (start: number, end: number) =>
  [...Array<number>(end - start + 1)].map((_, i) => start + i);

export function Pagination(props: { totalCount: number, currentPage: number}) {
  const pathname = "/";
  const maxPage = props.totalCount;
  const backlink = props.currentPage - 1 === 1 ? `${pathname}` : `${pathname}page/${props.currentPage - 1}/`;
  
  if (maxPage > 0) {
  return (
    <div className="flex items-center justify-between mt-10">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href={props.currentPage === 1 ? `${pathname}` : `${backlink}`}
          className="relative inline-flex items-center bg-secondary px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 shadow-sm rounded-[0.5rem]"
        >
          ＜
        </a>
        <a
          href={props.currentPage === maxPage ? `${pathname}page/${props.currentPage}/` : `${pathname}page/${props.currentPage + 1}/`}
          className="relative ml-3 inline-flex items-center  bg-secondary px-4 py-2 text-sm font-medium text-gray-700 hover:text-white shadow-sm rounded-[0.5rem]"
        >
          ＞
        </a>
      </div>

      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <nav className="isolate inline-flex -space-x-pxshadow-sm" aria-label="Pagination">
            <a
              href={props.currentPage === 1 ? `${pathname}` : `${backlink}`}
              className="bg-secondary relative inline-flex items-center px-2 py-2 text-gray-400 focus:z-20 hover:text-white rounded-tl-[0.5rem] rounded-bl-[0.5rem]"
            >
              ＜
            </a>
            {range(1, maxPage).map((number, index) => (
              <a
                href={number === 1 ? `${pathname}` : `${pathname}page/${number}/`}
                aria-current="page"
                key={index}
                className={`
                ${props.currentPage === number ?
                  "relative z-10 inline-flex items-center bg-seagreen-600 px-4 py-2 text-sm font-bold text-white focus:z-20"
                  :
                  "bg-secondary relative inline-flex items-center px-4 py-2 text-sm font-bold text-gray-500 focus:z-20 hover:text-white"}
                `}
              >
                { number }
              </a>
            ))}
            <a
                href={props.currentPage === maxPage ? `${pathname}page/${props.currentPage}/` : `${pathname}page/${props.currentPage + 1}/`}
              className="bg-secondary relative inline-flex items-center px-2 py-2 text-gray-500 focus:z-20 hover:text-white rounded-tr-[0.5rem] rounded-br-[0.5rem]"
            >
              ＞
            </a>
          </nav>
        </div>
      </div>
    </div>
  );} else { return null; }
}