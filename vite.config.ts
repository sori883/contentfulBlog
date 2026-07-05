import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import path from "node:path";
import honox from "honox/vite";
import client from "honox/vite/client";
import adapter from "@hono/vite-dev-server/cloudflare";
import ssg from "@hono/vite-ssg";
import mdx from "@mdx-js/rollup";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, normalizePath, type Plugin } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

import {
  recmaPlugins,
  rehypePlugins,
  remarkPlugins,
} from "./app/libs/mdx/mdx-plugin";

const contentPostsDir = path.resolve(__dirname, "contents/posts");

const imageContentTypes: Record<string, string> = {
  ".gif": "image/gif",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
};

function servePostImagesFromContents(): Plugin {
  return {
    name: "serve-post-images-from-contents",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        let pathname: string;

        try {
          pathname = decodeURIComponent(
            new URL(req.url ?? "", "http://localhost").pathname
          );
        } catch {
          next();
          return;
        }

        if (!pathname.startsWith("/posts/")) {
          next();
          return;
        }

        const contentType =
          imageContentTypes[path.extname(pathname).toLowerCase()];
        if (!contentType) {
          next();
          return;
        }

        const relativePath = pathname.slice("/posts/".length);
        if (!relativePath || relativePath.includes("\0")) {
          next();
          return;
        }

        const filePath = path.resolve(contentPostsDir, relativePath);
        const relativeToContentPosts = path.relative(contentPostsDir, filePath);
        if (
          relativeToContentPosts.startsWith("..") ||
          path.isAbsolute(relativeToContentPosts)
        ) {
          next();
          return;
        }

        try {
          const stats = await stat(filePath);
          if (!stats.isFile()) {
            next();
            return;
          }

          res.statusCode = 200;
          res.setHeader("Content-Type", contentType);
          res.setHeader("Content-Length", stats.size);
          res.setHeader("Cache-Control", "no-cache");
          createReadStream(filePath).pipe(res);
        } catch {
          next();
        }
      });
    },
  };
}

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
          external: ["@twemoji/parser", "jsdom", "feed"],
        },
        build: { emptyOutDir: false },
        resolve: {
          alias: { "@": path.resolve(__dirname, "./app") },
          builtins: [/^node:/],
        },
        plugins: [
          servePostImagesFromContents(),
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
                  return normalizePath(
                    path.relative(
                      path.resolve(__dirname, "contents/posts"),
                      fullPath
                    )
                  );
                },
                overwrite: false,
              },
            ],
          }),
        ],
      };
});
