type Props = {
  url: string
}

export function Twitter({ url }: Props) {
  return (
    <div>
      <blockquote className="twitter-tweet" data-width="400px">
        <a href={url}>{url}</a>
      </blockquote>
    </div>
  );
}