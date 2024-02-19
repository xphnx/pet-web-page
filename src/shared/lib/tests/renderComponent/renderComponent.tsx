import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTest from '@/shared/config/i18n/i18nForTests';

import { render } from '@testing-library/react';

export interface RenderComponentOptions {
  route: string;
}

export const renderComponent = (component: ReactNode, options: RenderComponentOptions): ReactNode =>
  render(
    <MemoryRouter initialEntries={[options.route]}>
      <I18nextProvider i18n={i18nForTest}>{component}</I18nextProvider>
    </MemoryRouter>
  );
