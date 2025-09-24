import { createRoute } from "honox/factory";
import { getAllPosts } from "@/features/posts";
import { Feed } from "feed";

export default createRoute(async (c) => {
  const feeds = generateRssFeed();

  return c.text(feeds, 200, {
    "Content-Type": "text/xml",
  });
});

export const generateRssFeed = (): string => {
  const feed = new Feed({
    title: "今日も生きてるだけでえらい",
    description: "sori883のブログ",
    id: "https://sori883.dev",
    link: "https://sori883.dev",
    language: "ja",
    copyright: "copyright",
    generator: "https://sori883.dev",
    favicon: `${"https://sori883.dev"}/favicon.ico`,
    image: "https://sori883.dev/ogp.png",
    author: {
      name: "suna",
    },
  });

  const posts = getAllPosts();
  for (const post of posts) {
    feed.addItem({
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      date: new Date(post.frontmatter.date),
      id: `https://sori883.dev/posts/${post.frontmatter.permalink}`,
      link: `https://sori883.dev/posts/${post.frontmatter.permalink}`,
    });
  }

  // RSS 2.0
  return feed.rss2();
};
