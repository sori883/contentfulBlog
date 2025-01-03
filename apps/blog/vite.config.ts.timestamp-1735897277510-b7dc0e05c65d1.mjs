// vite.config.ts
import path from "node:path";
import adapter from "file:///C:/Users/const/misaki/contentfulBlog/apps/blog/node_modules/@hono/vite-dev-server/dist/adapter/cloudflare.js";
import ssg from "file:///C:/Users/const/misaki/contentfulBlog/node_modules/.pnpm/@hono+vite-ssg@0.1.0_hono@4.5.9/node_modules/@hono/vite-ssg/dist/index.js";
import mdx from "file:///C:/Users/const/misaki/contentfulBlog/node_modules/.pnpm/@mdx-js+rollup@3.0.1_rollup@4.21.1/node_modules/@mdx-js/rollup/index.js";
import honox from "file:///C:/Users/const/misaki/contentfulBlog/node_modules/.pnpm/honox@0.1.24_hono@4.5.9/node_modules/honox/dist/vite/index.js";
import client from "file:///C:/Users/const/misaki/contentfulBlog/node_modules/.pnpm/honox@0.1.24_hono@4.5.9/node_modules/honox/dist/vite/client.js";
import recmaExportFilepath from "file:///C:/Users/const/misaki/contentfulBlog/node_modules/.pnpm/recma-export-filepath@1.1.0/node_modules/recma-export-filepath/index.js";
import rehypeHighlight from "file:///C:/Users/const/misaki/contentfulBlog/node_modules/.pnpm/rehype-highlight@7.0.0/node_modules/rehype-highlight/index.js";
import rehypeMdxCodeProps from "file:///C:/Users/const/misaki/contentfulBlog/node_modules/.pnpm/rehype-mdx-code-props@3.0.1/node_modules/rehype-mdx-code-props/dist/rehype-mdx-code-props.js";
import rehypeMdxImportMedia from "file:///C:/Users/const/misaki/contentfulBlog/node_modules/.pnpm/rehype-mdx-import-media@1.2.0/node_modules/rehype-mdx-import-media/dist/rehype-mdx-import-media.js";
import rehypeMermaid from "file:///C:/Users/const/misaki/contentfulBlog/node_modules/.pnpm/rehype-mermaid@2.1.0/node_modules/rehype-mermaid/dist/rehype-mermaid.js";
import rehypeSlug from "file:///C:/Users/const/misaki/contentfulBlog/node_modules/.pnpm/rehype-slug@6.0.0/node_modules/rehype-slug/index.js";
import remarkFrontmatter from "file:///C:/Users/const/misaki/contentfulBlog/apps/blog/node_modules/remark-frontmatter/index.js";
import remarkGfm from "file:///C:/Users/const/misaki/contentfulBlog/apps/blog/node_modules/remark-gfm/index.js";
import remarkMdxFrontmatter from "file:///C:/Users/const/misaki/contentfulBlog/node_modules/.pnpm/remark-mdx-frontmatter@5.0.0/node_modules/remark-mdx-frontmatter/dist/remark-mdx-frontmatter.js";
import { defineConfig, normalizePath } from "file:///C:/Users/const/misaki/contentfulBlog/node_modules/.pnpm/vite@5.4.2_@types+node@22.5.1_sass@1.77.8/node_modules/vite/dist/node/index.js";
import { viteStaticCopy } from "file:///C:/Users/const/misaki/contentfulBlog/node_modules/.pnpm/vite-plugin-static-copy@1.0.6_vite@5.4.2_@types+node@22.5.1_sass@1.77.8_/node_modules/vite-plugin-static-copy/dist/index.js";
import tsconfigPaths from "file:///C:/Users/const/misaki/contentfulBlog/node_modules/.pnpm/vite-tsconfig-paths@5.0.1_typescript@5.5.4_vite@5.4.2_@types+node@22.5.1_sass@1.77.8_/node_modules/vite-tsconfig-paths/dist/index.js";
var __vite_injected_original_dirname = "C:\\Users\\const\\misaki\\contentfulBlog\\apps\\blog";
var entry = "@/server.ts";
var vite_config_default = defineConfig(({ mode }) => {
  if (mode === "client") {
    return {
      build: {
        rollupOptions: {
          input: ["/app/css/tailwind.css", "/app/css/index.scss"]
        }
      },
      plugins: [client(), tsconfigPaths()]
    };
  } else {
    return {
      resolve: {
        alias: {
          "@": path.resolve(__vite_injected_original_dirname, "app")
        }
      },
      assetsInclude: ["**/*.JPG"],
      base: process.env.NODE_ENV === "production" ? "https://sori883.dev/" : "/",
      build: {
        emptyOutDir: false
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
            rehypeSlug
          ],
          recmaPlugins: [recmaExportFilepath]
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
                "./app/routes/posts/**/*.webp"
              ],
              dest: "posts",
              rename: (fileName, fileExtension, fullPath) => {
                const destPath = normalizePath(
                  path.relative(__vite_injected_original_dirname, fullPath).replaceAll("app/routes/posts/", "")
                );
                return destPath;
              },
              // 普通のviteのビルドで生成したファイルを消さないようにする
              overwrite: false
            }
          ]
        })
      ]
    };
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxjb25zdFxcXFxtaXNha2lcXFxcY29udGVudGZ1bEJsb2dcXFxcYXBwc1xcXFxibG9nXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxjb25zdFxcXFxtaXNha2lcXFxcY29udGVudGZ1bEJsb2dcXFxcYXBwc1xcXFxibG9nXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9jb25zdC9taXNha2kvY29udGVudGZ1bEJsb2cvYXBwcy9ibG9nL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHBhdGggZnJvbSBcIm5vZGU6cGF0aFwiO1xuXG5pbXBvcnQgYWRhcHRlciBmcm9tIFwiQGhvbm8vdml0ZS1kZXYtc2VydmVyL2Nsb3VkZmxhcmVcIjtcbmltcG9ydCBzc2cgZnJvbSBcIkBob25vL3ZpdGUtc3NnXCI7XG4vLyBtZHhcbmltcG9ydCBtZHggZnJvbSBcIkBtZHgtanMvcm9sbHVwXCI7XG5pbXBvcnQgaG9ub3ggZnJvbSBcImhvbm94L3ZpdGVcIjtcbmltcG9ydCBjbGllbnQgZnJvbSBcImhvbm94L3ZpdGUvY2xpZW50XCI7XG5pbXBvcnQgcmVjbWFFeHBvcnRGaWxlcGF0aCBmcm9tIFwicmVjbWEtZXhwb3J0LWZpbGVwYXRoXCI7XG5pbXBvcnQgcmVoeXBlSGlnaGxpZ2h0IGZyb20gXCJyZWh5cGUtaGlnaGxpZ2h0XCI7XG5pbXBvcnQgcmVoeXBlTWR4Q29kZVByb3BzIGZyb20gXCJyZWh5cGUtbWR4LWNvZGUtcHJvcHNcIjtcbmltcG9ydCByZWh5cGVNZHhJbXBvcnRNZWRpYSBmcm9tIFwicmVoeXBlLW1keC1pbXBvcnQtbWVkaWFcIjtcbmltcG9ydCByZWh5cGVNZXJtYWlkIGZyb20gXCJyZWh5cGUtbWVybWFpZFwiO1xuaW1wb3J0IHJlaHlwZVNsdWcgZnJvbSBcInJlaHlwZS1zbHVnXCI7XG5pbXBvcnQgcmVtYXJrRnJvbnRtYXR0ZXIgZnJvbSBcInJlbWFyay1mcm9udG1hdHRlclwiO1xuaW1wb3J0IHJlbWFya0dmbSBmcm9tIFwicmVtYXJrLWdmbVwiO1xuaW1wb3J0IHJlbWFya01keEZyb250bWF0dGVyIGZyb20gXCJyZW1hcmstbWR4LWZyb250bWF0dGVyXCI7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcsIG5vcm1hbGl6ZVBhdGggfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHsgdml0ZVN0YXRpY0NvcHkgfSBmcm9tIFwidml0ZS1wbHVnaW4tc3RhdGljLWNvcHlcIjtcbmltcG9ydCB0c2NvbmZpZ1BhdGhzIGZyb20gXCJ2aXRlLXRzY29uZmlnLXBhdGhzXCI7XG5cbmNvbnN0IGVudHJ5ID0gXCJAL3NlcnZlci50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiB7XG4gIGlmIChtb2RlID09PSBcImNsaWVudFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJ1aWxkOiB7XG4gICAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgICBpbnB1dDogW1wiL2FwcC9jc3MvdGFpbHdpbmQuY3NzXCIsIFwiL2FwcC9jc3MvaW5kZXguc2Nzc1wiXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBwbHVnaW5zOiBbY2xpZW50KCksIHRzY29uZmlnUGF0aHMoKV0sXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzb2x2ZToge1xuICAgICAgICBhbGlhczoge1xuICAgICAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcImFwcFwiKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBhc3NldHNJbmNsdWRlOiBbXCIqKi8qLkpQR1wiXSxcbiAgICAgIGJhc2U6XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IFwiaHR0cHM6Ly9zb3JpODgzLmRldi9cIiA6IFwiL1wiLFxuICAgICAgYnVpbGQ6IHtcbiAgICAgICAgZW1wdHlPdXREaXI6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgdHNjb25maWdQYXRocygpLFxuICAgICAgICBob25veCh7IGRldlNlcnZlcjogeyBhZGFwdGVyIH0gfSksXG4gICAgICAgIG1keCh7XG4gICAgICAgICAganN4SW1wb3J0U291cmNlOiBcImhvbm8vanN4XCIsXG4gICAgICAgICAgcHJvdmlkZXJJbXBvcnRTb3VyY2U6IFwiQC9tZHgvbWR4LWNvbXBvbmVudHNcIixcbiAgICAgICAgICByZW1hcmtQbHVnaW5zOiBbcmVtYXJrRnJvbnRtYXR0ZXIsIHJlbWFya01keEZyb250bWF0dGVyLCByZW1hcmtHZm1dLFxuICAgICAgICAgIHJlaHlwZVBsdWdpbnM6IFtcbiAgICAgICAgICAgIHJlaHlwZUhpZ2hsaWdodCxcbiAgICAgICAgICAgIHJlaHlwZU1keENvZGVQcm9wcyxcbiAgICAgICAgICAgIHJlaHlwZU1keEltcG9ydE1lZGlhLFxuICAgICAgICAgICAgcmVoeXBlTWVybWFpZCxcbiAgICAgICAgICAgIHJlaHlwZVNsdWcsXG4gICAgICAgICAgXSxcbiAgICAgICAgICByZWNtYVBsdWdpbnM6IFtyZWNtYUV4cG9ydEZpbGVwYXRoXSxcbiAgICAgICAgfSksXG4gICAgICAgIHNzZyh7IGVudHJ5IH0pLFxuICAgICAgICAvLyBcdThBMThcdTRFOEJcdTUxODVcdTMwNkJcdTkxNERcdTdGNkVcdTMwNTdcdTMwNjZcdTMwNDRcdTMwOEJcdTc1M0JcdTUwQ0ZcdTMwNUZcdTMwNjFcdTMwOTIgYGRpc3QvcG9zdHNgIFx1MzA2Qlx1MzBCM1x1MzBENFx1MzBGQ1x1MzA1OVx1MzA4QlxuICAgICAgICB2aXRlU3RhdGljQ29weSh7XG4gICAgICAgICAgdGFyZ2V0czogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzcmM6IFtcbiAgICAgICAgICAgICAgICBcIi4vYXBwL3JvdXRlcy9wb3N0cy8qKi8qLnBuZ1wiLFxuICAgICAgICAgICAgICAgIFwiLi9hcHAvcm91dGVzL3Bvc3RzLyoqLyouanBnXCIsXG4gICAgICAgICAgICAgICAgXCIuL2FwcC9yb3V0ZXMvcG9zdHMvKiovKi5qcGVnXCIsXG4gICAgICAgICAgICAgICAgXCIuL2FwcC9yb3V0ZXMvcG9zdHMvKiovKi53ZWJwXCIsXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIGRlc3Q6IFwicG9zdHNcIixcbiAgICAgICAgICAgICAgcmVuYW1lOiAoXG4gICAgICAgICAgICAgICAgZmlsZU5hbWU6IHN0cmluZyxcbiAgICAgICAgICAgICAgICBmaWxlRXh0ZW5zaW9uOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgZnVsbFBhdGg6IHN0cmluZyxcbiAgICAgICAgICAgICAgKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVzdFBhdGggPSBub3JtYWxpemVQYXRoKFxuICAgICAgICAgICAgICAgICAgcGF0aFxuICAgICAgICAgICAgICAgICAgICAucmVsYXRpdmUoX19kaXJuYW1lLCBmdWxsUGF0aClcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2VBbGwoXCJhcHAvcm91dGVzL3Bvc3RzL1wiLCBcIlwiKSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJldHVybiBkZXN0UGF0aDtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgLy8gXHU2NjZFXHU5MDFBXHUzMDZFdml0ZVx1MzA2RVx1MzBEM1x1MzBFQlx1MzBDOVx1MzA2N1x1NzUxRlx1NjIxMFx1MzA1N1x1MzA1Rlx1MzBENVx1MzBBMVx1MzBBNFx1MzBFQlx1MzA5Mlx1NkQ4OFx1MzA1NVx1MzA2QVx1MzA0NFx1MzA4OFx1MzA0Nlx1MzA2Qlx1MzA1OVx1MzA4QlxuICAgICAgICAgICAgICBvdmVyd3JpdGU6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTBVLE9BQU8sVUFBVTtBQUUzVixPQUFPLGFBQWE7QUFDcEIsT0FBTyxTQUFTO0FBRWhCLE9BQU8sU0FBUztBQUNoQixPQUFPLFdBQVc7QUFDbEIsT0FBTyxZQUFZO0FBQ25CLE9BQU8seUJBQXlCO0FBQ2hDLE9BQU8scUJBQXFCO0FBQzVCLE9BQU8sd0JBQXdCO0FBQy9CLE9BQU8sMEJBQTBCO0FBQ2pDLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sdUJBQXVCO0FBQzlCLE9BQU8sZUFBZTtBQUN0QixPQUFPLDBCQUEwQjtBQUNqQyxTQUFTLGNBQWMscUJBQXFCO0FBQzVDLFNBQVMsc0JBQXNCO0FBQy9CLE9BQU8sbUJBQW1CO0FBbkIxQixJQUFNLG1DQUFtQztBQXFCekMsSUFBTSxRQUFRO0FBRWQsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxLQUFLLE1BQU07QUFDeEMsTUFBSSxTQUFTLFVBQVU7QUFDckIsV0FBTztBQUFBLE1BQ0wsT0FBTztBQUFBLFFBQ0wsZUFBZTtBQUFBLFVBQ2IsT0FBTyxDQUFDLHlCQUF5QixxQkFBcUI7QUFBQSxRQUN4RDtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFNBQVMsQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDO0FBQUEsSUFDckM7QUFBQSxFQUNGLE9BQU87QUFDTCxXQUFPO0FBQUEsTUFDTCxTQUFTO0FBQUEsUUFDUCxPQUFPO0FBQUEsVUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxLQUFLO0FBQUEsUUFDcEM7QUFBQSxNQUNGO0FBQUEsTUFDQSxlQUFlLENBQUMsVUFBVTtBQUFBLE1BQzFCLE1BQ0UsUUFBUSxJQUFJLGFBQWEsZUFBZSx5QkFBeUI7QUFBQSxNQUNuRSxPQUFPO0FBQUEsUUFDTCxhQUFhO0FBQUEsTUFDZjtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ1AsY0FBYztBQUFBLFFBQ2QsTUFBTSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsQ0FBQztBQUFBLFFBQ2hDLElBQUk7QUFBQSxVQUNGLGlCQUFpQjtBQUFBLFVBQ2pCLHNCQUFzQjtBQUFBLFVBQ3RCLGVBQWUsQ0FBQyxtQkFBbUIsc0JBQXNCLFNBQVM7QUFBQSxVQUNsRSxlQUFlO0FBQUEsWUFDYjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQSxjQUFjLENBQUMsbUJBQW1CO0FBQUEsUUFDcEMsQ0FBQztBQUFBLFFBQ0QsSUFBSSxFQUFFLE1BQU0sQ0FBQztBQUFBO0FBQUEsUUFFYixlQUFlO0FBQUEsVUFDYixTQUFTO0FBQUEsWUFDUDtBQUFBLGNBQ0UsS0FBSztBQUFBLGdCQUNIO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0EsTUFBTTtBQUFBLGNBQ04sUUFBUSxDQUNOLFVBQ0EsZUFDQSxhQUNHO0FBQ0gsc0JBQU0sV0FBVztBQUFBLGtCQUNmLEtBQ0csU0FBUyxrQ0FBVyxRQUFRLEVBQzVCLFdBQVcscUJBQXFCLEVBQUU7QUFBQSxnQkFDdkM7QUFDQSx1QkFBTztBQUFBLGNBQ1Q7QUFBQTtBQUFBLGNBRUEsV0FBVztBQUFBLFlBQ2I7QUFBQSxVQUNGO0FBQUEsUUFDRixDQUFDO0FBQUEsTUFDSDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
