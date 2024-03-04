import { Provider } from 'react-redux';
import { createReduxStore } from '@/app/providers/StoreProvider';
import { ThemeEnum } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { LoginModal } from './LoginModal';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'entities/LoginModal',
  component: LoginModal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = (args) => (
  <Provider store={createReduxStore()}>
    <LoginModal {...args} />
  </Provider>
);

export const LoginModalDark = Template.bind({});
LoginModalDark.args = {
  isOpen: true,
};

LoginModalDark.decorators = [ThemeDecorator(ThemeEnum.DARK)];
