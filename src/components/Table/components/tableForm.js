import React from 'react';
import { Button, Col, Form, Input, Row, Table, Select } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';
import { useFormTable } from '@umijs/hooks';
import axios from 'axios';
// import { PaginatedParams } from '@umijs/hooks/useFormTable/lib';

const { Option } = Select;

const AppList = props => {
  const { columns, requestData, tag = [] } = props;
  const { getFieldDecorator } = props.form;

  const { tableProps, search, loading } = useFormTable(requestData, {
    defaultPageSize: 10,
    form: props.form,
  });

  const { type, changeType, submit, reset } = search;

  console.log('+=====>>type==>', type);
  const searchFrom = (
    <>
      <Row gutter={24}>
        <Col span={8}>
          <Form.Item label="name">
            {getFieldDecorator('name')(<Input placeholder="name" />)}
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="email">
            {getFieldDecorator('email')(<Input placeholder="email" />)}
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="phone">
            {getFieldDecorator('phone')(<Input placeholder="phone" />)}
          </Form.Item>
        </Col>
      </Row>
      <Row></Row>
    </>
  );

  return (
    <div>
      {searchFrom ? (
        <Form>
          {searchFrom}
          {
            <Form.Item style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button type="primary" onClick={submit}>
                搜索
              </Button>
              <Button onClick={reset} style={{ marginLeft: 16 }}>
                重置
              </Button>
              <Button type="link" onClick={changeType}>
                Simple Search
              </Button>
            </Form.Item>
          }
        </Form>
      ) : null}
      <Table columns={columns} rowKey="eemaile" {...tableProps} />
    </div>
  );
};

export default Form.create()(AppList);
