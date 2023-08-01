import { configureStore } from '@reduxjs/toolkit';
import appReducer from './reducers/AppReducers';
import spacecraftReducers from './reducers/SpacecraftReducers';
import launcherReducers from './reducers/LauncherReducers';
import customerSatelliteReducers from './reducers/CustomerSatelliteReducers';
import centreReducers from './reducers/CentreReducers';

export const store = configureStore({
  reducer: {
    app: appReducer,
    spacecraft: spacecraftReducers,
    launcher: launcherReducers,
    customerSatellite: customerSatelliteReducers,
    centre: centreReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
