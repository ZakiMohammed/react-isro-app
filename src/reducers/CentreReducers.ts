import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CentreState } from '../models/States';
import { RootState } from '../store';
import { Centre } from '../models/Centre';

const initialState: CentreState = {
  centres: null,
  filtered: null,
  searchValue: null,
};

export const customerSatelliteSlice = createSlice({
  name: 'centre',
  initialState,
  reducers: {
    getAll: (state, action: PayloadAction<Centre[]>) => {
      state.centres = action.payload;
      state.filtered = action.payload;
      state.searchValue = null;
    },
    clearSearch: state => {
      state.filtered = state.centres;
      state.searchValue = null;
    },
    search: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
      state.filtered = state.centres
        ? state.centres?.filter(
            i =>
              i.name.toLowerCase().includes(action.payload) ||
              i.Place.toLowerCase().includes(action.payload) ||
              i.State.toLowerCase().includes(action.payload)
          )
        : null;
    },
  },
});

export const { getAll, clearSearch, search } = customerSatelliteSlice.actions;

export const selectCentres = (state: RootState) => state.centre.centres;
export const selectCentresFiltered = (state: RootState) => state.centre.filtered;
export const selectSearchValue = (state: RootState) => state.centre.searchValue;

export default customerSatelliteSlice.reducer;
