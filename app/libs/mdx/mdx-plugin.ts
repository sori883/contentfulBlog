import recmaExportFilepath from "recma-export-filepath";
import rehypeHighlight from "rehype-highlight";
import rehypeMdxCodeProps from "rehype-mdx-code-props";
import rehypeMdxImportMedia from "rehype-mdx-import-media";
import rehypeMermaid from "rehype-mermaid";
import rehypeSlug from "rehype-slug";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

export const remarkPlugins = [
  remarkFrontmatter,
  remarkMdxFrontmatter,
  remarkGfm,
];

export const rehypePlugins = [
  rehypeHighlight,
  rehypeMdxCodeProps,
  rehypeMdxImportMedia,
  rehypeMermaid,
  rehypeSlug,
];

export const recmaPlugins = [recmaExportFilepath];
