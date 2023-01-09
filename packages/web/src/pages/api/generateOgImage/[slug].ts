import fs from 'fs';
import path from 'path';

import type { NextApiRequest, NextApiResponse } from 'next';

import { client } from 'graphql/client';
import {
  PostDocument,
  PostQuery,
  PostQueryVariables,
} from 'graphql/generated';
import { generateOgImage } from 'lib/canvas';

const cwd = process.cwd();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Buffer>
): Promise<void> {

  const slug = req.query.slug as string;

  try {
    const { data } = await client.query<PostQuery, PostQueryVariables>({
      query: PostDocument,
      variables: {slug: slug }
    });
    const title = data.postsCollection?.items[0]?.title as string;
    const img = await generateOgImage(title);
    res.send(img);
    
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    console.error(e.message);

    // サイトの各ページで共通の画像
    const file = path.resolve(cwd, 'src/lib/canvas/og_image_default.png');
    const defaultImg = fs.readFileSync(file);
    res.send(defaultImg);
  }
}