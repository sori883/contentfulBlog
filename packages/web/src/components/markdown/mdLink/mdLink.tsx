import { ComponentPropsWithoutRef, FC } from 'react';

import Link from 'next/link';

export const mdLink: FC<ComponentPropsWithoutRef<'a'>> = ({ href, children }) => {
  return href?.startsWith('/') ? (
    <Link href={href}>{children}</Link>
  ) : (
    <a href={href} rel='noreferrer' target='_blank'>
      {children}
    </a>
  );
};
