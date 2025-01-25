import { client } from "~/utils/rpc";

type Props = {
  url: string;
  title?: string;
};

export async function ExLinkCard({ url, title }: Props) {
  const response = title
    ? { data: { title } }
    : await (await client.api.ogp.getOgp.$get({ query: { url } })).json();

  const urlObj = new URL(url);

  return (
    <div>
      <a
        href={url}
        className="ring-deep bg-deep my-4 block rounded-[0.5rem] p-3 text-white ring-1"
      >
        <div>
          <p className="mb-3">{response.data.title}</p>
          <div className="flex">
            <div className="mr-3 pt-2">
              <img
                src={`https://icons.duckduckgo.com/ip3/${urlObj.hostname}.ico`}
                alt="favicon"
                height="16"
                width="16"
                referrerPolicy="no-referrer"
              />
            </div>
            <span>{urlObj.hostname}</span>
          </div>
        </div>
      </a>
    </div>
  );
}
