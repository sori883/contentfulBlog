import path from "node:path";

import adapter from "@hono/vite-dev-server/cloudflare";
import ssg from "@hono/vite-ssg";
// mdx
import mdx from "@mdx-js/rollup";
import honox from "honox/vite";
import client from "honox/vite/client";
import recmaExportFilepath from "recma-export-filepath";
import rehypeHighlight from "rehype-highlight";
import rehypeMdxCodeProps from "rehype-mdx-code-props";
import rehypeMdxImportMedia from "rehype-mdx-import-media";
import rehypeMermaid from "rehype-mermaid";
import rehypeSlug from "rehype-slug";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import rehypePrettyCode from "rehype-pretty-code";
import { defineConfig, normalizePath } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import tsconfigPaths from "vite-tsconfig-paths";

const entry = "@/server.ts";

export default defineConfig(({ mode }) => {
  if (mode === "client") {
    return {
      build: {
        rollupOptions: {
          input: ["/app/css/tailwind.css", "/app/css/index.scss"],
        },
      },
      plugins: [client(), tsconfigPaths()],
    };
  } else {
    return {
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "app"),
        },
      },
      assetsInclude: ["**/*.JPG"],
      base:
        process.env.NODE_ENV === "production" ? "https://sori883.dev/" : "/",
      build: {
        emptyOutDir: false,
      },
      plugins: [
        tsconfigPaths(),
        honox({ devServer: { adapter } }),
        mdx({
          jsxImportSource: "hono/jsx",
          providerImportSource: "@/mdx/mdx-components",
          remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkGfm],
          rehypePlugins: [
            rehypeHighlight,
            rehypeMdxCodeProps,
            rehypeMdxImportMedia,
            rehypeMermaid,
            rehypeSlug,
          ],
          recmaPlugins: [recmaExportFilepath],
        }),
        ssg({ entry }),
        // 記事内に配置している画像たちを `dist/posts` にコピーする
        viteStaticCopy({
          targets: [
            {
              src: [
                "./app/routes/posts/**/*.png",
                "./app/routes/posts/**/*.jpg",
                "./app/routes/posts/**/*.jpeg",
                "./app/routes/posts/**/*.webp",
              ],
              dest: "posts",
              rename: (
                fileName: string,
                fileExtension: string,
                fullPath: string,
              ) => {
                const destPath = normalizePath(
                  path
                    .relative(__dirname, fullPath)
                    .replaceAll("app/routes/posts/", ""),
                );
                return destPath;
              },
              // 普通のviteのビルドで生成したファイルを消さないようにする
              overwrite: false,
            },
          ],
        }),
      ],
    };
  }
});
