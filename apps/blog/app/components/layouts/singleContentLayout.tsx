import type { PropsWithChildren } from "hono/jsx";

export function SingleContentLayout({ children }: PropsWithChildren) {
  return (
    <div className="mx-auto max-w-6xl rounded-[0.5rem] bg-secondary px-2 py-8 shadow-sm ring-1 ring-gray-900/5 md:px-6">
      {children}
    </div>
  );
}
