// 生成列表数据
export const generateTableData = pageSize => {
  return {
    data: {
      total: 125,
      [`list|${pageSize}`]: [
        {
          id: '@guid',
          name: '@cname',
          'gender|1': ['male', 'female'],
          email: '@email',
          disabled: false,
        },
      ],
    },
    msg: '成功',
    success: true,
    code: 0,
  };
};
