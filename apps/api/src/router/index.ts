import { Hono } from "hono";
import type { Bindings } from "../bindings";

import { ogpRouter } from "./ogp";

export const appRouter = new Hono<{ Bindings: Bindings }>()
.route("/ogp", ogpRouter);