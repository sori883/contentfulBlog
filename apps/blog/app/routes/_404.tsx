import type { NotFoundHandler } from "hono";

import { GeneralLayout } from "~/components/layouts/generalLayout";

const handler: NotFoundHandler = (c) => {
  return c.render(
    <GeneralLayout>
      <h1 className="text-center text-9xl">ここにはなにもないよ！！</h1>
    </GeneralLayout>,
  );
};

export default handler;
