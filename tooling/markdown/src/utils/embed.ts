/**
 * forked from https://github.com/zenn-dev/zenn-editor
*/
import { sanitizeEmbedToken, generateEmbedServerIframe } from "./embedHelper";
import { extractYoutubeVideoParameters } from "./urlMatcher";

export const embedGenerators = {
  stackblitz(str: string) {
    return `<span class="embed-block embed-stackblitz"><iframe src="${sanitizeEmbedToken(
      str,
    )}" scrolling="no" frameborder="no" loading="lazy"></iframe></span>`;
  },
  codesandbox(str: string) {
    return `<span class="embed-block embed-codesandbox"><iframe src="${sanitizeEmbedToken(
      str,
    )}" style="width:100%;height:500px;border:none;overflow:hidden;" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" loading="lazy" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe></span>`;
  },
  codepen(str: string) {
    const url = new URL(str.replace("/pen/", "/embed/"));
    url.searchParams.set("embed-version", "2");
    return `<span class="embed-block embed-codepen"><iframe src="${sanitizeEmbedToken(
      url.toString(),
    )}" scrolling="no" frameborder="no" loading="lazy"></iframe></span>`;
  },
  jsfiddle(str: string) {
    // URLを~/embedded/とする
    // ※ すでにembeddedもしくはembedが含まれるURLが入力されている場合は、そのままURLを使用する。
    let url = str;
    if (!url.includes("embed")) {
      url = url.endsWith("/") ? `${url}embedded/` : `${url}/embedded/`;
    }
    return `<span class="embed-block embed-jsfiddle"><iframe src="${sanitizeEmbedToken(
      url,
    )}" scrolling="no" frameborder="no" loading="lazy"></iframe></span>`;
  },
  youtube(str: string) {
    const params = extractYoutubeVideoParameters(str) ?? { videoId: str };

    if (!params.videoId.match(/^[a-zA-Z0-9_-]+$/)) {
      return "YouTubeのvideoIDが不正です";
    }

    const escapedVideoId = params.videoId
    const time = Math.min(Number(params.start ?? 0), 48 * 60 * 60); // 48時間以内
    const startQuery = time ? `?start=${time}` : "";

    return `<span class="embed-block embed-youtube"><iframe src="https://www.youtube-nocookie.com/embed/${escapedVideoId}${startQuery}" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe></span>`;
  },
  blueprintue(str: string) {
    return `<span class="embed-block embed-blueprintue"><iframe src="${sanitizeEmbedToken(
      str,
    )}" width="100%" style="aspect-ratio: 16/9" scrolling="no" frameborder="no" loading="lazy" allowfullscreen></iframe></span>`;
  },
  figma(str: string) {
    return `<span class="embed-block embed-figma"><iframe src="https://www.figma.com/embed?embed_host=zenn&url=${sanitizeEmbedToken(
      str,
    )}" width="100%" style="aspect-ratio: 16/9" scrolling="no" frameborder="no" loading="lazy" allowfullscreen></iframe></span>`;
  },
  tweet(str: string) {
    return generateEmbedServerIframe("tweet", str);
  },
  card(str: string) {
    return generateEmbedServerIframe("card", str);
  },
}