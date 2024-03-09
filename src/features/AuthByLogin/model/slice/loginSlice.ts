import { authByLogin } from '../services/authByLogin/authByLogin';
import { LoginSchema } from '../types/loginSchema';

import { createSlice } from '@reduxjs/toolkit';

const initialState: LoginSchema = {
  isLoading: false,
  error: '',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authByLogin.pending, (state) => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(authByLogin.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(authByLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { reducer: loginReducer } = loginSlice;
