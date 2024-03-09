import { ReactNode } from 'react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';

import { DeepPartial } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';

export const StoreDecorator =
  (state: DeepPartial<StateSchema>) =>
  (StoryComponent: Story): ReactNode =>
    (
      <StoreProvider initialState={state}>
        <StoryComponent />
      </StoreProvider>
    );
