import { MouseEvent, useState } from 'react';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';


import { Resume } from 'components/elements/resume';
import { CopyLink , TwitterLink } from 'components/elements/shareButtons';

type Props = {
  markdown: string
}

export const ShareAndResume = ({markdown}:Props):JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'resume-popover' : undefined;
  
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        minWidth: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
        }}
      >
        <CopyLink />
        <TwitterLink />
      </Box>
      <Button
        aria-describedby={id}
        onClick={handleClick}
        color='inherit'
      >
        <Typography
          variant='body1'
          component='div'
          sx={{
            my: 1,
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
          }}
        >
            目次
          <KeyboardArrowDownIcon />
        </Typography>
      </Button>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        onClick={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Resume>
          {markdown}
        </Resume>
      </Popover>
    </Box>
  );
};