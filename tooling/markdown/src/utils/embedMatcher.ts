/**
 * forked from https://github.com/zenn-dev/zenn-editor
 */
/**
 * URLとマッチする埋め込み関数を判定してiframeを返す
 */
import * as matcher from "./urlMatcher";
import { embedGenerators } from "./embed";

export function embedMatcher(url: string) {
  if (matcher.isStackblitzUrl(url))
  return embedGenerators.stackblitz(url);

  if (matcher.isCodesandboxUrl(url))
  return embedGenerators.codesandbox(url);

  if (matcher.isCodepenUrl(url))
  return embedGenerators.codepen(url);

  if (matcher.isJsfiddleUrl(url))
  return embedGenerators.jsfiddle(url);

  // extractYoutubeVideoParametersの処理は必要
  if (matcher.isYoutubeUrl(url))
  return embedGenerators.youtube(url);

  if (matcher.isBlueprintUEUrl(url))
  return embedGenerators.blueprintue(url);

  if (matcher.isFigmaUrl(url))
  return embedGenerators.figma(url);

  // embed serverを使うURL
  if (matcher.isTweetUrl(url))
  return embedGenerators.tweet(url);

  // ogpを取得するリンクカード
  return embedGenerators.card(url);

}
