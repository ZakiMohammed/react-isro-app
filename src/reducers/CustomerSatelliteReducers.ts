import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CustomerSatelliteState } from '../models/States';
import { RootState } from '../store';
import { CustomerSatellite } from '../models/CustomerSatellite';
import { Country } from '../models/Country';

const initialState: CustomerSatelliteState = {
  customerSatellites: null,
  filtered: null,
  searchValue: null,
  countries: null,
};

const getCountryName = (country: string) => {
  switch (country) {
    case 'UK':
      return 'United Kingdom';
    case 'USA':
      return 'United States';
    default:
      return country;
  }
};

const mapCustomerSatellites = (item: CustomerSatellite, countries: Country[]) => {
  const country = getCountryName(item.country).toLowerCase();
  const found = countries.find(
    i => i.name.common.toLowerCase().includes(country) || i.name.official.toLowerCase().includes(country)
  );
  item.flag = found ? found.flags.png : item.flag;
  return item;
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
    getAllCountries: (state, action: PayloadAction<Country[]>) => {
      state.countries = action.payload;
      if (state.customerSatellites) {
        const updatedSatellites = state.customerSatellites.map(item => mapCustomerSatellites(item, action.payload));
        state.customerSatellites = updatedSatellites;
        state.filtered = updatedSatellites;
      }
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

export const { getAll, getAllCountries, clearSearch, search } = customerSatelliteSlice.actions;

export const selectCustomerSatellites = (state: RootState) => state.customerSatellite.customerSatellites;
export const selectCustomerSatellitesFiltered = (state: RootState) => state.customerSatellite.filtered;
export const selectSearchValue = (state: RootState) => state.customerSatellite.searchValue;
export const selectCountries = (state: RootState) => state.customerSatellite.countries;

export default customerSatelliteSlice.reducer;
