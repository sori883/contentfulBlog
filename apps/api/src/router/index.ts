import { Hono } from "hono";

import type { Bindings } from "../bindings";
import { ogpRouter } from "./ogp";
import { tocRouter } from "./toc";
import { twemojiRouter } from "./twemoji";

export const appRouter = new Hono<{ Bindings: Bindings }>()
  .route("/ogp", ogpRouter)
  .route("/toc", tocRouter)
  .route("/twemoji", twemojiRouter);