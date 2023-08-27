import type { Heading, Paragraph, Text } from "mdast";
import type { Literal, Node, Parent } from "unist";

const isObject = (target: unknown): target is { [key: string]: unknown } => {
  return typeof target === "object" && target !== null;
};

// https://github.com/syntax-tree/unist#node
export const isNode = (node: unknown): node is Node => {
  return isObject(node) && "type" in node;
};

// https://github.com/syntax-tree/unist#parent
export const isParent = (node: unknown): node is Parent => {
  return isObject(node) && Array.isArray(node.children);
};

// https://github.com/syntax-tree/unist#literal
export const isLiteral = (node: unknown): node is Literal => {
  return isObject(node) && "value" in node;
};

// https://github.com/syntax-tree/mdast#paragraph
export const isParagraph = (node: unknown): node is Paragraph => {
  return isNode(node) && node.type === "paragraph";
};

// https://github.com/syntax-tree/mdast#heading
export const isHeading = (node: unknown): node is Heading => {
  return isNode(node) && node.type === "heading";
};

// https://github.com/syntax-tree/mdast#text
export const isText = (node: unknown): node is Text => {
  return (
    isLiteral(node) && node.type === "text" && typeof node.value === "string"
  );
};