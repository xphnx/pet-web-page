import { ThemeEnum } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook';

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
