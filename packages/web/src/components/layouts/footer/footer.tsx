import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import getConfig from 'next/config';
import Link from 'next/link';

import { ExternalLink } from 'components/elements/externalLink';
import { pagesPath } from 'lib/$path';

export const Footer = ():JSX.Element => {
  const { publicRuntimeConfig } = getConfig();
  
  return (
    <Box
      sx={{
        minWidth: '100%',
      }}
    >
      <Typography variant='body2' color='textSecondary' align='center'>
        <ExternalLink url='https://github.com/sori883' icon={false} aria-label='GitHubリンク'>
          <GitHubIcon
            sx={{marginX: '0.5rem',}}
          />
        </ExternalLink>
        <ExternalLink url='https://twitter.com/sorinaji' icon={false} aria-label='Twitterリンク'>
          <TwitterIcon
            sx={{marginX: '0.5rem',}}
          />
        </ExternalLink>
      </Typography>
      <Typography variant='body2' color='textSecondary' align='center'>
        <Link href={pagesPath.privacypolicy.$url()}>
          プライバシーポリシー
        </Link>
      </Typography>
      <Typography variant='body2' color='textSecondary' align='center'>
        {`Copyright © ${publicRuntimeConfig.BLOG_TITLE || ''} ${new Date().getFullYear()} .`}
      </Typography>
    </Box>
  );
};