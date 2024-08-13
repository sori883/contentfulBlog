import type { PropsWithChildren } from "hono/jsx";

export function StyledPre(props: PropsWithChildren) {
  return <pre className="rounded-[0.5rem]">{props.children}</pre>;
}
