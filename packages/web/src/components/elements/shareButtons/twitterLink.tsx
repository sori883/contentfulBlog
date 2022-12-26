import TwitterIcon from '@mui/icons-material/Twitter';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import getConfig from 'next/config';
import { useRouter } from 'next/router';

import { ExternalLink } from 'components/elements/externalLink';


export const TwitterLink = (): JSX.Element => {
  const router = useRouter();
  const { publicRuntimeConfig } = getConfig();

  return (
    <ExternalLink
      url={`http://twitter.com/share?url=${publicRuntimeConfig.APP_ROOT_URL}${router.asPath}`}
      icon={false}
    >
      <Button
        component={'span'}
        color='inherit'
        sx={{
          display: 'flex',
          flexFlow: 'column',
          justifyContent: 'center',
          justifyItems: 'center',
          alignItems: 'center',
          paddingX: 1,
        }}>
        <Typography
          component={'span'}
          variant={'body2'}
          sx={{
            display: 'flex',
            flexFlow: 'column',
            justifyItems: 'center',
            alignItems: 'center',
            paddingX: 1,
            color: '#4e4e4e',
            fontSize:10,
          }}>
          <TwitterIcon
          />
            ツイート
        </Typography>
      </Button>
    </ExternalLink>
  );
};