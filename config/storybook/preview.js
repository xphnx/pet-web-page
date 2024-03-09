import { ThemeEnum } from '@/app/providers/ThemeProvider';
import { RouterDecorator, StyleDecorator, ThemeDecorator } from '@/shared/config/storybook';

import { addDecorator } from '@storybook/react';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(ThemeEnum.LIGHT));
addDecorator(RouterDecorator);
