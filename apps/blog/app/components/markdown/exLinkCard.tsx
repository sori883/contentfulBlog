import { client } from "~/utils/rpc";

type Props = {
  url: string
}

export async function ExLinkCard({ url }: Props) {
  const ogp = await client.api.ogp.getOgp.$get({"query": {url}});
  const data = await ogp.json();

  return (
    <div>
      <a href={url}>
        {data.data.imageUrl && data.data.imageUrl.length >= 1 ? (
          <div>
            <img
              src={data.data.imageUrl}
              alt={data.data.title}
            />
          </div>
        ) : null}
        <div>
          <p>{ogp}</p>
          <div>{data.data.description}</div>
          <span>{new URL(url).host}</span>
        </div>
      </a>
    </div>
  );
}