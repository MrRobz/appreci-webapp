import axios from 'axios';
import { SERVER_URL } from './api';

export const setupAxios = (): void => {
  axios.defaults.baseURL = `${SERVER_URL}/api`;
  axios.defaults.withCredentials = true;
};
