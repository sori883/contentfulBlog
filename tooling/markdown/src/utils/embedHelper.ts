/**
 * forked from https://github.com/zenn-dev/zenn-editor
 */
/**
 * embed作成するときの何にも分類出来ないヘルパー関数
  */
/** 渡された文字列をサニタイズする */
export function sanitizeEmbedToken(str: string): string {
  return str.replace(/"/g, "%22");
}

/** 埋め込みサーバのiframeを作成する関数 */
// 生成する埋め込みの種別
export type EmbedServerType = "tweet" | "card";

export function generateEmbedServerIframe(
  type: EmbedServerType,
  src: string,
): string {

  // ユーザーからの入力値が引数として渡されたときのために念のためencodeする
  const encodedType = encodeURIComponent(type);
  const encodedSrc = encodeURIComponent(src);
  const id = `zenn-embedded__${Math.random().toString(16).slice(2)}`;
  const iframeSrc = process.env.NODE_ENV !== "development" ?  `https://cashless-life.com/embed/${encodedType}?id=${id}` : `http://localhost:3000/embed/${encodedType}?id=${id}`;

  return `<span class="embed-block zenn-embedded zenn-embedded-${encodedType}"><iframe height="20" name="${id}" id="${id}" src="${iframeSrc}" data-content="${encodedSrc}" frameborder="0" scrolling="no" loading="lazy"></iframe></span>`;
}