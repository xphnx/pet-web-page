import { userReducer } from '@/entities/User';
import { createReducerManager } from './reducerManager';
import { StateSchema } from './StateSchema';

import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';

export const createReduxStore = (initialState?: StateSchema): ReturnType<typeof configureStore> => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });

  // temp
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  store.reducerManager = reducerManager;

  return store;
};
