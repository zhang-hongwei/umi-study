import React, { Component, useState, createRef } from 'react';
import { BasicLine } from '@/components/charts';
import Drawer from '@/components/Drawer';
import { Button } from 'antd';

const Page = () => {
  const [visible, setvisible] = useState(false);
  const ref = createRef();
  const handleClick = () => {
    ref.current.show();
  };
  return (
    <div>
      <Button onClick={handleClick}>click</Button>
      <Drawer ref={ref}>123123</Drawer>
    </div>
  );
};

export default Page;
