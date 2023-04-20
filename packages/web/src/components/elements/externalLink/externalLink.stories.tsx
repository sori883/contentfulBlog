import type { Meta, StoryObj } from '@storybook/react';

import { ExternalLink } from './externalLink';

const meta: Meta<typeof ExternalLink> = {
  title: 'Element/ExternalLink',
  component: ExternalLink,
};
export default meta;

export const Default: StoryObj<typeof ExternalLink> = {
  args: {
    url: '',
    children: 'リンクテキスト'
  },
};
