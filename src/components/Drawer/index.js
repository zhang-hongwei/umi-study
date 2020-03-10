import React, { forwardRef, useState, useImperativeHandle } from 'react';
import { Drawer, Button } from 'antd';
import styles from './index.less';
import cns from 'classnames';
export default forwardRef((props, ref) => {
  const {
    children,
    title,
    placement = 'right',
    width = '800',
    className,
    showBtn = true,
    ...rest
  } = props;
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
      className={cns(styles.drawer, className, 'za-drawer')}
    >
      {children}
      {showBtn ? (
        <div>
          <Button style={{ marginRight: '20px' }} type="primary">
            保存
          </Button>
          <Button onClick={hide}>取消</Button>
        </div>
      ) : null}
    </Drawer>
  );
});
