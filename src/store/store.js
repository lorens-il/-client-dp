import { configureStore } from '@reduxjs/toolkit';
import listStatus from '../components/pages/ListStatus/listStatusSlice';

export const store = configureStore({
  reducer: {
    listStatus
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});
