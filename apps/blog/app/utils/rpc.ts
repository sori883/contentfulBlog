import type { AppType } from "@acme/api";
import { hc } from "hono/client";

const url = process.env.NODE_ENV === "production" ? 
  "http://127.0.0.1:8787/" : "http://127.0.0.1:8787/";

// ベースURLを指定しないと動かないので適当なURLを設定
export const client = hc<AppType>(url);
