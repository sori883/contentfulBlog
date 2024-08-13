import type { PropsWithChildren } from "hono/jsx";

export function GridListLayout({ children }: PropsWithChildren) {
  return (
    <div className="grid grid-cols-1 place-items-center gap-4 md:grid-cols-2 xl:grid-cols-3">
      {children}
    </div>
  );
}
