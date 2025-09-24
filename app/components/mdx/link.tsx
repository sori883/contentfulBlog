import type { JSX, PropsWithChildren } from "hono/jsx";

// content scssでaタグに直接スタイルを当てないようにするため
// 他のコンポーネントでaタグを使うときにかぶるから。
export function Link(props: PropsWithChildren<JSX.IntrinsicElements["a"]>) {
  return (
    <a href={props.href} className="content-link">
      {props.children}
    </a>
  );
}
