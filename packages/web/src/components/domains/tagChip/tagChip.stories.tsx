import type { Meta, StoryObj } from '@storybook/react';

import { TagChip } from './tagChip';

const meta: Meta<typeof TagChip> = {
  title: 'Domains/TagChip',
  component: TagChip,
};
export default meta;


export const Single: StoryObj<typeof TagChip> = {
  args: {
    tagsOnArticles: ['tag1']
  },
};

export const Many: StoryObj<typeof TagChip> = {
  args: {
    tagsOnArticles: ['tag1','tag2','tag3']
  },
};
