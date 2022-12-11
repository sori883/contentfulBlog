import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ContentBox } from './contentBox';

export default {
  title: 'Layout/ContentBox',
  component: ContentBox,
} as ComponentMeta<typeof ContentBox>;

const Template: ComponentStory<typeof ContentBox> = () => <ContentBox>content</ContentBox>;

export const Default = Template.bind({});
