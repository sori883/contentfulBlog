import type { Meta, StoryObj } from '@storybook/react';

import posts from '../../../.contents/posts.json';

import { ZennList } from './zennList';

const meta: Meta<typeof ZennList> = {
  title: 'Domains/ZennList',
  component: ZennList,
};
export default meta;

export const Default: StoryObj<typeof ZennList> = {
  args: {
    posts: posts,
  },
};