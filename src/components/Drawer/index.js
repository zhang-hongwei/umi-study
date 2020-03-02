import React, { Component, forwardRef, useState, useImperativeHandle } from 'react';
import { Drawer, Button } from 'antd';

export default forwardRef((props, ref) => {
  const { children, title, placement = 'right', width = '800', ...rest } = props;
  const hide = () => {
    setVisible(false);
  };
  const show = () => {
    setVisible(true);
  };
  useImperativeHandle(ref, () => ({ show, hide }));
  const [visible, setVisible] = useState(false);
  return (
    <Drawer
      destroyOnClose
      width={width}
      title={title}
      placement={placement}
      visible={visible}
      onClose={hide}
      {...rest}
    >
      {children}
    </Drawer>
  );
});
