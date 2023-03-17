import { css } from '@emotion/react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { ZennItem } from 'components/domains/rss/zennItem';
import { FeedItem } from 'rssContents/postBuilder';

type Props = {
  posts: FeedItem[];
}

export const ZennList = ({ posts }: Props): JSX.Element => {
  return (
    <>
      <Grid container alignItems={'center'} justifyContent={'center'}>
        { 
          posts.map((post) => (
            <Grid
              item
              key={post.link}
              xs={12}
              md={6}
              lg={4}
              css={css`
              &&& {
                margin-bottom: 3rem;
              }
          `}
            >
              <Box display='flex' justifyContent='center'>
                <ZennItem
                  post={post}
                />
              </Box>
            </Grid>
          ))
        }
      </Grid>
    </>
  );
};