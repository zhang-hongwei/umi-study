import React, { Component, useContext, useState } from 'react';
import MyContext from '../../context';
import A from './components/a.js';
import B from './components/b.js';
import C from './components/c';
import axios from 'axios';
import { getData, getUserInfo } from './server';
import Mock from 'mockjs';
// import { Table } from '@/components/table';
import { columns } from './config';
import Table from '@/components/Table/components/table';

const Page = () => {
  const [state, setstate] = useState({ a: '测试' });

  let [anum, setA] = useState(1);

  const handleClick = () => {
    setstate({
      ...state,
      num: Math.random(),
    });
  };

  const handleClick1 = () => {
    setA((anum += 1));
  };
  const handleChange = () => {
    setA(Math.random());
  };
  return (
    <div>
      <button onClick={handleClick1}>点击刷新</button>
      <br />
      <Table
        deps={anum}
        columns={columns}
        requestData={p => {
          console.log('fff====>', p);
          return getData({ pageSize: 10 }).then(res => {
            const { list, total } = res.data;
            return {
              list: list,
              total: total,
            };
          });
        }}
      ></Table>
    </div>
  );
};

export default Page;
