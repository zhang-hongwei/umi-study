import React from 'react';
import { Button, Col, Form, Input, Row, Table, Select } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';
import { useFormTable } from '@umijs/hooks';
import axios from 'axios';
// import { PaginatedParams } from '@umijs/hooks/useFormTable/lib';

const { Option } = Select;

const AppList = props => {
  const { columns, requestData } = props;
  const { getFieldDecorator } = props.form;

  const { tableProps, search, loading } = useFormTable(requestData, {
    defaultPageSize: 10,
    form: props.form,
  });

  const { type, changeType, submit, reset } = search;

  const advanceSearchForm = (
    <div>
      <Form>
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
        <Row>
          <Form.Item style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button type="primary" onClick={submit}>
              Search
            </Button>
            <Button onClick={reset} style={{ marginLeft: 16 }}>
              Reset
            </Button>
            <Button type="link" onClick={changeType}>
              Simple Search
            </Button>
          </Form.Item>
        </Row>
      </Form>
    </div>
  );

  const searchFrom = (
    <div style={{ marginBottom: 16 }}>
      <Form style={{ display: 'flex', justifyContent: 'flex-end' }}>
        {getFieldDecorator('gender', {
          initialValue: 'male',
        })(
          <Select style={{ width: 120, marginRight: 16 }} onChange={submit}>
            <Option value="">all</Option>
            <Option value="male">male</Option>
            <Option value="female">female</Option>
          </Select>,
        )}
        {getFieldDecorator('name')(
          <Input.Search placeholder="enter name" style={{ width: 240 }} onSearch={submit} />,
        )}
        <Button type="link" onClick={changeType}>
          Advanced Search
        </Button>
      </Form>
    </div>
  );

  return (
    <div>
      {type === 'simple' ? searchFrom : advanceSearchForm}
      <Table columns={columns} rowKey="email" {...tableProps} />
    </div>
  );
};

export default Form.create()(AppList);
