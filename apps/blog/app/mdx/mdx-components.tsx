import type { JSX, PropsWithChildren } from "hono/jsx";
import type { MDXComponents } from "mdx/types";
import { Twitter } from "~/components/markdown/twitter";
import { ExLinkCard } from "~/components/markdown/exLinkCard";

export function useMDXComponents(): MDXComponents {
  const components = {
    img: Image,
    Twitter: Twitter,
    ExLinkCard: ExLinkCard,
  };
  
  return components;
}

// JSX.IntrinsicElements["xx"]について
// https://github.com/honojs/hono/pull/2937


export function Image(props: PropsWithChildren<JSX.IntrinsicElements["img"]>) {
  // 本番ビルドではviteStaticCopyによって画像がコピーされているので、それに合わせたパスになるようにしている
  const src = import.meta.env.PROD
    ? props.src?.replaceAll("/app/routes", "")
    : props.src;

  return (
    <a href={src}>
      <img src={src} alt={props.alt} />
    </a>
  );
}