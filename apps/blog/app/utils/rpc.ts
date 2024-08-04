import type { AppType } from "@acme/api";
import type { InferResponseType } from "hono/client";
import { hc } from "hono/client";


const url = import.meta.env.PROD ? 
  "https://api.sori883.dev/" : "http://127.0.0.1:8787/";

// ベースURLを指定しないと動かないので適当なURLを設定
export const client = hc<AppType>(url);

// Infer
/**
 * Response Types
 * 利用あるものだけ
 */
export type RouterOutputs = {
  GetOgp:  InferResponseType<typeof client.api.ogp.getOgp.$get>
  GetToc:  InferResponseType<typeof client.api.toc.parseToc.$get>
}