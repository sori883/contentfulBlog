import { ReactNode } from 'react';

import { Container } from '@mantine/core';

import { Footer } from 'components/layouts/footer';
import { HeaderResponsive } from 'components/layouts/header/header';

const sizes = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
};

type Props = {
  children?: ReactNode;
  containerSize?: keyof typeof sizes;
}

export const ContainerBox = ({ 
  children,
  containerSize = 'xl'
}: Props): JSX.Element => {
  return (
    <div className='flex flex-col flex-wrap min-h-screen'>
      <HeaderResponsive />
      <Container
        className='my-12 p-0 flex-1'
        size={containerSize}>
        { children }
      </Container>
      <Footer />
    </div>
  );
};