import { parse } from "@twemoji/parser";

export type { EmojiEntity } from "@twemoji/parser";

export function parseTwemoji(emoji: string) {
  return parse(emoji);
}
