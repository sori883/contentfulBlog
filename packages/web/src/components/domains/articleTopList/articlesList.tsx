import { Grid } from '@mantine/core';

import { ArticleItem } from 'components/domains/articleTopList/articleItem';
import { PostsQuery } from 'graphql/generated';


export type Props = {
  fallbackArticle: PostsQuery['postsCollection'];
}

export const ArticleList = ({ fallbackArticle }: Props): JSX.Element => {
  return (
    <>
      <Grid
        className='items-center justify-center'
      >
        { 
          fallbackArticle?.items.map((item) => (
            <Grid.Col
              key={item?.sys.id}
              xs={12}
              md={6}
              lg={4}
              className='mb-12'
            >
              <div className='flex justify-center'>
                <ArticleItem
                  key={item?.sys.id}
                  article={item}
                />
              </div>
            </Grid.Col>
          ))
        }
      </Grid>
    </>
  );
};