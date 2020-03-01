import Mock from 'mockjs';
import { generateTableData } from './utils/parseMockData';

function fn(pageSize = 10) {
  console.log('pageSize===>', pageSize);
  return Mock.mock(generateTableData(pageSize));
}

export default {
  // 支持值为 Object 和 Array
  'GET /api/users': (req, res) => {
    const { pageSize } = req.query;
    let ary = fn(pageSize);
    res.send(ary);
  },

  // GET POST 可省略
  '/api/users/1': { id: 1 },

  // 支持自定义函数，API 参考 express@4
  'POST /api/users/create': (req, res) => {
    res.end('OK');
  },
};
