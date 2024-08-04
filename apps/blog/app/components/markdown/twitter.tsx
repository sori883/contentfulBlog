type Props = {
  url: string
}

export function Twitter({ url }: Props) {
  return (
    <div>
      <blockquote className="twitter-tweet" data-width="400px" data-theme="dark">
        <a href={url}>{url}</a>
      </blockquote>
    </div>
  );
}