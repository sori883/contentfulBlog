import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { z } from "zod";

import type { Bindings } from "../bindings";
import { makeToc } from "../usecase/toc";

const getTocParam = z.object({
  html: z.string(),
});

export const tocRouter = new Hono<{ Bindings: Bindings }>().get(
  "/parseToc",
  zValidator("query", getTocParam),
  async (c) => {
    const { html } = c.req.valid("query");

    try {
      const tocs = await makeToc(html);
      return c.json({ data: tocs });
    } catch (error) {
      console.error(error);
      throw new HTTPException(500, { message: "TOCの作成に失敗しました" });
    }
  },
);
