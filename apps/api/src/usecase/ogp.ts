class OGPParser {
  title: string;
  description: string;
  imageUrl: string;
  siteName: string;

  constructor() {
    this.title = "";
    this.description = "";
    this.imageUrl = "";
    this.siteName = "";
  }

  element(element: Element) {
    switch (element.getAttribute("property")) {
      case "og:title":
        this.title = element.getAttribute("content") ?? "";
        break;
      case "og:description":
        this.description = element.getAttribute("content") ?? "";
        break;
      case "og:image":
        this.imageUrl = element.getAttribute("content") ?? "";
        break;
      case "og:site_name":
        this.siteName = element.getAttribute("content") ?? "";
        break;
      default:
        break;
    }
  }
}

export type OpgType = typeof OGPParser.prototype;

export async function getOgp(url: string) {
  const decodedUrl = decodeURIComponent(url);
  const domResponse = await fetch(decodedUrl);

  if (!domResponse.ok) {
    throw new Error("OGP取得先へのアクセスに失敗しました。");
  };

  const ogp = new OGPParser();
  const rewriter = new HTMLRewriter()
    .on("meta", ogp).transform(domResponse);

  // HTMLRewriterの要素抽出を待機
  await rewriter.text();
  return ogp;
}