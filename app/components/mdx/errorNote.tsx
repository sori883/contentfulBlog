import type { PropsWithChildren } from "hono/jsx";

export function ErrorNote(props: PropsWithChildren) {
  return (
    <div>
      <aside className="my-8 rounded-tr-[0.5rem] rounded-br-[0.5rem] border-l-4 border-red-500 bg-red-50 p-3 dark:bg-red-900">
        <div className="mb-3 flex">
          <span className="mt-[0.3rem] mr-3 flex h-[1.3rem] w-[1.3rem] items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600 ring-2 ring-red-500 dark:bg-red-900">
            !
          </span>
          <span className="block font-bold text-red-900 dark:text-red-100">
            Error
          </span>
        </div>
        <div className="rounded-[0.5rem]">{props.children}</div>
      </aside>
    </div>
  );
}
