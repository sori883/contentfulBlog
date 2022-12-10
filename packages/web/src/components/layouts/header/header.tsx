import { useState } from 'react';

import AcUnitRoundedIcon from '@mui/icons-material/AcUnitRounded';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import getConfig from 'next/config';
import Link from 'next/link';

import { DrawerContent } from 'components/layouts/drawerContent';
import { pagesPath } from 'lib/$path';

export const Header = ():JSX.Element => {
  const [drawerOpened, setDrawerOpened] = useState(false);
  const { publicRuntimeConfig } = getConfig();

  return (
    <>
      <Box sx={{ flexGrow: { md: 1 } }}>
        <AppBar position='static'>
          <Toolbar>
            <>
              <AcUnitRoundedIcon sx={{
                display: { md: 'flex' },
                mr: 1,
                fontSize: 32,
                color: '#45A1CF',
              }} />
              <Typography variant='h6' noWrap component='div' sx={{
                mr: 5,
                color: 'inherit',
                textDecoration: 'none',
                flexGrow: { xl: 0, xs: 1},
                fontFamily: 'monospace',
                fontWeight: 700,
              }}>
                <Link href={pagesPath.$url()}>
                  { publicRuntimeConfig.BLOG_TITLE }
                </Link>
              </Typography>
              <Box
                sx={{ display: { xl : 'flex', xs: 'none'} }}
              >
                <>
                  <Typography textAlign='center' variant='subtitle1' component='p' sx={{ mr: 3 }}>
                    <Link href={pagesPath.$url()}>
                      home
                    </Link>
                  </Typography>
                  <Typography textAlign='center' variant='subtitle1' component='p' sx={{ mr: 3 }}>
                    <Link href={pagesPath.itsme.$url()}>
                      profile
                    </Link>
                  </Typography>
                </>
              </Box>
              <IconButton
                size='large'
                edge='start'
                color='inherit'
                aria-label='menu'
                sx={{ display: { xl : 'none'}, mr: 2 }}
                onClick={() => setDrawerOpened(true)}
              >
                <MenuIcon />
              </IconButton>
            </>
          </Toolbar>
        </AppBar>
      </Box>

      <Drawer
        anchor={'right'}
        open={drawerOpened}
        onClose={() => setDrawerOpened(false)}>
        <DrawerContent />
      </Drawer>
    </>
  );
};