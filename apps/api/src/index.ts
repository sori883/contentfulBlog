import { Hono } from "hono";
import { cors } from "hono/cors";

import type { Bindings } from "./bindings";
import { appRouter } from "./router";

const app = new Hono<{ Bindings: Bindings }>();

app.use(
  "/api/*",
  cors({
    // eslint-disable-next-line
    origin: (_origin, c) => c.env.API_ORIGIN,
    allowHeaders: [
      "X-Custom-Header",
      "Upgrade-Insecure-Requests",
      "Content-Type",
    ],
    allowMethods: ["POST", "GET", "OPTIONS"],
    exposeHeaders: ["Content-Length", "X-Kuma-Revision"],
    maxAge: 600,
  }),
);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const route = app.route("/api", appRouter);

/**
 * Hono RRC type definition of API
 */
export type AppType = typeof route;

export default app;
