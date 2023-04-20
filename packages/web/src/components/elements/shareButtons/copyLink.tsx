import { Text } from '@mantine/core';
import { IconClipboard } from '@tabler/icons-react';
import getConfig from 'next/config';
import { useRouter } from 'next/router';

const copyUrl = async (url: string):Promise<void> => {
  await global.navigator.clipboard.writeText(url);
};

export const CopyLink = (): JSX.Element => {
  const router = useRouter();
  const { publicRuntimeConfig } = getConfig();

  return (
    <div
      onClick={() => {
        copyUrl(`${publicRuntimeConfig.APP_ROOT_URL}${router.asPath}`);
      }}
      className='px-6 text-inherit flex flex-col justify-center justify-items-center items-center'
    >
      <Text
        size='xs'
        className='flex flex-col justify-items-center items-center'>
        <IconClipboard
        />
        リンクコピー
      </Text>
    </div>
  );
};