import { userReducer } from '@/entities/User';
import { loginReducer } from '@/features/AuthByLogin';
import { StateSchema } from './StateSchema';

import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';

export const createReduxStore = (initialState?: StateSchema): ReturnType<typeof configureStore> => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    user: userReducer,
    loginForm: loginReducer,
  };

  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
};
