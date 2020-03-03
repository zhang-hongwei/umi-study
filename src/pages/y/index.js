import React, { useState } from 'react';
import { Form, Input, Select, Button } from 'antd';

const { Option } = Select;

const PriceInput = ({ value = {}, onChange }) => {
  const [number, setNumber] = useState(0);
  const [currency, setCurrency] = useState('rmb');

  const triggerChange = changedValue => {
    if (onChange) {
      onChange({
        number,
        currency,
        ...value,
        ...changedValue,
      });
    }
  };

  const onNumberChange = e => {
    const newNumber = parseInt(e.target.value || 0, 10);

    if (Number.isNaN(number)) {
      return;
    }

    if (!('number' in value)) {
      setNumber(newNumber);
    }

    triggerChange({
      number: newNumber,
    });
  };

  const onCurrencyChange = newCurrency => {
    if (!('currency' in value)) {
      setCurrency(newCurrency);
    }

    triggerChange({
      currency: newCurrency,
    });
  };

  return (
    <span>
      <Input
        type="text"
        value={value.number || number}
        onChange={onNumberChange}
        style={{
          width: 100,
          marginRight: 8,
        }}
      />
      <Select
        value={value.currency || currency}
        style={{
          width: 80,
        }}
        onChange={onCurrencyChange}
      >
        <Option value="rmb">RMB</Option>
        <Option value="dollar">Dollar</Option>
      </Select>
    </span>
  );
};

const Demo = () => {
  const [form] = Form.useForm();
  const onFinish = values => {
    let name = form.getFieldValue();
    console.log('======name=====>>>', name);
    console.log('Received values from form:===> ', values);
  };

  const checkPrice = (rule, value) => {
    if (value.number > 0) {
      return Promise.resolve();
    }

    return Promise.reject('Price must be greater than zero!');
  };

  const handleClik1 = () => {
    let name = form.getFieldsValue();
    console.log('======name=====>>>', name);
  };

  return (
    <Form
      form={form}
      name="customized_form_controls"
      layout="inline"
      initialValues={{
        price: {
          number: 0,
          currency: 'rmb',
        },
      }}
      onFinish={onFinish}
    >
      <Form.Item name="price" label="Price">
        <PriceInput />
      </Form.Item>
      <Form.Item name="aa" label="名i在">
        <Input placeholder="请输入" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button onClick={handleClik1}>获取form</Button>
      </Form.Item>
    </Form>
  );
};

// ReactDOM.render(<Demo />, mountNode);

export default Demo;
