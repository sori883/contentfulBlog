import { Card, Text } from '@mantine/core';
import Link from 'next/link';

import { TagChip } from 'components/domains/tagChip';
import { PostsQuery } from 'graphql/generated';
import { pagesPath } from 'lib/$path';
import parseValue from 'lib/dataformat';

type Props = {
  article: NonNullable<PostsQuery['postsCollection']>['items'][number];
}

export const ArticleItem = ({ article }: Props): JSX.Element => {

  const tags = article?.tagsCollection?.items.map((item) => String(item?.name));

  return (
    <>
      <Card
        className='shadow-md w-[350rem] md:w-[400rem] h-[15rem]'
        sx={(theme) => ({
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        })}
      >
        <Link
          href={pagesPath.posts._slug(String(article?.slug)).$url()}
          className='no-underline text-inherit'
        >
          <div
            className='flex flex-col w-full h-full'
          >
            <div
              className='grow flex items-center w-full'
            >
              <Text weight={800} size='xl' component='h1' className='w-full text-center'>
                { article?.title }
              </Text>
            </div>
            <div className='w-full'>
              {
                tags ?
                  <TagChip 
                    tagsOnArticles={tags}
                  />
                  :
                  <></>
              }
              <Text size='sm' className='mt-2'>
                投稿日：{ parseValue(article?.sys.firstPublishedAt) }
              </Text>
            </div>
          </div>
        </Link>
      </Card>
    </>
  );
};