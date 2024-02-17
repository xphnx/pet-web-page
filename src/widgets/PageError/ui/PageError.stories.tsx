import { ThemeEnum } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { PageError } from './PageError';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'widgets/PageError',
  component: PageError,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />;

export const PageErrorLight = Template.bind({});
PageErrorLight.args = {};

export const PageErrorDark = Template.bind({});
PageErrorDark.args = {};

PageErrorDark.decorators = [ThemeDecorator(ThemeEnum.DARK)];
