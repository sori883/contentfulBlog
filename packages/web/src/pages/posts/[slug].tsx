import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import type { GetStaticPropsContext, InferGetStaticPropsType, NextPage  } from 'next';

import { TagChip } from 'components/domains/tag/tagChip';
import { View } from 'components/elements/markdown';
import { Resume } from 'components/elements/resume';
import { ContainerBox } from 'components/layouts/containerBox';
import { ContentBox } from 'components/layouts/contentBox';
import { SiteHead } from 'components/nonVisual/siteHead';
import { client } from 'graphql/client';
import {
  PostDocument,
  PostQuery,
  PostQueryVariables,
  PostsDocument,
  PostsQuery
} from 'graphql/generated';

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
      />
      <ContainerBox
        containerSize='xl'
      >
        <Grid container spacing={[0, 0, 0, 4]} justifyContent={'center'}>
          <Grid
            item
            xs={12}
            md={12}
            xl={10}
          >
            <ContentBox>
              <Typography variant='h3'>
                {fallbackArticle.postsCollection?.items[0]?.title}
              </Typography>
              {
                tags ? 
                  <TagChip
                    tagsOnArticles={tags}
                  />
                  :
                  <></>
              }
              <Divider sx={{marginY: 2}} />
              <View>
                { String(fallbackArticle.postsCollection?.items[0]?.content)  }
              </View>
            </ContentBox>
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            xl={2}
          >
            <Box sx={{
              bgcolor: 'background.paper',
              boxShadow: 1,
              borderRadius: 2,
              p: 2,
              position: 'sticky',
              top: 50,
              display: { xs: 'none', md: 'flex' }
            }}>
              <Resume>
                { String(fallbackArticle.postsCollection?.items[0]?.content) }
              </Resume>
            </Box>
          </Grid>
        </Grid>
      </ContainerBox>
    </>
  );
};

export default Article;
