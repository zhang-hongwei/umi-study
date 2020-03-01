import request, { get, post } from '../../utils/request';

export const getData = params => {
  return get('/api/users', params);
};

export const getUserInfo = () => {
  return post('/api/getUserInfo', { a: 1, b: 2 });
};
