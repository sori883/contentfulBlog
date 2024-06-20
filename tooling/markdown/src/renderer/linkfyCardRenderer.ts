import { embedMatcher } from "../utils/embedMatcher";

export const linkfyCardRenderer = {
  link(href: string, title: string | null | undefined, text: string) {
    // titleがundefinedでなければ通常のリンクとして扱う
    if(title !== undefined) {
      // 内部リンク
      if(href.match(/^(?:https:\/\/cashless-life\.com$)/)) {
        return `<a href="${href}" target="_blank">${text}</a>`;
      }
      // 外部リンク
      if(href.match(/^https?:\/\//)) {
        return `<a href="${href}" target="_blank" rel="nofollow noopener noreferrer">${text}</a>`;
      }
      // 上記以外
      return `<a href="${href}">${text}</a>`;
    }

    // 埋め込み要素に変換する
    return embedMatcher(href);
  }
};