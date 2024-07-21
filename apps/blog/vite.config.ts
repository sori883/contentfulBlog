import path from "node:path";
import pages from "@hono/vite-cloudflare-pages";
import adapter from "@hono/vite-dev-server/cloudflare";
import ssg from "@hono/vite-ssg";
import honox from "honox/vite";
import client from "honox/vite/client";
import { defineConfig, normalizePath  } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

const entry = "./app/server.ts";

// mdx
import mdx from "@mdx-js/rollup";
import recmaExportFilepath from "recma-export-filepath";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeMdxCodeProps from "rehype-mdx-code-props";
import rehypeMdxImportMedia from "rehype-mdx-import-media";
import rehypeMermaid from "rehype-mermaid";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => {
  if (mode === "client") {
    return {
      build: {
        rollupOptions: {
          input: ["/app/css/tailwind.css"],
        },
      },
      plugins: [client(), tsconfigPaths()],
    };
  } else {
    return {
      assetsInclude: ["**/*.JPG"],
      base:
        process.env.NODE_ENV === "production" ? "https://sori883.dev/" : "/",
      build: {
        emptyOutDir: false,
      },
      plugins: [
        tsconfigPaths(),
        honox({ devServer: { adapter } }),
        pages(),
        mdx({
          jsxImportSource: "hono/jsx",
          providerImportSource: "./app/mdx/mdx-components",
          remarkPlugins: [
            remarkFrontmatter,
            remarkMdxFrontmatter,
            remarkGfm
          ],
          rehypePlugins: [
            rehypeHighlight,
            rehypeMdxCodeProps,
            rehypeMdxImportMedia,
            rehypeMermaid
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
