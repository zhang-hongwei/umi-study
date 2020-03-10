import { useRequest } from '@umijs/hooks';
import React from 'react';
import { Table, Button } from 'antd';
// import Mock from 'mockjs';

export default ({ columns = [], requestData, deps }) => {
  const { tableProps, refresh } = useRequest(
    ({ current, pageSize, sorter: s, filters: f }) => {
      const p = { current, pageSize };
      if (s?.field && s?.order) {
        p[s.field] = s.order;
      }
      if (f) {
        Object.entries(f).forEach(([filed, value]) => {
          p[filed] = value;
        });
      }
      // console.log(p);
      // return getUserList(p);
      return requestData(p);
    },
    {
      paginated: true,
      defaultPageSize: 10,
      refreshDeps: [deps],
    },
  );

  // you can read sorter and filters from params[0]
  // const {  filters = {} } = params[0] || {};

  return (
    <div>
      <Button onClick={refresh} style={{ marginBottom: 16 }}>
        刷新
      </Button>
      <Table columns={columns} rowKey="id" {...tableProps} />
    </div>
  );
};
