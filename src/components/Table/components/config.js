export const handleSorter = sorter => {
  const { columnKey, order } = sorter;
  let o = order;

  if (order === 'ascend') {
    o = '1';
  }
  if (order === 'descend') {
    o = '2';
  }

  return {
    orderBy: o === undefined ? '' : o,
    orderField: columnKey === undefined ? '' : columnKey,
  };
};

export const formItemLayout = {
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
  layout: 'inline',
};
