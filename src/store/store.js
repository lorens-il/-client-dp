import { configureStore } from '@reduxjs/toolkit';
import { apiQuery } from '../api/apiQuery';
import listStatus from '../components/pages/ListStatus/listStatusSlice';

export const store = configureStore({
  reducer: {
    [apiQuery.reducerPath]: apiQuery.reducer,
    listStatus
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiQuery.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});
