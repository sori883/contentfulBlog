import { parseDate } from "@/utils/timer";

import { Frontmatter } from "./metadata";

// ポストをソートする
export function sortByDateDesc():
  | ((
      a: [string, { frontmatter: Frontmatter }],
      b: [string, { frontmatter: Frontmatter }]
    ) => number)
  | undefined {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return ([_aid, aPost], [_bid, bPost]) => {
    const aDate = parseDate(aPost.frontmatter.date);
    const bDate = parseDate(bPost.frontmatter.date);
    return aDate.getTime() < bDate.getTime() ? 1 : -1;
  };
}
