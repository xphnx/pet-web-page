import axios from 'axios';
import { User, userActions } from '@/entities/User';
// import i18n from '@/shared/config/i18n/i18n';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';

import { createAsyncThunk } from '@reduxjs/toolkit';

interface AuthByLoginProps {
  login: string;
  password: string;
}

export const authByLogin = createAsyncThunk<User, AuthByLoginProps, { rejectValue: string }>(
  'user/authByLogin',
  async ({ login, password }, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:8000/login', { login, password });

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      thunkAPI.dispatch(userActions.setAuthorizedUser(response.data));

      return response.data;
    } catch (error) {
      // return thunkAPI.rejectWithValue(i18n.t('WrongFormValues'));
      return thunkAPI.rejectWithValue('Error');
    }
  }
);
