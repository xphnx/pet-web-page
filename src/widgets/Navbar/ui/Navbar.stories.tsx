import { Provider } from 'react-redux';
import { createReduxStore } from '@/app/providers/StoreProvider';
import { ThemeEnum } from '@/app/providers/ThemeProvider';
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

const Template: ComponentStory<typeof Navbar> = (args) => (
  <Provider store={createReduxStore()}>
    <Navbar {...args} />
  </Provider>
);

export const NavbarLight = Template.bind({});
NavbarLight.args = {};

export const NavbarDark = Template.bind({});
NavbarDark.args = {};

NavbarDark.decorators = [ThemeDecorator(ThemeEnum.DARK)];
