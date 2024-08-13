import type { PropsWithChildren } from "hono/jsx";

export function InfoNote(props: PropsWithChildren) {
  return (
    <div>
      <aside className="my-8 rounded-br-[0.5rem] rounded-tr-[0.5rem] border-l-4 border-blue-500 bg-blue-900 p-3">
        <div className="mb-3 flex">
          <span className="mr-3 mt-[0.3rem] flex h-[1.3rem] w-[1.3rem] items-center justify-center rounded-full bg-blue-900 text-sm font-bold text-blue-600 ring-2 ring-blue-500">
            i
          </span>
          <span className="block font-bold">Infomation</span>
        </div>
        <div className="rounded-[0.5rem]">{props.children}</div>
      </aside>
    </div>
  );
}
