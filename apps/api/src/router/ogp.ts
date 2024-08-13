import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { z } from "zod";

import type { Bindings } from "../bindings";
import { getOgp } from "../usecase/ogp";

const getOgpParam = z.object({
  url: z.string(),
});

export const ogpRouter = new Hono<{ Bindings: Bindings }>().get(
  "/getOgp",
  zValidator("query", getOgpParam),
  async (c) => {
    const { url } = c.req.valid("query");

    try {
      const ogp = await getOgp(url);
      return c.json({ data: ogp });
    } catch (error) {
      console.error(error);
      throw new HTTPException(500, { message: "OGPの取得に失敗しました" });
    }
  },
);
