import { ComponentMeta, ComponentStory } from '@storybook/react';

import ItsMe from '../pages/itsme';

export default {
  title: 'PAge/ItsMe',
  component: ItsMe,
} as ComponentMeta<typeof ItsMe>;

const Template: ComponentStory<typeof ItsMe> = () => <ItsMe />;

export const Default = Template.bind({});
