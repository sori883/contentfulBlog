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
    <div className='block md:grid md:grid-rows-[auto ltr auto] md:min-h-[100vh]'>
      <HeaderResponsive />
      <Container
        className='my-12 p-0'
        size={containerSize}>
        { children }
      </Container>
      <Footer />
    </div>
  );
};