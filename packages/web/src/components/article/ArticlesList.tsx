import { css } from '@emotion/react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import ArticleItem from 'components/article/ArticleItem';
import { PostsQuery } from 'graphql/generated';


type Props = {
  fallbackArticle: PostsQuery['postsCollection'];
}

export default function ArticleList({ fallbackArticle }: Props): JSX.Element {
  return (
    <>
      <Grid container alignItems={'center'} justifyContent={'center'}>
        { 
          fallbackArticle?.items.map((item) => (
            <Grid
              item
              key={item?.sys.id}
              xs={12}
              md={6}
              xl={4}
              css={css`
              &&& {
                margin-bottom: 3rem;
              }
          `}
            >
              <Box display='flex' justifyContent='center'>
                <ArticleItem
                  key={item?.sys.id}
                  article={item}
                />
              </Box>
            </Grid>
          ))
        }
      </Grid>
    </>
  );
}