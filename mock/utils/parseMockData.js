

// 生成列表数据
export const generateTableData = pageSize => {
  return {
    total: 155,
    [`list|${pageSize}`]: [
      {
        id: '@guid',
        name: '@cname',
        'gender|1': ['male', 'female'],
        email: '@email',
        disabled: false,
      },
    ],
  };
};
