import { css } from '@emotion/react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Link from 'next/link';

import { pagesPath } from 'lib/$path';



export const DrawerContent =():JSX.Element => {

  return (
    <Box sx={{ width: '100%', minWidth: 240, maxWidth: 240 }}>
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <Link passHref href={pagesPath.$url()} css={css`
              &&& {
                display: inline-block;
                width: 100%;
              }
            `}>
              <ListItemButton css={css`
              &&& {
                display: inline-block;
                width: 100%;
              }
            `}>
                    home
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link passHref href={pagesPath.itsme.$url()} css={css`
              &&& {
                display: inline-block;
                width: 100%;
              }
            `}>
              <ListItemButton component='div' css={css`
              &&& {
                display: inline-block;
                width: 100%;
              }
            `}>
                profile
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
};