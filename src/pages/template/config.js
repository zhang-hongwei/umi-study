export const columns = [
  {
    title: 'name',
    dataIndex: 'name',
  },
  {
    title: 'email',
    dataIndex: 'email',
  },
  {
    title: 'id',
    dataIndex: 'id',
    sorter: true,
  },
  {
    title: 'gender',
    dataIndex: 'gender',
    filters: [
      { text: 'male', value: 'male' },
      { text: 'female', value: 'female' },
    ],
  },
];
