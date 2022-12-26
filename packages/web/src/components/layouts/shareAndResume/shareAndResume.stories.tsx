import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ShareAndResume } from './shareAndResume';

export default {
  title: 'Layout/ShareAndResume',
  component: ShareAndResume,
} as ComponentMeta<typeof ShareAndResume>;

const Template: ComponentStory<typeof ShareAndResume> = (arg) => <ShareAndResume {...arg} />;

export const Default = Template.bind({});
Default.args = {
  markdown: '## resume'
};