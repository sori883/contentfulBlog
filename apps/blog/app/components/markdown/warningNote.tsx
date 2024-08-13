import type { PropsWithChildren } from "hono/jsx";

export function WarningNote(props: PropsWithChildren) {
  return (
    <div>
      <aside className="my-8 rounded-br-[0.5rem] rounded-tr-[0.5rem] border-l-4 border-yellow-500 bg-yellow-900 p-3">
        <div className="mb-3 flex">
          <span className="mr-3 mt-[0.3rem] flex h-[1.3rem] w-[1.3rem] items-center justify-center rounded-full bg-yellow-900 text-sm font-bold text-yellow-600 ring-2 ring-yellow-500">
            !
          </span>
          <span className="block font-bold">Warning</span>
        </div>
        <div className="rounded-[0.5rem]">{props.children}</div>
      </aside>
    </div>
  );
}
