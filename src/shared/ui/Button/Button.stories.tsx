import { ThemeEnum } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Button, ButtonSizeEnum, ButtonThemeEnum } from './Button';

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

export const PrimaryM = Template.bind({});
PrimaryM.args = {
  children: 'Primary M',
  size: ButtonSizeEnum.M,
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

export const GhostXL = Template.bind({});
GhostXL.args = {
  children: 'Ghost XL',
  theme: ButtonThemeEnum.GHOST,
  size: ButtonSizeEnum.XL,
};

export const GhostDark = Template.bind({});
GhostDark.args = {
  children: 'GhostDark Button',
  theme: ButtonThemeEnum.GHOST,
};
GhostDark.decorators = [ThemeDecorator(ThemeEnum.DARK)];

export const SquareM = Template.bind({});
SquareM.args = {
  children: 'M',
  square: true,
  size: ButtonSizeEnum.M,
};

export const SquareL = Template.bind({});
SquareL.args = {
  children: 'L',
  square: true,
  size: ButtonSizeEnum.L,
};

export const SquareXL = Template.bind({});
SquareXL.args = {
  children: 'XL',
  square: true,
  size: ButtonSizeEnum.XL,
};

export const Loading = Template.bind({});
Loading.args = {
  children: 'Loading',
  isLoading: true,
};
