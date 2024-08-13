import "hono";

import type { Frontmatter } from "~/mdx/mdx-types";

type Head = {
  frontmatter?: Frontmatter;
  filepath?: string;
  title?: string;
};

declare module "hono" {
  interface Env {
    Variables: {};
    Bindings: {};
  }
  // https://hono.dev/docs/middleware/builtin/jsx-renderer
  interface ContextRenderer {
    (content: string | Promise<string>, head?: Head): Response;
  }
}
