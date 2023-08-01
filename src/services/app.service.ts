import { urlIsro, urlRestCountries } from '../constants/core.constant';
import { Country } from '../models/Country';
import { CentreDto, CustomerSatelliteDto, LauncherDto, SpacecraftDto } from '../models/Dto';
import core from './core.service';

const getSpacecrafts = async () => {
  return await core.get<SpacecraftDto>(urlIsro.spacecrafts);
};

const getLaunchers = async () => {
  return await core.get<LauncherDto>(urlIsro.launchers);
};

const getCustomerSatellites = async () => {
  return await core.get<CustomerSatelliteDto>(urlIsro.customerSatellites);
};

const getCentres = async () => {
  return await core.get<CentreDto>(urlIsro.centres);
};

const getCountries = async () => {
  return await core.get<Country[]>(`${urlRestCountries.base}${urlRestCountries.all}`);
};

const service = {
  getSpacecrafts,
  getLaunchers,
  getCustomerSatellites,
  getCentres,
  getCountries,
};

export default service;
