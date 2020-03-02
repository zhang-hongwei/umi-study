import React, { Component, forwardRef, createRef } from 'react';
import { DatePicker } from 'antd';
import { formatTime, dateFormat } from '@/utils/time';

const { RangePicker } = DatePicker;

export default forwardRef((props, ref) => {
  // const {} = props;
  const handleChange = e => {
    e = e.map(item => formatTime(item));
    props.onChange(e);
  };
  return <RangePicker onChange={handleChange} ref={ref} format={dateFormat} />;
});
