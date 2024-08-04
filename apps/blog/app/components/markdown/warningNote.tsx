import type { PropsWithChildren } from "hono/jsx";

export function WarningNote(props: PropsWithChildren) {
  return (
    <div>
      <aside className="border-l-4 border-yellow-500 bg-yellow-900 rounded-tr-[0.5rem] rounded-br-[0.5rem] p-3 my-8">
        <div className="flex mb-3">
          <span className="mr-3 mt-[0.3rem]  ring-2 ring-yellow-500 rounded-full w-[1.3rem] h-[1.3rem] text-yellow-600 flex justify-center items-center font-bold bg-yellow-900 text-sm">!</span>
          <span className="block font-bold">Warning</span>
        </div>
      <div className="rounded-[0.5rem]">
        {props.children}
      </div>
      </aside>
    </div>
  );
}