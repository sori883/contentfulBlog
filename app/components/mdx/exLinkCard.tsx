import { getOGP } from "@/features/ogp";

type Props = {
  url: string;
  title?: string;
};

export async function ExLinkCard({ url, title }: Props) {
  const ogpData = import.meta.env.PROD
    ? await getOGP(url)
    : await getOGP("https://sori883.dev");
  const cardTitle = title || ogpData.title || url;
  const urlObj = new URL(url);

  return (
    <a
      href={url}
      target="_blank"
      className="ogp-link transition-opacity hover:opacity-65"
      rel="noreferrer"
    >
      <div className="border-theme bg-theme-deep my-4 flex h-[136px] rounded-lg border no-underline max-md:h-28">
        <div className="flex h-full w-full flex-col justify-between px-6 py-4 max-md:px-4">
          <span className="line-clamp-1 font-bold text-ellipsis max-md:text-sm">
            {cardTitle}
          </span>
          {ogpData.description && (
            <span className="line-clamp-2 text-sm text-ellipsis text-gray-500 max-md:text-xs dark:text-gray-300">
              {ogpData.description}
            </span>
          )}
          <div className="flex items-center gap-2">
            <img
              src={`https://www.google.com/s2/favicons?domain=${urlObj.hostname}&sz=20`}
              width="16"
              height="16"
              alt={`favicon of ${url}`}
            />
            <span className="text-xs">
              {ogpData.siteName || urlObj.hostname}
            </span>
          </div>
        </div>
        {ogpData.imageUrl && (
          <div className="h-full">
            <img
              src={ogpData.imageUrl}
              className="h-full w-fit max-w-[32vw] rounded-r-lg object-cover"
              alt={`ogp of ${ogpData.imageUrl}`}
            />
          </div>
        )}
      </div>
    </a>
  );
}
