import pages from "@hono/vite-cloudflare-pages";
import adapter from "@hono/vite-dev-server/cloudflare";
import ssg from "@hono/vite-ssg";
import honox from "honox/vite";
import client from "honox/vite/client";
import { defineConfig } from "vite";

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

export default defineConfig(({ mode }) => {
  if (mode === "client") {
    return {
      build: {
        rollupOptions: {
          input: ["/app/css/tailwind.css"],
        },
      },
      plugins: [client()],
    };
  } else {
    return {
      build: {
        emptyOutDir: false,
      },
      plugins: [
        honox({ devServer: { adapter } }),
        pages(),
        mdx({
          // TODO provider追加
          jsxImportSource: "hono/jsx",
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
      ],
    };
  }
});
