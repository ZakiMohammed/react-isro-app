import { Centre } from './Centre';
import { Country } from './Country';
import { CustomerSatellite } from './CustomerSatellite';
import { Launcher } from './Launcher';
import { Spacecraft } from './Spacecraft';

export interface AppState {
  loading: boolean;
}

export interface SpacecraftState {
  spacecrafts: Spacecraft[] | null;
  filtered: Spacecraft[] | null;
  searchValue: string | null;
}

export interface LauncherState {
  launchers: Launcher[] | null;
  filtered: Launcher[] | null;
  searchValue: string | null;
}

export interface CustomerSatelliteState {
  customerSatellites: CustomerSatellite[] | null;
  filtered: CustomerSatellite[] | null;
  searchValue: string | null;
  countries: Country[] | null;
}

export interface CentreState {
  centres: Centre[] | null;
  filtered: Centre[] | null;
  searchValue: string | null;
}
