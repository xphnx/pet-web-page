import { ThemeEnum } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { PageLoader } from './PageLoader';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'widgets/PageLoader',
  component: PageLoader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof PageLoader>;

const Template: ComponentStory<typeof PageLoader> = (args) => <PageLoader {...args} />;

export const PageLoaderLight = Template.bind({});
PageLoaderLight.args = {};

export const PageLoaderDark = Template.bind({});
PageLoaderDark.args = {};

PageLoaderDark.decorators = [ThemeDecorator(ThemeEnum.DARK)];
