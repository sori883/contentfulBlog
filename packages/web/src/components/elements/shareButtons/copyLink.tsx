import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import getConfig from 'next/config';
import { useRouter } from 'next/router';

const copyUrl = async (url: string):Promise<void> => {
  await global.navigator.clipboard.writeText(url);
};

export const CopyLink = (): JSX.Element => {
  const router = useRouter();
  const { publicRuntimeConfig } = getConfig();

  return (
    <Button
      component={'span'}
      onClick={() => {
        copyUrl(`${publicRuntimeConfig.APP_ROOT_URL}${router.asPath}`);
      }}
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
          fontSize:10,
        }}>
        <ContentCopyIcon
        />
        リンクコピー
      </Typography>
    </Button>
  );
};