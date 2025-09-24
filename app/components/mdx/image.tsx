import type { JSX, PropsWithChildren } from "hono/jsx";

export function Image(props: PropsWithChildren<JSX.IntrinsicElements["img"]>) {
  const src = props.src?.replaceAll("/contents/posts/", "/posts/");

  return (
    <a href={src}>
      <img className="content-img" src={src} alt={props.alt} loading="lazy" />
    </a>
  );
}
