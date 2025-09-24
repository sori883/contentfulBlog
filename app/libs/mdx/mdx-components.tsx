import type { MDXComponents } from "mdx/types";

import { ErrorNote } from "@/components/mdx/errorNote";
import { ExLinkCard } from "@/components/mdx/exLinkCard";
import { Image } from "@/components/mdx/image";
import { InfoNote } from "@/components/mdx/infoNote";
import { Link } from "@/components/mdx/link";
import { StyledPre } from "@/components/mdx/styledPre";
import { Twitter } from "@/components/mdx/twitter";
import { WarningNote } from "@/components/mdx/warningNote";

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
