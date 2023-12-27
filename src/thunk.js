import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchDragons } from 'https://api.spacexdata.com/v4/dragons';

export const fetchDragonsAsync = createAsyncThunk('dragons/fetchDragons', async () => {
  const response = await fetchDragons();
  return response;
});
