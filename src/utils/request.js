// import axios from 'axios';
import { message, Modal } from 'antd';
import router from 'umi/router';
import axios from '@/packages/axios/axios';
import { handleParamsEmpty } from './utils';

const instance = axios.create({
  baseURL: '', // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 30 * 1000, // request timeout
});

instance.interceptors.request.use(
  config => {
    if (config.method === 'get') {
      handleParamsEmpty(config.params);
    }

    if (config.method === 'post') {
      handleParamsEmpty(config.params);
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
    const code = res.code;

    if (code != 0) {
      message.error(msg);
      return Promise.reject(msg);
    }

    return res;
  },
  error => {
    return Promise.reject(error);
  },
);

export const get = (url, params) => instance.get(url, { params: params });
export const post = (url, params) => instance.post(url, params);
export default instance;
