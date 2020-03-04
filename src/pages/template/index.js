import React, { useState, createRef } from 'react';
import { Button, Col, Form, Input, Row, Select, ConfigProvider } from 'antd';
import { Table } from '@/components/Table';
import { connect } from 'dva';
import { columns } from './config';
import { RangePicker } from '@/components/DatePicker/index';
import Drawer from '@/components/Drawer';

let num = 0;
const Page = ({ dispatch }) => {
  const ref = createRef();
  let [deps, setDeps] = useState(1);
  const handleClick = () => {
    ref.current.show();
  };
  return (
    <>
      <Drawer ref={ref}>123123</Drawer>
      <Button onClick={handleClick}>测试点击</Button>

      <Table
        forceRender
        refresh={deps}
        columns={columns}
        requestData={({ pageSize, ...rest }) => {
          console.log('rest===>', rest);
          return dispatch({
            type: 'template/getData',
            payload: { pageSize: pageSize, ...rest },
          }).then(res => {
            const { list, total } = res.data;
            return {
              list: list,
              total: total,
            };
          });
        }}
      >
        <Form.Item name="phone" label="电话1">
          <Input placeholder="phone" />
        </Form.Item>

        <Form.Item name="times" label="地址1">
          <RangePicker />
        </Form.Item>
      </Table>
    </>
  );
};

export default connect(state => {
  return state;
})(Page);
