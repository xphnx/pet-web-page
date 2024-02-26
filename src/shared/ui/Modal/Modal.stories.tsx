import { ThemeEnum } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Modal } from './Modal';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const ModalLight = Template.bind({});
ModalLight.args = {
  children: 'Modal Light',
  isOpen: true,
};

export const ModalDark = Template.bind({});
ModalDark.args = {
  children: 'Modal Dark',
  isOpen: true,
};

ModalDark.decorators = [ThemeDecorator(ThemeEnum.DARK)];
