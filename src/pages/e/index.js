import React, { Component } from 'react';
import { Button } from 'antd';

import { connect } from 'dva';

const Page = ({ dispatch }) => {
  const handleClick = () => {
    dispatch({
      type: 'testData/getData',
      payload: {},
    });
  };
  return (
    <div>
      <Button onClick={handleClick}>测试点击</Button>
    </div>
  );
};

export default connect(state => {
  console.log('=============>', state);
  return state;
})(Page);
