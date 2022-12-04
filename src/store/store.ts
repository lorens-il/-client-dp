import { configureStore } from '@reduxjs/toolkit';
import listStatus from '../components/pages/ListStatus/listStatusSlice';
import sortTypeReducer from '../components/Popup/reducer';

export const store = configureStore<any, any, any>({
  reducer: {
    listStatus,
    sortTypeReducer
  },
  middleware: (getDefaultMiddleware: any) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch