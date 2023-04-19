import { Card, Text } from '@mantine/core';
import Link from 'next/link';

import ZennLogo from '../../../../public/zenn-logo.svg';

import parseValue from 'lib/dataformat';
import { FeedItem } from 'rssContents/postBuilder';

type Props = {
  post: FeedItem;
}

export const ZennItem = ({ post }: Props): JSX.Element => {

  return (
    <>
      <Card
        className='shadow-md w-[350rem] md:w-[400rem] h-[15rem]'
        sx={(theme) => ({
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        })}
      >
        <Link
          href={post.link}
          className='no-underline text-inherit'
        >
          <div
            className='flex flex-col w-full h-full'
          >
            <div
              className='grow flex items-center w-full'
            >
              <Text weight={800} size='xl' component='h1' className='w-full text-center'>
                { post.title }
              </Text>
            </div>
            <Text size='md' className='mt-2'>
              <ZennLogo
                width={15}
                height={15}
                fill={'none'}
                className='inline mr-2'
              />
              Zenn
            </Text>
            <Text size='sm' className='mt-1'>
              投稿日：{ parseValue(String(post.isoDate)) }
            </Text>
          </div>
        </Link>
      </Card>
    </>
  );
};