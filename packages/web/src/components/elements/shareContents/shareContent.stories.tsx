import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ShareContents } from './shareContent';

export default {
  title: 'Element/ShareContents',
  component: ShareContents,
} as ComponentMeta<typeof ShareContents>;

const Template: ComponentStory<typeof ShareContents> = () => <ShareContents />;

export const Default = Template.bind({});