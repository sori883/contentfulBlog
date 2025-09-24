import type {} from "@formkit/tempo";

type Head = {
  title?: string;
  description?: string;
};

declare module "hono" {
  interface ContextRenderer {
    (
      content: string | Promise<string>,
      head?: Head
    ): Response | Promise<Response>;
  }
}
