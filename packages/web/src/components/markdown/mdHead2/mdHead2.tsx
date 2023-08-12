import { ComponentPropsWithoutRef, FC } from 'react';

export const mdHead2: FC<ComponentPropsWithoutRef<'h2'>> = ({ children }) => (
  <h2
    id={`${children}`}
    className='mb-2'
  >
    {children}
  </h2>
);