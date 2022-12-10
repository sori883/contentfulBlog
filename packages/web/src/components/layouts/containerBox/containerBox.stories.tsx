import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ContainerBox } from './containerBox';

export default {
  title: 'Layout/ContainerBox',
  component: ContainerBox,
} as ComponentMeta<typeof ContainerBox>;

const Template: ComponentStory<typeof ContainerBox> = () => <ContainerBox></ContainerBox>;

export const Default = Template.bind({});
