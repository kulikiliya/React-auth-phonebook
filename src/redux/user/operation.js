import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Rosie@mqw.ua

export const taskApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  taskApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = token => {
  taskApi.defaults.headers.common.Authorization = ``;
};

//credentials
export const registerThunk = createAsyncThunk(
  'register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await taskApi.post('/users/signup', credentials);
      console.log(data);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await taskApi.post('/users/login', credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk('logout', async (_, thunkAPI) => {
  try {
    await taskApi.post('/users/logout');
    clearToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshThunk = createAsyncThunk(
  'refresh',
  async (credentials, thunkAPI) => {
    const savedToken = thunkAPI.getState().auth.token;
    if (!savedToken) return thunkAPI.rejectWithValue('Token is not exist');
    console.log(savedToken);

    try {
      setToken(savedToken);
      const { data } = await taskApi.get('/users/current');

      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
