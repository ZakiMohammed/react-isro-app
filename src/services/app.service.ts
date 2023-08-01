import { url } from '../constants/core.constant';
import { CentreDto, CustomerSatelliteDto, LauncherDto, SpacecraftDto } from '../models/Dto';
import core from './core.service';

const getSpacecrafts = async () => {
  return await core.get<SpacecraftDto>(url.spacecrafts);
};

const getLaunchers = async () => {
  return await core.get<LauncherDto>(url.launchers);
};

const getCustomerSatellites = async () => {
  return await core.get<CustomerSatelliteDto>(url.customerSatellites);
};

const getCentres = async () => {
  return await core.get<CentreDto>(url.centres);
};

const service = {
  getSpacecrafts,
  getLaunchers,
  getCustomerSatellites,
  getCentres,
};

export default service;
