import { useRequest } from '@umijs/hooks';
import { Spin, Select } from 'antd';
import React, { useState } from 'react';

const userSchool = id => {
  switch (id) {
    case '1':
      return 'Tsinghua University';
    case '2':
      return 'Beijing University';
    case '3':
      return 'Zhejiang University';
    default:
      return '';
  }
};

async function getUserSchool(userId) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(userSchool(userId));
    }, 1000);
  });
}

export default () => {
  const [userId, setUserId] = useState('1');
  const { data, loading } = useRequest(() => getUserSchool(), {
    refreshDeps: [userId],

  });

  return (
    <div>
      <Select onChange={setUserId} value={userId} style={{ marginBottom: 16, width: 120 }}>
        <Select.Option value="1">user 1</Select.Option>
        <Select.Option value="2">user 2</Select.Option>
        <Select.Option value="3">user 3</Select.Option>
      </Select>
      <Spin spinning={loading}>School: {data}</Spin>
    </div>
  );
};
