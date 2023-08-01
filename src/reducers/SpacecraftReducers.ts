import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SpacecraftState } from '../models/States';
import { RootState } from '../store';
import { Spacecraft } from '../models/Spacecraft';

const initialState: SpacecraftState = {
  spacecrafts: null,
  filtered: null,
  searchValue: null,
};

export const spacecraftSlice = createSlice({
  name: 'spacecraft',
  initialState,
  reducers: {
    getAll: (state, action: PayloadAction<Spacecraft[]>) => {
      state.spacecrafts = action.payload;
      state.filtered = action.payload;
      state.searchValue = null;
    },
    clearSearch: state => {
      state.filtered = state.spacecrafts;
      state.searchValue = null;
    },
    search: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
      state.filtered = state.spacecrafts
        ? state.spacecrafts?.filter(i => i.name.toLowerCase().includes(action.payload))
        : null;
    },
  },
});

export const { getAll, clearSearch, search } = spacecraftSlice.actions;

export const selectSpacecrafts = (state: RootState) => state.spacecraft.spacecrafts;
export const selectSpacecraftsFiltered = (state: RootState) => state.spacecraft.filtered;
export const selectSearchValue = (state: RootState) => state.spacecraft.searchValue;

export default spacecraftSlice.reducer;
