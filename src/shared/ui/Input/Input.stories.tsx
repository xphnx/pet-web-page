import { ThemeEnum } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Input } from './Input';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'shared/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputDark = Template.bind({});
InputDark.args = {};

InputDark.decorators = [ThemeDecorator(ThemeEnum.DARK)];
