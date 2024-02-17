import { ThemeEnum } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Loader } from './Loader';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'shared/Loader',
  component: Loader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const LoaderLight = Template.bind({});
LoaderLight.args = {};

export const LoaderDark = Template.bind({});
LoaderDark.args = {};

LoaderDark.decorators = [ThemeDecorator(ThemeEnum.DARK)];
