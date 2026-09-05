import type { PropsWithChildren } from "hono/jsx";

export function GridListLayout({ children }: PropsWithChildren) {
  return <div className="post-grid">{children}</div>;
}
