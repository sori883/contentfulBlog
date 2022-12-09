import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TagChip } from './tagChip';

export default {
  title: 'Domains/TagChip',
  component: TagChip,
} as ComponentMeta<typeof TagChip>;

const Template: ComponentStory<typeof TagChip> = (args) => <TagChip {...args} />;

export const Single = Template.bind({});
Single.args = {
  tagsOnArticles: ['tag1']
};

export const Many = Template.bind({});
Many.args = {
  tagsOnArticles: ['tag1','tag2','tag3']
};