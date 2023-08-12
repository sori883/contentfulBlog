import remarkHeadings from '@vcarl/remark-headings';
import rehypeStringify from 'rehype-stringify';
import remarkParse from "remark-parse";
import remarkRehype from 'remark-rehype';
import remarkStringify from "remark-stringify";
import { unified } from 'unified';


export const markdownToResume = async (markdownContent: string) => {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(markdownContent);

  return result.toString();
};