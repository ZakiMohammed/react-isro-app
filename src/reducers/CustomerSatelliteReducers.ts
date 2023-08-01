import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CustomerSatelliteState } from '../models/States';
import { RootState } from '../store';
import { CustomerSatellite } from '../models/CustomerSatellite';

const initialState: CustomerSatelliteState = {
  customerSatellites: null,
  filtered: null,
  searchValue: null,
};

export const customerSatelliteSlice = createSlice({
  name: 'customerSatellite',
  initialState,
  reducers: {
    getAll: (state, action: PayloadAction<CustomerSatellite[]>) => {
      state.customerSatellites = action.payload;
      state.filtered = action.payload;
      state.searchValue = null;
    },
    clearSearch: state => {
      state.filtered = state.customerSatellites;
      state.searchValue = null;
    },
    search: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
      state.filtered = state.customerSatellites
        ? state.customerSatellites?.filter(
            i =>
              i.id.toLowerCase().includes(action.payload) ||
              i.country.toLowerCase().includes(action.payload) ||
              i.launch_date.toLowerCase().includes(action.payload) ||
              i.mass.toLowerCase().includes(action.payload) ||
              i.launcher.toLowerCase().includes(action.payload)
          )
        : null;
    },
  },
});

export const { getAll, clearSearch, search } = customerSatelliteSlice.actions;

export const selectCustomerSatellites = (state: RootState) => state.customerSatellite.customerSatellites;
export const selectCustomerSatellitesFiltered = (state: RootState) => state.customerSatellite.filtered;
export const selectSearchValue = (state: RootState) => state.customerSatellite.searchValue;

export default customerSatelliteSlice.reducer;
