import path from "node:path";
import honox from "honox/vite";
import client from "honox/vite/client";
import adapter from "@hono/vite-dev-server/cloudflare";
import ssg from "@hono/vite-ssg";
import mdx from "@mdx-js/rollup";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, normalizePath } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

import {
  recmaPlugins,
  rehypePlugins,
  remarkPlugins,
} from "./app/libs/mdx/mdx-plugin";

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
          external: ["@twemoji/parser", "jsdom"],
        },
        build: { emptyOutDir: false },
        resolve: {
          alias: { "@": path.resolve(__dirname, "./app") },
        },
        plugins: [
          honox({
            client: { input: ["./app/css/style.css"] },
            devServer: { adapter },
          }),
          ssg({ entry: "./app/server.ts" }),
          mdx({
            jsxImportSource: "hono/jsx",
            providerImportSource: "./app/libs/mdx/mdx-components",
            remarkPlugins,
            rehypePlugins,
            recmaPlugins,
          }),
          tailwindcss(),
          viteStaticCopy({
            targets: [
              {
                src: [
                  "./contents/posts/**/*.png",
                  "./contents/posts/**/*.jpg",
                  "./contents/posts/**/*.jpeg",
                  "./contents/posts/**/*.webp",
                  "./contents/posts/**/*.gif",
                ],
                dest: "posts/",
                rename: (
                  _fileName: string,
                  _fileExtension: string,
                  fullPath: string
                ) => {
                  const destPath = normalizePath(
                    path
                      .relative(__dirname, fullPath)
                      .replaceAll("contents/posts", "")
                  );
                  return destPath;
                },
                overwrite: false,
              },
            ],
          }),
        ],
      };
});
