import { ThemeEnum } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Navbar } from './Navbar';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'widgets/Navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const NavbarLight = Template.bind({});
NavbarLight.args = {};
NavbarLight.decorators = [StoreDecorator({})];

export const NavbarDark = Template.bind({});
NavbarDark.args = {};

NavbarDark.decorators = [ThemeDecorator(ThemeEnum.DARK)];
NavbarDark.decorators = [StoreDecorator({})];
