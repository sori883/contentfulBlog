import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import type { Bindings } from "../bindings";
import { getOgp } from "../usecase/ogp";
import type { OpgType } from "../usecase/ogp";
import { z } from "zod";

const getOgpParam = z.object({
  url: z.string(),
});

export const ogpRouter = new Hono<{ Bindings: Bindings }>()
  .get("/getOgp", zValidator("query", getOgpParam), async (c) => {
    const { url } = c.req.valid("query");

    const cachedOgp = await c.env.KV.get<OpgType>(url, "json");

    if (cachedOgp) {
      return c.json({data: cachedOgp});
    }

    try {
      const ogp = await getOgp(url);
      c.executionCtx.waitUntil(c.env.KV.put(url, JSON.stringify(ogp), { expirationTtl: 86400 * 30 }));

      return c.json({data: ogp});
    } catch (error) {
      console.error(error);
      throw new HTTPException(500, { message: "OGPの取得に失敗しました" });
    }
});
