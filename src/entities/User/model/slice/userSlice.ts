import { UserSchema } from '../types/userSchema';

import { createSlice } from '@reduxjs/toolkit';

const initialState: UserSchema = {
  authorizedUser: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const { reducer: userReducer } = userSlice;
export const { actions: userActions } = userSlice;
