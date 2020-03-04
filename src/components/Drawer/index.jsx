import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { Drawer as AntDrawer, Button } from 'antd';
import cns from 'classnames';
import styles from './index.less';

export default forwardRef(
  ({ title, children, visible, width = 640, className, hasBtns = true, onSave, ...rest }, ref) => {
    const [isVisible, setVisible] = useState(visible);

    useEffect(() => {
      setVisible(visible);
    }, [visible]);

    const hide = () => {
      setVisible(false);
    };
    const show = () => {
      setVisible(true);
    };

    useImperativeHandle(ref, () => ({ show, hide }));

    const handleSubmit = () => {
      onSave && onSave();
    };

    return (
      <AntDrawer
        width={width}
        className={cns(styles.drawer, className, 'za-drawer')}
        destroyOnClose
        visible={isVisible}
        onClose={hide}
        {...rest}
      >
        <div className="za__drawer_content">
          <div className="ant-drawer-header">
            <div className="ant-drawer-title">{title}</div>
          </div>
          {children}
          {hasBtns && (
            <div>
              <Button style={{ marginRight: '20px' }} type="primary" onClick={handleSubmit}>
                保存
              </Button>
              <Button onClick={hide}>取消</Button>
            </div>
          )}
        </div>
      </AntDrawer>
    );
  },
);
