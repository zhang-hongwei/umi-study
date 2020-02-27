// import axios from 'axios';
import { message, Modal } from 'antd';
import router from 'umi/router';
import axios from '@/packages/axios/axios';

const { hostname } = window.location;

const instance = axios.create({
  baseURL: '', // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 30 * 1000, // request timeout
});

instance.interceptors.request.use(
  config => {
    if (config.method === 'get') {
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// response interceptor
instance.interceptors.response.use(
  response => {
    const res = response.data || {};
    const msg = res.msg || res.errorMsg;
    const code = res.success;

    return res;
  },
  error => {
    return Promise.reject(error);
  },
);

export const get = (url, params) => instance.get(url, { params: params });
export const post = (url, params) => instance.post(url, params);
export default instance;
