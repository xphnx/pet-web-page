import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Story } from '@storybook/react';

export const RouterDecorator = (Story: Story): ReactNode => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
);
