import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

import { TagChip } from 'components/domains/tag/tagChip';
import { PostsQuery } from 'graphql/generated';
import { pagesPath } from 'lib/$path';
import parseValue from 'lib/dataformat';

type Props = {
  article: NonNullable<PostsQuery['postsCollection']>['items'][number];
}

export const ArticleItem = ({ article }: Props): JSX.Element => {

  const tags = article?.tagsCollection?.items.map((item) => String(item?.name));

  return (
    <>
      <Card
        sx={{ maxWidth: 400, minWidth: {md: 400, xs: 350}, height: 230 }}
      >
        <Link href={pagesPath.posts._slug(String(article?.slug)).$url()}>
          <CardActionArea
            sx={{ width: '100%', height: '100%', display: 'flex', flexFlow: 'column'}}
          >
            <CardContent sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
              <Typography gutterBottom variant='h1' component='h5' sx={{ width: '100%', fontWeight: 700, verticalAlign: 'middle' }}>
                { article?.title }
              </Typography>
            </CardContent>
            <CardContent sx={{ width: '100%' }}>
              {
                tags ?
                  <TagChip 
                    tagsOnArticles={tags}
                  />
                  :
                  <></>
              }
              <Typography variant='body2' color='text.secondary' component='div'>
                投稿日：{ parseValue(article?.sys.firstPublishedAt) }
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </>
  );
};