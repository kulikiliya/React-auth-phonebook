import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://651468e8dc3282a6a3cd23fe.mockapi.io/contact/';

export const fetchContacts = createAsyncThunk(
  'fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('contacts');
      console.log(data);
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
      const { data } = await axios.post('contacts', contact);
      console.log(data);
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
      const { data } = await axios.delete(`contacts/${id}`);
      return data.id;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
