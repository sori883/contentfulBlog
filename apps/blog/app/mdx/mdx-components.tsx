import type { MDXComponents } from "mdx/types";

import { ErrorNote } from "~/components/markdown/errorNote";
import { ExLinkCard } from "~/components/markdown/exLinkCard";
import { Image } from "~/components/markdown/image";
import { InfoNote } from "~/components/markdown/infoNote";
import { Link } from "~/components/markdown/link";
import { StyledPre } from "~/components/markdown/styledPre";
import { Twitter } from "~/components/markdown/twitter";
import { WarningNote } from "~/components/markdown/warningNote";

export function useMDXComponents(): MDXComponents {
  const components = {
    img: Image,
    // pre: StyledPre,
    Twitter: Twitter,
    ExLinkCard: ExLinkCard,
    a: Link,
    WarningNote: WarningNote,
    ErrorNote: ErrorNote,
    InfoNote: InfoNote,
  };

  return components;
}
