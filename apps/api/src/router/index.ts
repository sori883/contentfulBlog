import { Hono } from "hono";
import type { Bindings } from "../bindings";

import { ogpRouter } from "./ogp";
import { tocRouter } from "./toc";

export const appRouter = new Hono<{ Bindings: Bindings }>()
.route("/ogp", ogpRouter)
.route("/toc", tocRouter);