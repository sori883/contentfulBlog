type Props = {
  pageNumber: number

  hasPrev: boolean
  hasNext: boolean

  basePath?: string
}

export function Pagination({ pageNumber, hasPrev, hasNext, basePath }: Props) {
  return (
    <div>
      {hasPrev ? (
        <a href={`${basePath ?? ""}/page/${pageNumber - 1}/`}>
          &#8592;
        </a>
      ) : (
        <div />
      )}
      <span>{pageNumber}</span>
      {hasNext ? (
        <a href={`${basePath ?? ""}/page/${pageNumber + 1}/`}>
          &#8594;
        </a>
      ) : null}
    </div>
  );
}