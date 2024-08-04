import { client } from "~/utils/rpc";

type Props = {
  url: string
}

export async function ExLinkCard({ url }: Props) {
  const response = (await(
    await client.api.ogp.getOgp.$get({"query": {url}})
  ).json());
  
  const urlObj = new URL(url);

  return (
    <div>
      <a href={url} className="text-white block ring-1 ring-deep bg-deep rounded-[0.5rem] p-3 my-4">
          <div>
            <p className="mb-3">{response.data.title}</p>
            <div className="flex">
              <div className="pt-2 mr-3">
                <img
                  src={`https://icons.duckduckgo.com/ip3/${urlObj.hostname}.ico`}
                  alt="favicon"
                  height="16"
                  width="16"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <span>{urlObj.hostname}</span>
            </div>
          </div>
      </a>
    </div>
  );
}