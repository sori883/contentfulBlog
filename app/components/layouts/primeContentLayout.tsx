import type { PropsWithChildren } from "hono/jsx";

export function PrimeContentLayout({ children }: PropsWithChildren) {
  return <div className="max-w-8xl mx-auto">{children}</div>;
}
