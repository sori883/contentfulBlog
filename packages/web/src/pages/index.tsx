import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import type { InferGetStaticPropsType, NextPage } from 'next';
import { useRouter } from 'next/router';

import { ArticleList } from 'components/domains/articleTopList';
import { ContainerBox } from 'components/layouts/containerBox';
import { SiteHead }  from 'components/nonVisual/siteHead';
import { client } from 'graphql/client';
import { PostsDocument, PostsQuery, PostsQueryVariables } from 'graphql/generated';

export const getStaticProps = async () => {
  const { data } = await client.query<PostsQuery, PostsQueryVariables>({
    query: PostsDocument,
    variables: { limit: 20, skip: 0 }
  });

  return {
    props: {
      initialData: data,
    },
  };
};

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  initialData
}) => {
  const router = useRouter();
  const handleOnChange = (event: React.ChangeEvent<unknown>, page: number) => {
    page === 1 ? router.push('/')
      :
      router.push(`/${page}`);
  };

  return (
    <>
      <SiteHead />
      <ContainerBox>
        <ArticleList
          fallbackArticle={initialData.postsCollection}
        />
        <Box display='flex' justifyContent='center'>
          <Pagination
            defaultPage={1}
            onChange={handleOnChange}
            count={ Math.ceil(Number(initialData.postsCollection?.total) / 20)}
          />
        </Box>
      </ContainerBox>
    </>
  );
};


export default Home;