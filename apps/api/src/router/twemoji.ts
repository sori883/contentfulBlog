import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";

import type { Bindings } from "../bindings";
import { parseTwemoji } from "../usecase/twemoji";

const getTwemoji = z.object({
  emoji: z.string(),
});

export const twemojiRouter = new Hono<{ Bindings: Bindings }>().get(
  "/getTwemoji",
  zValidator("query", getTwemoji),
  (c) => {
    const { emoji } = c.req.valid("query");

    const twemoji = parseTwemoji(emoji);

    return c.json({ data: twemoji });
  }
);
