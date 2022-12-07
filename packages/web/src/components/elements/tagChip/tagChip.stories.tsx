import { ComponentMeta, ComponentStory } from '@storybook/react';

import TagChip from './tagChip';

export default {
  title: 'Example/TagChip',
  component: TagChip,
} as ComponentMeta<typeof TagChip>;

const Template: ComponentStory<typeof TagChip> = (args) => <TagChip {...args} />;

export const single = Template.bind({});
single.args = {
  tagsOnArticles: ['tag1']
};

export const many = Template.bind({});
many.args = {
  tagsOnArticles: ['tag1','tag2','tag3']
};