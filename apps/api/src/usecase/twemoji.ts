import { parse } from "@twemoji/parser";

export function parseTwemoji(emoji: string) {
  return parse(emoji);
}

export type { EmojiEntity } from "@twemoji/parser";
