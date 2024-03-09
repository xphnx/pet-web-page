import { ThemeEnum } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Text, TextTheme } from './Text';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const TextLight = Template.bind({});
TextLight.args = {
  title: 'Primary light title',
  text: 'Secondary light text',
};

export const TextDark = Template.bind({});
TextDark.args = {
  title: 'Primary dark title',
  text: 'Secondary dark text',
};

TextDark.decorators = [ThemeDecorator(ThemeEnum.DARK)];

export const TextError = Template.bind({});
TextError.args = {
  title: 'Error title',
  text: 'Error text',
  theme: TextTheme.ERROR,
};
