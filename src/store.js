import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import dragonsReducer from './features/dragonslice';

export const store = configureStore({
  reducer: {
    dragons: dragonsReducer,
  },
  middleware: [thunk],
});
