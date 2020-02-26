import { useRequest } from '@/components/Table/components/node_modules/@umijs/hooks';
import React from '@/components/Table/components/node_modules/react';
import { Table, Button } from '@/components/Table/components/node_modules/antd';
import Mock from '@/components/Table/components/node_modules/mockjs';



export default ({ columns = [], requestData }) => {
  const { tableProps, params, refresh } = useRequest(
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
    },
  );

  // you can read sorter and filters from params[0]
  const { sorter = {}, filters = {} } = params[0] || {};

  return (
    <div>
      <Button onClick={refresh} style={{ marginBottom: 16 }}>
        刷新
      </Button>
      <Table columns={columns} rowKey="id" {...tableProps} />
    </div>
  );
};
