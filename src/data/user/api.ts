import { SERVER_URL } from '@/config/api';
import axios from 'axios';

export const UserApi = {
  getUser: () => {
    return axios.get(`/v1/app/login/success`).then(({ data }) => {
      return data.user;
    });
  },
};
