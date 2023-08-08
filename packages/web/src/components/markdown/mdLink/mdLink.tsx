import { AnchorHTMLAttributes, FC } from 'react';

import Link from 'next/link';

export const mdLink: FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({ href, children }) => {
  return href?.startsWith('/') ? (
    <Link href={href}>{children}</Link>
  ) : (
    <a href={href} rel='noreferrer' target='_blank'>
      {children}
    </a>
  );
};
