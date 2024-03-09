import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import i18nForTests from '@/shared/config/i18n/i18nForTests';

import { DeepPartial } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';

export interface RenderComponentOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
}

export const renderComponent = (component: ReactNode, options: RenderComponentOptions): ReactNode =>
  render(
    <StoreProvider initialState={options.initialState}>
      <MemoryRouter initialEntries={[options.route || '/']}>
        <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
      </MemoryRouter>
    </StoreProvider>
  );
