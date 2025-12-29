type OGPData = {
  title: string;
  description: string;
  imageUrl: string;
  siteName: string;
};

export async function getOGP(url: string): Promise<OGPData> {
  try {
    const decodedUrl = decodeURIComponent(url);
    const response = await fetch(decodedUrl, {
      headers: {
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "User-Agent": "Mozilla/5.0 (compatible; OGP-Bot/1.0)",
      },
      redirect: "follow",
      cf: {
        cacheTtl: 300,
        cacheEverything: true,
      },
    });

    if (!response.ok) {
      console.log(url);
      throw new Error("OGP取得先へのアクセスに失敗しました。");
    }

    // HTMLを取得
    const htmlChunk = await response.text();

    // HTMLエンティティをデコードする関数
    const decodeHtmlEntities = (text: string): string => {
      // prettier-ignore
      return text
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, "\"")
        .replace(/&#39;/g, "'")
        .replace(/&#x27;/g, "'")
        .replace(/&#x2F;/g, "/");
    };

    // 正規表現でmetaタグを直接抽出（JSDOMを使わない）
    const getMetaContent = (property: string): string => {
      const regex = new RegExp(
        `<meta[^>]*property=["']${property}["'][^>]*content=["']([^"']*?)["'][^>]*>`,
        "i"
      );
      const match = htmlChunk.match(regex);
      return match ? decodeHtmlEntities(match[1]) : "";
    };

    const getMetaName = (name: string): string => {
      const regex = new RegExp(
        `<meta[^>]*name=["']${name}["'][^>]*content=["']([^"']*?)["'][^>]*>`,
        "i"
      );
      const match = htmlChunk.match(regex);
      return match ? decodeHtmlEntities(match[1]) : "";
    };

    const getTitleContent = (): string => {
      const titleMatch = htmlChunk.match(/<title[^>]*>(.*?)<\/title>/i);
      return titleMatch ? decodeHtmlEntities(titleMatch[1].trim()) : "";
    };

    const title = getMetaContent("og:title") || getTitleContent() || "";
    const description =
      getMetaContent("og:description") || getMetaName("description") || "";
    const imageUrl = getMetaContent("og:image") || "";
    const siteName = getMetaContent("og:site_name") || "";

    return {
      title,
      description,
      imageUrl,
      siteName,
    };
  } catch {
    return {
      title: "",
      description: "",
      imageUrl: "",
      siteName: "",
    };
  }
}
