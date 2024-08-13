type Props = {
  url: string;
};

export function Twitter({ url }: Props) {
  // x.comだと埋め込み起動しないので置き換え
  const twUrl = url.replace("https://x.com/", "https://twitter.com/");

  return (
    <div>
      <blockquote
        className="twitter-tweet"
        data-width="400px"
        data-theme="dark"
      >
        <a href={twUrl}>{url}</a>
      </blockquote>
    </div>
  );
}
