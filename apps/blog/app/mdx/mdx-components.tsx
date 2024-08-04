import type { MDXComponents } from "mdx/types";
import { Twitter } from "~/components/markdown/twitter";
import { ExLinkCard } from "~/components/markdown/exLinkCard";
import { StyledPre } from "~/components/markdown/styledPre";
import { Image } from "~/components/markdown/image";
import { Link } from "~/components/markdown/link";
import { WarningNote } from "~/components/markdown/warningNote";
import { ErrorNote } from "~/components/markdown/errorNote";
import { InfoNote } from "~/components/markdown/infoNote";


export function useMDXComponents(): MDXComponents {
  const components = {
    img: Image,
    pre: StyledPre,
    Twitter: Twitter,
    ExLinkCard: ExLinkCard,
    a: Link,
    WarningNote: WarningNote,
    ErrorNote: ErrorNote,
    InfoNote: InfoNote,
  };
  
  return components;
}
