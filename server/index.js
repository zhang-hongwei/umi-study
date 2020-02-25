const express = require('express');
const { getList } = require('./mock');
const app = express();

app.get('/api', (req, res) => {
  console.log('lll');

  res.send('Hello World!');
});

app.listen(9000, () => console.log('Example app listening on port 9000!'));

app.get('/api/getlist', (req, res) => {
  const { current = '1', pageSize = '10' } = req.query;

  // console.log(params);

  res.send({
    msg: '成功',
    code: 0,
    success: true,
    data: {
      ...getList(current, pageSize),
      page: current,
      pageSize: pageSize,
    },
  });
});

app.get('/api/getUserInfo', (req, res) => {
  res.send({
    msg: '成功',
    code: 0,
    success: true,
    data: {
      name: '张红伟',
      age: '20',
      phone: '18958068191',
    },
  });
});

app.post('/api/getUserInfo', (req, res) => {
  res.send({
    msg: '成功',
    code: 0,
    success: true,
    data: {
      name: '张红伟',
      age: '20',
      phone: '18958068191',
    },
  });
});
