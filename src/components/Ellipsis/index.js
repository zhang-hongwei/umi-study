import React, { useState, useRef } from 'react';
import { Tooltip } from 'antd';

const Ellipsis = ({
  children,
  title,
  placement = 'right',
  style,
  limit = 400,
  cla = '',
}) => {
  const ref = useRef();
  const [visible, setvisible] = useState(false);
  const handleVisibleChange = (visible) => {
    if (ref.current.clientWidth < ref.current.scrollWidth) {
      setvisible(visible);
    }
  };

  return (
    <Tooltip
      placement={placement}
      visible={visible}
      onVisibleChange={handleVisibleChange}
      title={title}
    >
      <div
        ref={ref}
        className={cla}
        style={{
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          cursor: 'pointer',
          width: `${limit}px`,
          ...style,
        }}
      >
        {children}
      </div>
    </Tooltip>
  );
};
export default Ellipsis;
