import { LoginSchema } from '../types/loginSchema';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: LoginSchema = {
  login: '',
  password: '',
  isLoading: false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLogin: (state, { payload: login }: PayloadAction<string>) => {
      state.login = login;
    },
    setPassword: (state, { payload: password }: PayloadAction<string>) => {
      state.password = password;
    },
  },
});

export const { reducer: loginReducer } = loginSlice;
export const { actions: loginActions } = loginSlice;
