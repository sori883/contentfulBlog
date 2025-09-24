import type { PropsWithChildren } from "hono/jsx";

export function WarningNote(props: PropsWithChildren) {
  return (
    <div>
      <aside className="my-8 rounded-tr-[0.5rem] rounded-br-[0.5rem] border-l-4 border-yellow-500 bg-yellow-50 p-3 dark:bg-yellow-900">
        <div className="mb-3 flex">
          <span className="mt-[0.3rem] mr-3 flex h-[1.3rem] w-[1.3rem] items-center justify-center rounded-full bg-yellow-100 text-sm font-bold text-yellow-600 ring-2 ring-yellow-500 dark:bg-yellow-900">
            !
          </span>
          <span className="block font-bold text-yellow-900 dark:text-yellow-100">
            Warning
          </span>
        </div>
        <div className="rounded-[0.5rem]">{props.children}</div>
      </aside>
    </div>
  );
}
