import React, { Component } from 'react';
import A from './a';

function Hoc() {
  const obj = {
    name: '123123',
    text: 'Hoc',
    has: function fn() {
      console.log(111111111111111);
    },
  };

  return () => <A info={obj}></A>;
}

export default Hoc();
