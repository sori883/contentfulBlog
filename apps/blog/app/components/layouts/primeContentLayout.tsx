import type { PropsWithChildren } from "hono/jsx";

export function PrimeContentLayout({ children }: PropsWithChildren) {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 px-4">
      {children}
    </div>
  );
}
