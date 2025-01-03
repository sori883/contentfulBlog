import type { PropsWithChildren } from "hono/jsx";

export function StyledPre(props: PropsWithChildren) {
  return <div className="rounded-[0.5rem]">{props.children}</div>;
}
