import { ThemeEnum } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Button, ButtonThemeEnum } from './Button';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Button',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'PrimaryDark Button',
};
PrimaryDark.decorators = [ThemeDecorator(ThemeEnum.DARK)];

export const Ghost = Template.bind({});
Ghost.args = {
  children: 'Ghost Button',
  theme: ButtonThemeEnum.GHOST,
};

export const GhostDark = Template.bind({});
GhostDark.args = {
  children: 'GhostDark Button',
  theme: ButtonThemeEnum.GHOST,
};

GhostDark.decorators = [ThemeDecorator(ThemeEnum.DARK)];
