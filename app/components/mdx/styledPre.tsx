import type { PropsWithChildren } from "hono/jsx";

export function StyledPre(props: PropsWithChildren) {
  return (
    <pre className="border-theme rounded-[0.5rem] border">{props.children}</pre>
  );
}
