import type { PropsWithChildren } from "hono/jsx";

export function ErrorNote(props: PropsWithChildren) {
  return (
    <div>
      <aside className="my-8 rounded-br-[0.5rem] rounded-tr-[0.5rem] border-l-4 border-red-500 bg-red-900 p-3">
        <div className="mb-3 flex">
          <span className="mr-3 mt-[0.3rem] flex h-[1.3rem] w-[1.3rem] items-center justify-center rounded-full bg-red-900 text-sm font-bold text-red-600 ring-2 ring-red-500">
            !
          </span>
          <span className="block font-bold">Warning</span>
        </div>
        <div className="rounded-[0.5rem]">{props.children}</div>
      </aside>
    </div>
  );
}
