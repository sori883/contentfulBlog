import type { PropsWithChildren } from "hono/jsx";

export function DoubleContentLayout({ children }: PropsWithChildren) {
  return (
    <div className="mx-auto max-w-4xl rounded-[0.5rem] bg-secondary px-2 py-6 shadow-sm ring-1 ring-gray-900/5 md:px-6">
      {children}
    </div>
  );
}
