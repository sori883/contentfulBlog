import type { JSX } from "hono/jsx/jsx-runtime";
import type { MDXProps } from "mdx/types";

import { groupBy } from "./grouby";
import { Frontmatter } from "./metadata";
import { sortByDateDesc } from "./sort";

const POSTS_PER_PAGE = 9;

// MDX
export type MDXExports = {
  frontmatter: Frontmatter;
  default: (props: MDXProps) => JSX.Element;
  ContentSummary?: () => JSX.Element;
};

// 記事
export type Post = {
  id: string;
  frontmatter: Frontmatter;
  fullFilePath: URL;
  MDXContent: (props: MDXProps) => JSX.Element;
  ContentSummary?: () => JSX.Element;
};

export type Posts = {
  posts: Post[];
  hasPrev: boolean;
  hasNext: boolean;
};

// カテゴリ
export type Category = {
  id: string;
  name: string;
  posts: Post[];
};

// カテゴリのポスト一覧
type CategoryPosts = {
  hasPrev: boolean;
  hasNext: boolean;
  totalCount: number;
} & Category;

// ポストを取得
const posts = import.meta.glob<MDXExports>("../../../contents/posts/**/*.mdx", {
  eager: true,
});

// ポストを全て取得する
export function getAllPosts(): Post[] {
  return Object.entries(posts)
    .sort(sortByDateDesc())
    .map(([id, module]) => {
      return {
        id: id.replace(/^\.\.\/contents/, ""),
        fullFilePath: new URL(id, import.meta.url),
        frontmatter: module.frontmatter,
        MDXContent: module.default,
        ContentSummary: module.ContentSummary,
      } satisfies Post;
    });
}

// ページに応じた記事を取得
export function getPosts(page: number): Posts {
  const start = POSTS_PER_PAGE * (page - 1);
  const end = POSTS_PER_PAGE * page;

  const allPosts = getAllPosts();
  const pagePosts = allPosts.slice(start, end);

  return {
    posts: pagePosts,
    hasPrev: page > 1,
    hasNext: allPosts.length > end,
  };
}

// 記事のページ数
export function getMaxPageNumber(posts: Post[]): number {
  return Math.ceil(posts.length / POSTS_PER_PAGE);
}

// パーマリンクからポストを取得する
export const getPostByPermalink = (permalink: string) => {
  const posts = getAllPosts();
  const post = posts.find((post) => post.frontmatter.permalink === permalink);
  return post;
};

// カテゴリを一覧取得
export function getCategories(): Category[] {
  const allPosts = getAllPosts();
  const groupedByCategory = groupBy(allPosts, (p) => p.frontmatter.category);

  return Object.entries(groupedByCategory).map(([name, posts]) => {
    return {
      id: name.toLowerCase(),
      name: name,
      posts: posts,
    };
  });
}

// カテゴリから記事一覧を取得
export function getCategoryPosts(
  categoryId: string,
  page: number
): CategoryPosts | null {
  const start = POSTS_PER_PAGE * (page - 1);
  const end = POSTS_PER_PAGE * page;

  const categoryPosts = getCategories().find((c) => c.id === categoryId);

  if (!categoryPosts) {
    return null;
  }

  const pagePosts = categoryPosts.posts.slice(start, end);
  const CategoryPostTotalCount = getMaxPageNumber(categoryPosts.posts);

  return {
    id: categoryPosts.id,
    name: categoryPosts.name,
    posts: pagePosts,
    totalCount: CategoryPostTotalCount,
    hasPrev: page > 1,
    hasNext: categoryPosts.posts.length > end,
  };
}
