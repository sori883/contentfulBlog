import type { JSX } from "hono/jsx/jsx-runtime";
import { JSDOM } from "jsdom";

type HeadingData = {
  level: 2 | 3;
  tag: "h2" | "h3";
  text: string;
  html: string;
  id?: string;
  className?: string;
};

export type Toc = {
  text: string;
  id: string;
  level: number;
  children: Toc[];
};

// h2,h3要素を取得する
export const extractHeadings = async (
  html: JSX.Element
): Promise<HeadingData[]> => {
  const dom = new JSDOM(await html.toString());
  const document = dom.window.document;
  const headingElements = document.querySelectorAll("h2, h3");

  return Array.from(headingElements)
    .map((element) => {
      const tagName = element.tagName.toLowerCase() as "h2" | "h3";
      const text = element.textContent?.trim() || "";

      return {
        level: parseInt(tagName.charAt(1)) as 2 | 3,
        tag: tagName,
        text,
        html: element.innerHTML,
        id: element.id || "",
        className: element.className || undefined,
      };
    })
    .filter((heading) => heading.text.length > 0);
};

// HeadingDataをToc構造に変換する
const buildTocTree = (headings: HeadingData[]): Toc[] => {
  const tocTree: Toc[] = [];
  let currentH2: Toc | null = null;

  for (const heading of headings) {
    const tocItem: Toc = {
      text: heading.text,
      id: heading.id || "",
      level: heading.level,
      children: [],
    };

    if (heading.level === 2) {
      // h2の場合は最上位に追加
      currentH2 = tocItem;
      tocTree.push(tocItem);
    } else if (heading.level === 3 && currentH2) {
      // h3の場合は直前のh2のchildrenに追加
      currentH2.children.push(tocItem);
    }
  }

  return tocTree;
};

// Toc構造を取得する
export const extractToc = async (html: JSX.Element): Promise<Toc[]> => {
  const headings = await extractHeadings(html);
  return buildTocTree(headings);
};
