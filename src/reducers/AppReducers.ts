import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AppState } from '../models/States';
import { RootState } from '../store';

const initialState: AppState = {
  loading: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = appSlice.actions;

export const selectLoading = (state: RootState) => state.app.loading;

export default appSlice.reducer;
