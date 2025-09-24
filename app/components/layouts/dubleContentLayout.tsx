import type { PropsWithChildren } from "hono/jsx";

export function DoubleContentLayout({ children }: PropsWithChildren) {
  return (
    <div className="bg-theme mx-auto max-w-4xl rounded-[0.5rem] px-2 py-6 shadow-sm ring-1 ring-gray-900/5 md:px-6">
      {children}
    </div>
  );
}
