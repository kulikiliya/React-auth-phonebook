import { createAsyncThunk } from '@reduxjs/toolkit';
import { taskApi } from 'redux/user/operation';

export const fetchContacts = createAsyncThunk(
  'fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await taskApi.get('/contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'addContact',
  async (contact, thunkAPI) => {
    const posts = thunkAPI.getState().contact.contacts.items;
    const element = posts.find(item => item.name === contact.name);
    console.log(contact);
    if (element) {
      alert('Already exist!');
      return thunkAPI.rejectWithValue('Post is exist');
    }
    try {
      const { data } = await taskApi.post('/contacts', contact);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'deleteContact',
  async (id, thunkAPI) => {
    try {
      const { data } = await taskApi.delete(`/contacts/${id}`);
      return data.id;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
