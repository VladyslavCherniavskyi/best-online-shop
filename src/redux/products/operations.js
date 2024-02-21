import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://d2niqaa6be6skr.cloudfront.net';

const config = {
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json',
  },
};

export const getProducts = createAsyncThunk(
  'products/getAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`/products`, '', config.headers);
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
