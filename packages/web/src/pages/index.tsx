import type { InferGetStaticPropsType, NextPage } from 'next';
import { useRouter } from 'next/router';

import { ContainerBox } from 'components/layouts/containerBox';
import { TopTab } from 'components/layouts/topTab';
import { SiteHead } from 'components/nonVisual/siteHead';
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

const IndexIsIndex:NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  initialData
}) => {
  const router = useRouter();
  const handleOnChange = (value: number) => {
    value === 1 ? router.push('/')
      :
      router.push(`/${value}`);
  };

  return (
    <div>
      <SiteHead />
      <ContainerBox>
        <TopTab
          fallbackArticle={initialData.postsCollection}
          handleOnChange={handleOnChange}
        />
      </ContainerBox>
    </div>
  );
};



export default IndexIsIndex;