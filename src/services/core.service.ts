import axios from 'axios';
import { urlIsro } from '../constants/core.constant';

const axiosInstance = axios.create({
  baseURL: urlIsro.base,
});

const get = async <T>(url: string): Promise<T> => {
  const response = await axiosInstance.get(url);
  if (response.status === 200) {
    return response.data as T;
  } else {
    throw new Error(`[${response.status}]: ${response.statusText}`);
  }
};

const service = {
  get,
};

export default service;
