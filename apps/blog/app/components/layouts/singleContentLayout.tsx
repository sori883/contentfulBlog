import type { PropsWithChildren } from "hono/jsx";

export function SingleContentLayout({ children }: PropsWithChildren) {
  return (
    <div className="mx-auto max-w-6xl px-2 md:px-6 py-8 bg-secondary ring-1 ring-gray-900/5 shadow-sm rounded-[0.5rem]">
      { children }
    </div>
  );
}