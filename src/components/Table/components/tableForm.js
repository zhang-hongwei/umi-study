import React, { useState, useEffect, Children } from 'react';
import { Button, Col, Form, Input, Row, Table, Select, ConfigProvider } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';
import { useFormTable } from '@umijs/hooks';
// import { PaginatedParams } from '@umijs/hooks/useFormTable/lib';
import { formItemLayout } from './config';

const { Option } = Select;

const AppList = props => {
  const { columns, requestData, rowKey, refresh, children } = props;
  const [form] = Form.useForm();
  const [isSearch, setIsSearch] = useState(false);
  const { tableProps, run, search, loading } = useFormTable(
    (p, formData) => {
      return requestData({ ...p, ...formData });
    },
    {
      refreshDeps: [refresh],
      defaultPageSize: 10,
      form: form,
    },
  );

  useEffect(() => {
    run();
  }, [refresh]);

  // const sForm = (
  //   <Form.Item label="地址">
  //     <Input />
  //   </Form.Item>
  // );

  tableProps.pagination.showQuickJumper = true;
  tableProps.pagination.showSizeChanger = true;
  tableProps.pagination.pageSizeOptions = ['10', '20', '30', '50'];

  const { type, changeType, submit, reset } = search;

  const handleClick1 = () => {};

  return (
    <ConfigProvider renderEmpty={() => '暂时无数据'}>
      <div>
        <button onClick={handleClick1}>click</button>
        <Form
          form={form}
          name="table_form_hooks"
          layout="inline"
          initialValues={{
            price: {
              number: 0,
              currency: 'rmb',
            },
          }}
        >
          {children ? children : null}
          <Form.Item>
            <Button type="primary" htmlType="submit" onClick={submit}>
              确定
            </Button>
            <Button onClick={reset}>重置</Button>
          </Form.Item>
        </Form>

        <Table columns={columns} rowKey="id" {...tableProps} />
      </div>
    </ConfigProvider>
  );
};

export default AppList;

// (p, formData) => {
//   console.log('formData===>', formData);
//   return requestData({ ...formData, ...p });
// }
