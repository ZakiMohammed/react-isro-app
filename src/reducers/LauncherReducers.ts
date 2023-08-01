import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LauncherState } from '../models/States';
import { RootState } from '../store';
import { Launcher } from '../models/Launcher';

const initialState: LauncherState = {
  launchers: null,
  filtered: null,
  searchValue: null,
};

export const spacecraftSlice = createSlice({
  name: 'launcher',
  initialState,
  reducers: {
    getAll: (state, action: PayloadAction<Launcher[]>) => {
      state.launchers = action.payload;
      state.filtered = action.payload;
      state.searchValue = null;
    },
    clearSearch: state => {
      state.filtered = state.launchers;
      state.searchValue = null;
    },
    search: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
      state.filtered = state.launchers
        ? state.launchers?.filter(i => i.id.toLowerCase().includes(action.payload))
        : null;
    },
  },
});

export const { getAll, clearSearch, search } = spacecraftSlice.actions;

export const selectLaunchers = (state: RootState) => state.launcher.launchers;
export const selectLaunchersFiltered = (state: RootState) => state.launcher.filtered;
export const selectSearchValue = (state: RootState) => state.launcher.searchValue;

export default spacecraftSlice.reducer;
