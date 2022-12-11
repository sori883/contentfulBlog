import { ComponentMeta, ComponentStory } from '@storybook/react';

import { DrawerContent } from './drawerContent';

export default {
  title: 'Layout/DrawerContent',
  component: DrawerContent,
} as ComponentMeta<typeof DrawerContent>;

const Template: ComponentStory<typeof DrawerContent> = () => <DrawerContent />;

export const Default = Template.bind({});
