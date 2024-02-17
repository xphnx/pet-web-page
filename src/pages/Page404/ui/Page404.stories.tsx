import { ThemeEnum } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Page404 } from './Page404';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'pages/Page404',
  component: Page404,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Page404>;

const Template: ComponentStory<typeof Page404> = (args) => <Page404 {...args} />;

export const Page404Light = Template.bind({});
Page404Light.args = {};

export const Page404Dark = Template.bind({});
Page404Dark.args = {};

Page404Dark.decorators = [ThemeDecorator(ThemeEnum.DARK)];
