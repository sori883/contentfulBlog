import { ReactNode } from 'react';

import Box from '@mui/material/Box';

import ContentStyle from 'styles/contentStyle';

type Props = {
  children: ReactNode;
}

export const ContentBox = ({children}:Props): JSX.Element => {
  return (
    <Box  sx={{
      bgcolor: 'background.paper',
      boxShadow: 1,
      borderRadius: {xl: 2, xs: 0},
      p: 2,
    }}>
      <ContentStyle>
        { children }
      </ContentStyle>
    </Box>
  );
};