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

      <div>123</div>

      <Table
        refresh={deps}
        columns={columns}
        requestData={param => {
          console.log('p===>', param);
          return dispatch({
            type: 'template/getData',
            payload: { pageSize: param.pageSize },
          }).then(res => {
            const { list, total } = res.data;
            return {
              list: list,
              total: total,
            };
          });
        }}
        searchFrom={form => {
          // console.log('form===>', form);
          const { getFieldDecorator } = form;
          return (
            <>
              <Form.Item label="电话">
                {getFieldDecorator('phone1')(<Input placeholder="phone" />)}
              </Form.Item>

              <Form.Item label="地址">{getFieldDecorator('times')(<RangePicker />)}</Form.Item>
            </>
          );
        }}
      ></Table>
    </>
  );
};

export default connect(state => {
  return state;
})(Page);
