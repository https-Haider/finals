// src/features/dragonsAsync.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = 'https://api.spacexdata.com/v4/dragons';

// Thunk function to fetch dragons
export const fetchDragonsAsync = createAsyncThunk('dragons/fetchDragons', async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/dragons`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});
