import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import type { GetStaticPropsContext, InferGetStaticPropsType, NextPage  } from 'next';
import { useRouter } from 'next/router';

import ArticleList from 'components/article/ArticlesList';
import Layout from 'components/layouts/layout';
import { SiteHead } from 'components/nonVisual/siteHead';
import { client } from 'graphql/client';
import {
  PostsDocument,
  PostsQuery,
  PostsQueryVariables
} from 'graphql/generated';

export const getStaticPaths = async () => {
  const { data } = await client.query<PostsQuery>({
    query: PostsDocument,
  });

  const range = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i);
  const paths = Number(data.postsCollection?.total) === 0 ? 0 : range(2,  Math.ceil(Number(data.postsCollection?.total) / 20))
    .map((item) => ({ params: {page: `${item}`}}));

  return { paths, fallback: false };
};

export const getStaticProps = async ({
  params
}: GetStaticPropsContext) => {
  if (typeof params?.page !== 'string') {
    return { notFound: true };
  }

  const skip = (Number(params.page) - 1) * 20;
  const { data } = await client.query<PostsQuery, PostsQueryVariables>({
    query: PostsDocument,
    variables: { limit: 20, skip: skip }
  });

  return {
    props: {
      initialData: data,
      page: Number(params.page) - 1
    },
  };
};

const Article: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  initialData,
  page
}) => {
  const router = useRouter();
  const handleOnChange = (event: React.ChangeEvent<unknown>, page: number) => {
    page === 1 ? router.push('/')
      :
      router.push(`/${page}`);
  };

  return (
    <>
      <SiteHead/>
      <Layout>
        <ArticleList
          fallbackArticle={initialData.postsCollection}
        />
        <Box display='flex' justifyContent='center'>
          <Pagination
            defaultPage={page}
            onChange={handleOnChange}
            count={ Math.ceil(Number(initialData.postsCollection?.total) / 20)}
          />
        </Box>
      </Layout>
    </>
  );
};

export default Article;
