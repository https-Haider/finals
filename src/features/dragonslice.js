// src/features/dragonsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const dragonslice = createSlice({
  name: 'dragons',
  initialState: {
    dragons: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    setDragons: (state, action) => {
      state.dragons = action.payload;
      state.status = 'succeeded';
    },
    setError: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const { setDragons, setError } = dragonslice.actions;
export default dragonslice.reducer;
