import path from "node:path";
import honox from "honox/vite";
import client from "honox/vite/client";
import adapter from "@hono/vite-dev-server/cloudflare";
import ssg from "@hono/vite-ssg";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  return mode === "client"
    ? {
        plugins: [client(), tailwindcss()],
        resolve: {
          alias: { "@": path.resolve(__dirname, "./app") },
        },
        build: {
          rollupOptions: {
            input: [
              "./app/client.ts",
              "./app/css/style.css",
              "./app/css/content.css",
            ],
            output: {
              assetFileNames: "static/assets/[name].[ext]",
            },
          },
        },
      }
    : {
        ssr: {
          target: "node",
          external: ["@twemoji/parser"],
        },
        build: { emptyOutDir: false },
        resolve: {
          alias: { "@": path.resolve(__dirname, "./app") },
          builtins: [/^node:/],
        },
        plugins: [
          honox({
            client: { input: ["./app/css/style.css"] },
            devServer: { adapter },
          }),
          ssg({ entry: "./app/server.ts" }),
          tailwindcss(),
        ],
      };
});
