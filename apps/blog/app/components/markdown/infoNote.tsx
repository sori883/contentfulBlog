import type { PropsWithChildren } from "hono/jsx";

export function InfoNote(props: PropsWithChildren) {
  return (
    <div>
      <aside className="border-l-4 border-blue-500 bg-blue-900 rounded-tr-[0.5rem] rounded-br-[0.5rem] p-3 my-8">
        <div className="flex mb-3">
          <span className="mr-3 mt-[0.3rem]  ring-2 ring-blue-500 rounded-full w-[1.3rem] h-[1.3rem] text-blue-600 flex justify-center items-center font-bold bg-blue-900 text-sm">i</span>
          <span className="block font-bold">Infomation</span>
        </div>
      <div className="rounded-[0.5rem]">
        {props.children}
      </div>
      </aside>
    </div>
  );
}