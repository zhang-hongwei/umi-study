import request, { get, post } from '@/utils/request';

export const getData = params => {
  return get('/api/users', params);
};

