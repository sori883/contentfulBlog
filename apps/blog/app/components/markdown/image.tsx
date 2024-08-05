import type { JSX, PropsWithChildren } from "hono/jsx";

// 画像のsrcをいい感じに操作するため。
// スタイルも同様に
export function Image(props: PropsWithChildren<JSX.IntrinsicElements["img"]>) {
  // 本番ビルドではviteStaticCopyによって画像がコピーされているので、それに合わせたパスになるようにしている
  const src = import.meta.env.PROD
    ? props.src?.replaceAll("/app/routes", "")
    : props.src;

  return (
    <a href={src}>
      <img className="content-img" src={src} alt={props.alt} loading="lazy" />
    </a>
  );
}
