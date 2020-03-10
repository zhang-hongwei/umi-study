import { get } from '@/utils/request';

export const getData = params => {
  return get('/api/users', params);
};
