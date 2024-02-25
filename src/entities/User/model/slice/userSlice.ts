import { UserSchema } from '../types/userSchema';

import { createSlice } from '@reduxjs/toolkit';

const initialState: UserSchema = {
  login: 'admin',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const { reducer: userReducer } = userSlice;
