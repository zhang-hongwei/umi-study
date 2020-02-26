import React, { Component } from 'react';
import { DatePicker, Select } from 'antd';
import moment from 'moment';
const { RangePicker } = DatePicker;
const { Option } = Select;
// import A from "@/components"

const data = [
  {
    name: '1111',
    value: '1',
    id: '12fds23',
  },
  {
    name: '2222',
    value: '2',
    id: '1fsda223',
  },
  {
    name: '3333',
    value: '3',
    id: '1fds223',
  },
];
const B = () => {
  const handleChange = e => {
    console.log(e);
    // let a1 =
  };

  return (
    <div>
      b 页面
      <br />
      <Select labelInValue onChange={handleChange}>
        {data.map(d => (
          <Option key={d.value} value={d.id}>
            {d.name}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default B;
