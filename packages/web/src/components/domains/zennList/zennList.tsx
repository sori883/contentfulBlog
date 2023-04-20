import { Grid } from '@mantine/core';

import { ZennItem } from 'components/domains/zennList/zennItem';
import { FeedItem } from 'rssContents/postBuilder';

type Props = {
  posts: FeedItem[];
}

export const ZennList = ({ posts }: Props): JSX.Element => {
  return (
    <>
      <Grid
        className='items-center justify-center'
      >
        { 
          posts.map((post) => (
            <Grid.Col
              key={post.link}
              xs={12}
              md={6}
              lg={4}
              className='mb-12'
            >
              <div className='flex justify-center'>
                <ZennItem
                  post={post}
                />
              </div>
            </Grid.Col>
          ))
        }
      </Grid>
    </>
  );
};