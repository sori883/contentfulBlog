import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ExternalLink } from './externalLink';

export default {
  title: 'Element/ExternalLink',
  component: ExternalLink,
} as ComponentMeta<typeof ExternalLink>;

const Template: ComponentStory<typeof ExternalLink> = (arg) => <ExternalLink {...arg}>リンクテキスト</ExternalLink>;

export const Default = Template.bind({});
Default.args = {
  url: '',
  icon: false
};

export const ShowIcon = Template.bind({});
ShowIcon.args = {
  url: '',
  icon: true
};
