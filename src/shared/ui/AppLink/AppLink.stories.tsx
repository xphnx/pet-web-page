import { ThemeEnum } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { AppLink, AppLinkThemeEnum } from './AppLink';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
  theme: AppLinkThemeEnum.PRIMARY,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'PrimaryDark Link',
  theme: AppLinkThemeEnum.PRIMARY,
};

PrimaryDark.decorators = [ThemeDecorator(ThemeEnum.DARK)];

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary',
  theme: AppLinkThemeEnum.SECONDARY,
};

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  children: 'SecondaryDark Link',
  theme: AppLinkThemeEnum.SECONDARY,
};

SecondaryDark.decorators = [ThemeDecorator(ThemeEnum.DARK)];
