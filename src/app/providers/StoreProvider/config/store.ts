import { userReducer } from '@/entities/User';
import { StateSchema } from './StateSchema';

import { configureStore } from '@reduxjs/toolkit';

export const createReduxStore = (initialState?: StateSchema): ReturnType<typeof configureStore> =>
  configureStore<StateSchema>({
    reducer: {
      user: userReducer,
    },
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
