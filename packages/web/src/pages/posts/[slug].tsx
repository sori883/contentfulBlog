import { Box, Divider, Grid, Text } from '@mantine/core';
import type { GetStaticPropsContext, InferGetStaticPropsType, NextPage  } from 'next';

import { TagChip } from 'components/domains/tagChip';
import { View } from 'components/elements/markdown';
import { Resume } from 'components/elements/resume';
import { ShareContents } from 'components/elements/shareContents';
import { ContainerBox } from 'components/layouts/containerBox';
import { ContentBox } from 'components/layouts/contentBox';
import { ShareAndResume } from 'components/layouts/shareAndResume';
import { SiteHead } from 'components/nonVisual/siteHead';
import { client } from 'graphql/client';
import {
  PostDocument,
  PostQuery,
  PostQueryVariables,
  PostsDocument,
  PostsQuery
} from 'graphql/generated';
import parseValue from 'lib/dataformat';

export const getStaticPaths = async () => {
  const { data } = await client.query<PostsQuery>({
    query: PostsDocument,
  });
  const paths = data.postsCollection?.items.map((item) => ({ params: {slug: `${item?.slug}`}}));
  return { paths, fallback: false };
};

export const getStaticProps = async ({
  params
}: GetStaticPropsContext) => {
  if (typeof params?.slug !== 'string') {
    return { notFound: true };
  }
  const { data } = await client.query<PostQuery, PostQueryVariables>({
    query: PostDocument,
    variables: {slug: params.slug }
  });

  return {
    props: {
      fallbackArticle: data
    },
  };
};

const Article: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  fallbackArticle
}) => {
  // タグ
  const tags = fallbackArticle.postsCollection?.items[0]?.tagsCollection?.items.map((item) => String(item?.name));

  return (
    <>
      <SiteHead
        title={String(fallbackArticle.postsCollection?.items[0]?.title)}
        ogImagePath={String(fallbackArticle.postsCollection?.items[0]?.slug)}
      />
      <ContainerBox
        containerSize='xl'
      >
        <Grid
          className='justify-center'
        >
          <Grid.Col
            xs={12}
            md={12}
            lg={7}
          >
            <ContentBox>
              <h1>
                {fallbackArticle.postsCollection?.items[0]?.title}
              </h1>
              <Text className='my-2'>
                {`投稿日：${parseValue(fallbackArticle.postsCollection?.items[0]?.sys.firstPublishedAt)}`}
              </Text>
              {
                tags ? 
                  <TagChip
                    tagsOnArticles={tags}
                  />
                  :
                  <></>
              }
              <Box
                className='block lg:hidden sticky top-0 py-2'
                sx={(theme) => ({
                  backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                })}
              >
                <ShareAndResume
                  markdown={String(fallbackArticle.postsCollection?.items[0]?.content)}
                />
              </Box>
              <Divider
                size='lg'
                className='lg:mt-4 xs:mt-0 mb-8'
              />
              <View>
                { String(fallbackArticle.postsCollection?.items[0]?.content) }
              </View>
            </ContentBox>
          </Grid.Col>

          <Grid.Col
            xs={12}
            md={12}
            lg={2}
          >
            <Box
              className='hidden md:flex shadow rounded-md sticky top-14 mb-12'
              sx={(theme) => ({
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
              })}>
              <ShareContents />
            </Box>
            <Box
              className='hidden md:block shadow rounded-md w-full sticky top-14 mb-12'
              sx={(theme) => ({
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
              })}>
              <Text
                className='px-6 pt-6'
              >
                目次
              </Text>
              <Resume>
                { String(fallbackArticle.postsCollection?.items[0]?.content) }
              </Resume>
            </Box>
          </Grid.Col>
        </Grid>

      </ContainerBox>
    </>
  );
};

export default Article;
