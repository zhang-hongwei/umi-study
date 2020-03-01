import React, { Component } from 'react';
import { SmileOutlined } from '@ant-design/icons';
import { Form, Input, DatePicker, TimePicker, Select, Cascader, InputNumber } from 'antd';

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    sm: {
      span: 4,
    },
  },
  wrapperCol: {
    sm: {
      span: 20,
    },
  },
  labelAlign: 'right',
};

const FormPage = () => {
  return (
    <>
      <Form {...formItemLayout}>
        <Form.Item label="Fail">
          <Input placeholder="unavailable choice" id="error" />
        </Form.Item>

        <Form.Item label="Warning" validateStatus="warning">
          <Input placeholder="Warning" id="warning" />
        </Form.Item>

        <Form.Item label="Success" hasFeedback validateStatus="success">
          <Input placeholder="I'm the content" id="success" />
        </Form.Item>
        <Form.Item label="Fail">
          <Input placeholder="unavailable choice" id="error" />
        </Form.Item>

        <Form.Item label="Warning" validateStatus="warning">
          <Input placeholder="Warning" id="warning" />
        </Form.Item>

        <Form.Item label="Success" hasFeedback validateStatus="success">
          <Input placeholder="I'm the content" id="success" />
        </Form.Item>
      </Form>
    </>
  );
};

export default FormPage;
