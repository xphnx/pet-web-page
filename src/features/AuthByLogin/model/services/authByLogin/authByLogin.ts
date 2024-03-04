import axios from 'axios';
import { User } from '@/entities/User';

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

      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue('Error!');
    }
  }
);
