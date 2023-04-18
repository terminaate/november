import { configureStore } from '@reduxjs/toolkit';
import UISlice from '@/store/slices/UISlice';

const store = configureStore({
  reducer: {
    ui: UISlice,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
