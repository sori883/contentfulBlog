import { IconBrandGithubFilled, IconBrandTwitterFilled } from '@tabler/icons-react';
import getConfig from 'next/config';
import Link from 'next/link';

import { ExternalLink } from 'components/elements/externalLink';
import { pagesPath } from 'lib/$path';

export const Footer = ():JSX.Element => {
  const { publicRuntimeConfig } = getConfig();
  
  return (
    <div className='min-w-full'>
      <div className='text-center'>
        <ExternalLink url='https://github.com/sori883' aria-label='GitHubリンク'>
          <IconBrandGithubFilled
            className='my-2'
          />
        </ExternalLink>
        <ExternalLink url='https://twitter.com/sorinaji' aria-label='Twitterリンク'>
          <IconBrandTwitterFilled
            className='my-2'
          />
        </ExternalLink>
      </div>
      <div className='text-center'>
        <Link className='text-inherit no-underline' href={pagesPath.privacypolicy.$url()}>
          プライバシーポリシー
        </Link>
      </div>
      <div className='text-center'>
        {`Copyright © ${publicRuntimeConfig.BLOG_TITLE || ''} ${new Date().getFullYear()} .`}
      </div>
    </div>
  );
};