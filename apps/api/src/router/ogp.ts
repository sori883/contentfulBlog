import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { z } from "zod";

import type { Bindings } from "../bindings";
import { getOgp } from "../usecase/ogp";

import type { OpgType } from "../usecase/ogp.ts";

const getOgpParam = z.object({
  url: z.string(),
});

export const ogpRouter = new Hono<{ Bindings: Bindings }>().get(
  "/getOgp",
  zValidator("query", getOgpParam),
  async (c) => {
    const { url } = c.req.valid("query");

    const cachedOgp = await c.env.KV.get<OpgType>(url.toString(), "json");

    if (cachedOgp) {
      return c.json({data: cachedOgp});
    }

    try {
      const ogp = await getOgp(url);
      // キャッシュ
      await c.env.KV.put(url.toString(), JSON.stringify(ogp));
      return c.json({ data: ogp });
    } catch (error) {
      console.error(error);
      throw new HTTPException(500, { message: "OGPの取得に失敗しました" });
    }
  },
);
