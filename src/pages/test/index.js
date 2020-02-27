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
import { Table } from '../../components/Table';
const Bmemo = React.memo(B);

const Test = () => {
  const [state, setstate] = useState({ a: '测试' });

  let [anum, setA] = useState(1);

  const handleClick = () => {
    setstate({
      ...state,
      num: Math.random(),
    });
  };

  const handleClick1 = () => {};
  const handleChange = () => {
    setA(Math.random());
  };
  return (
    <div>
      <div>{anum}</div>
      <button onClick={handleClick}>click</button>
      <button onClick={handleClick1}>click</button>
      <C></C>

      <button onClick={handleChange}>click</button>

      <br />

      <Table
        rowKey={() => Math.random + "'"}
        tag={[anum]}
        columns={columns}
        requestData={(p, formData) => {
          console.log('fff====>', p, formData);
          return getData({ ...p, ...formData }).then(res => {
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

export default Test;
