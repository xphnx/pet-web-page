import { ThemeEnum } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Sidebar } from './Sidebar';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'widgets/Sidebar',
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const SidebarLight = Template.bind({});
SidebarLight.args = {};

export const SidebarDark = Template.bind({});
SidebarDark.args = {};

SidebarDark.decorators = [ThemeDecorator(ThemeEnum.DARK)];
