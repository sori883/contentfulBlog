import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

import parseValue from 'lib/dataformat';
import { FeedItem } from 'rssContents/postBuilder';

type Props = {
  post: FeedItem;
}

export const ZennItem = ({post}: Props): JSX.Element => {

  return (
    <>
      <Card
        sx={{ maxWidth: {md: 400, xs: 350}, minWidth: {md: 400, xs: 350}, height: 230 }}
      >
        <Link href={post.link}>
          <CardActionArea
            sx={{ width: '100%', height: '100%', display: 'flex', flexFlow: 'column'}}
          >
            <CardContent sx={{ width: '100%', flexGrow: 1, flexFlow: 'column', display: 'flex', alignItems: 'center' }}>
              <Typography component='span' sx={{ width: '100%', verticalAlign: 'middle' }}>
                zenn
              </Typography>
            </CardContent>
            <CardContent sx={{ flexGrow: 1, flexFlow: 'column', display: 'flex', alignItems: 'center' }}>
              <Typography variant='h1' component='h5' sx={{ width: '100%', fontWeight: 700, verticalAlign: 'middle' }}>
                { post.title }
              </Typography>
            </CardContent>
            <CardContent sx={{ width: '100%' }}>
              <Typography variant='body2' color='text.secondary' component='div'>
                投稿日：{ parseValue(String(post.isoDate)) }
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </>
  );
};