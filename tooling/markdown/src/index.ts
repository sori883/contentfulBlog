import { marked } from "marked";
import { linkfyCardRenderer, headingAnchor, imageRender } from "./renderer";


export type MarkdownToHtmlProps = string;
export async function markdownToHtml(markdown: MarkdownToHtmlProps) {
  marked.use({
    async: true,
    pedantic: false,
    gfm: true,
    breaks: true,
  });
  marked.use({
    renderer: linkfyCardRenderer
  });
  marked.use({
    renderer: headingAnchor
  });
  marked.use({
    renderer: imageRender
  });
  
  const html = await marked.parse(markdown);
  return html;
};

export * from "./makeToc";