import { Text } from '@mantine/core';
import { IconBrandTwitterFilled } from '@tabler/icons-react';
import getConfig from 'next/config';
import { useRouter } from 'next/router';

import { ExternalLink } from 'components/elements/externalLink';


export const TwitterLink = (): JSX.Element => {
  const router = useRouter();
  const { publicRuntimeConfig } = getConfig();

  return (
    <ExternalLink
      url={`http://twitter.com/share?url=${publicRuntimeConfig.APP_ROOT_URL}${router.asPath}`}
    >
      <div
        className='px-6 text-inherit flex flex-col justify-center justify-items-center items-center'
      >
        <Text
          size='xs'
          className='flex flex-col justify-items-center items-center'>
          <IconBrandTwitterFilled
          />
            ツイート
        </Text> 
      </div>
    </ExternalLink>
  );
};