import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { User, UserSchema } from '../types/userSchema';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: UserSchema = {
  authorizedUser: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthorizedUser: (state, { payload }: PayloadAction<User>) => {
      state.authorizedUser = payload;
    },
    initAuthorizedUser: (state) => {
      const authorizedUser = localStorage.getItem(USER_LOCALSTORAGE_KEY);

      if (authorizedUser) {
        state.authorizedUser = JSON.parse(authorizedUser);
      }
    },
    signOutAuthorizedUser: (state) => {
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
      state.authorizedUser = null;
    },
  },
});

export const { reducer: userReducer } = userSlice;
export const { actions: userActions } = userSlice;
