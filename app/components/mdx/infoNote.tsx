import type { PropsWithChildren } from "hono/jsx";

export function InfoNote(props: PropsWithChildren) {
  return (
    <div>
      <aside className="my-8 rounded-tr-[0.5rem] rounded-br-[0.5rem] border-l-4 border-blue-500 bg-blue-50 p-3 dark:bg-blue-900">
        <div className="mb-3 flex">
          <span className="mt-[0.3rem] mr-3 flex h-[1.3rem] w-[1.3rem] items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600 ring-2 ring-blue-500 dark:bg-blue-900">
            i
          </span>
          <span className="block font-bold text-blue-900 dark:text-blue-100">
            Infomation
          </span>
        </div>
        <div className="rounded-[0.5rem]">{props.children}</div>
      </aside>
    </div>
  );
}
