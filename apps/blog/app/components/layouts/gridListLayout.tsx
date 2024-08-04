import type { PropsWithChildren } from "hono/jsx";

export function GridListLayout({ children }: PropsWithChildren) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 place-items-center">
      {children}
    </div>
  );
}