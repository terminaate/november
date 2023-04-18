import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UIState {
  globalLoader: boolean;
}

export const initialState: UIState = {
  globalLoader: true,
};

const UISlice = createSlice({
  name: 'UI',
  initialState,
  reducers: {
    setGlobalLoader(state, action: PayloadAction<boolean>) {
      state.globalLoader = action.payload;
    },
  },
});

export const { setGlobalLoader } = UISlice.actions;

export default UISlice.reducer;
