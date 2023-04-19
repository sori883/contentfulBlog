
import type { GetStaticPropsContext, InferGetStaticPropsType, NextPage  } from 'next';
import { useRouter } from 'next/router';

import { ArticleList } from 'components/domains/articleTopList';
import { Pagination } from 'components/elements/pagination';
import { ContainerBox } from 'components/layouts/containerBox';
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
  const paths = Number(data.postsCollection?.total) === 0 ?
    [{ params: {page: '0'} }]
    :
    range(2,  Math.ceil(Number(data.postsCollection?.total) / 20))
      .map((item) => ({ params: {page: `${item}`}}));

  return { paths, fallback: false };
};

export const getStaticProps = async ({
  params
}: GetStaticPropsContext) => {
  if (typeof params?.page !== 'string') {
    return { notFound: true };
  }

  if (params?.page === '0') {
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
  const handleOnChange = (value: number) => {
    value === 1 ? router.push('/')
      :
      router.push(`/${value}`);
  };

  return (
    <>
      <SiteHead />
      <ContainerBox>
        <ArticleList
          fallbackArticle={initialData.postsCollection}
        />
        <div className='flex justify-center'>
          <Pagination
            total={Math.ceil(Number(initialData.postsCollection?.total) / 20)}
            defaultPage={page}
            onChange={handleOnChange}
          />
        </div>
      </ContainerBox>
    </>
  );
};

export default Article;
