import { configureStore } from '@reduxjs/toolkit';
import listStatus from '../components/pages/ListStatus/listStatusSlice';

export const store = configureStore({
  reducer: {
    listStatus
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch