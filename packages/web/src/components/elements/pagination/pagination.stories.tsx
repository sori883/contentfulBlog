import type { Meta, StoryObj } from '@storybook/react';

import { Pagination } from './pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Element/Pagination',
  component: Pagination,
};
export default meta;


export const Default: StoryObj<typeof Pagination> = {
  args: {
    defaultPage: 1,
    total: 5
  },
};

