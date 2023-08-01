import { Centre } from './Centre';
import { CustomerSatellite } from './CustomerSatellite';
import { Launcher } from './Launcher';
import { Spacecraft } from './Spacecraft';

export interface LauncherDto {
  launchers: Launcher[];
}

export interface CentreDto {
  centres: Centre[];
}

export interface CustomerSatelliteDto {
  customer_satellites: CustomerSatellite[];
}

export interface SpacecraftDto {
  spacecrafts: Spacecraft[];
}
