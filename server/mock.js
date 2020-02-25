const Mock = require('mockjs');

const getList = (current, pageSize) =>
  Mock.mock({
    total: 155,
    [`list|${pageSize}`]: [
      {
        id: '@guid',
        name: '@cname',
        'gender|1': ['male', 'female'],
        email: '@email',
        disabled: false,
      },
    ],
  });

module.exports.getList = getList;
