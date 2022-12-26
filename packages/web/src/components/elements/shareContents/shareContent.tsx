import Box from '@mui/material/Box';

import { CopyLink , TwitterLink } from 'components/elements/shareButtons';


export const ShareContents = (): JSX.Element => {

  return (
    <Box
      sx={{
        padding: 2,
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
      }}
    >
      <CopyLink />
      <TwitterLink />
    </Box>
  );
};