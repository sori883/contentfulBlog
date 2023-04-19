export type RSSSource = {
  sources: string[];
  includeUrlRegex?: string;
  excludeUrlRegex?: string;
};

export type PostItem = {
  title: string;
  link: string;
  contentSnippet?: string;
  isoDate?: string;
  dateMiliSeconds: number;
};

export const members: RSSSource[] = [
  {
    sources: [
      'https://zenn.dev/sorinaji/feed',
    ],
    includeUrlRegex: 'zenn.dev',
  },
];