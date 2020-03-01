import Mock from 'mockjs';
import { generateTableData } from './utils/parseMockData';

function fn(pageSize = 10) {
  return Mock.mock(generateTableData('5-10'));
}

export default {
  // 支持值为 Object 和 Array
  'GET /api/users': fn(),

  // GET POST 可省略
  '/api/users/1': { id: 1 },

  // 支持自定义函数，API 参考 express@4
  'POST /api/users/create': (req, res) => {
    res.end('OK');
  },
};
