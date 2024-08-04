export interface Toc {
  text: string;
  id: string;
  level: number;
  children: Toc[];
}

class Headings {
  heading: Toc[];
  currentElement: Toc | null;

  constructor() {
    this.heading = [];
    this.currentElement = null;
  }

  /**
   * Hタグのid,level,を取得する
   * textより先に動く
   */
  element(element: Element) {
    this.currentElement = {
      level: parseInt(element.tagName.slice(1), 10),
      text: "", // textハンドラで追加
      id: element.getAttribute("id")!,
      children: []
    };
  }

  /**
   * Hタグ配下のテキストノードを取得する
   * elementよりあとに動くのでpushも行う
   */
  text(text: Text) {
    if (this.currentElement) {
      this.currentElement.text = text.text;
      this.heading.push(this.currentElement);
      this.currentElement = null; // 次の要素の準備
    }
  }
}

export async function makeToc(html: string) {
  // HTMLRewriterで使用するため、Responseにする
  const htmlResponse = new Response(html, {
    headers:{ 
      "content-type": "text/html; charset=UTF-8",
    },
    status: 200
  });

  const headings = new Headings();
  const rewriter =  new HTMLRewriter()
    .on("h2", headings)
    .on("h3", headings)
    .transform(htmlResponse);

  // HTMLRewriterのheading要素抽出を待機
  await rewriter.text();

  return headings.heading;
}