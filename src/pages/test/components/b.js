import React, { useContext } from 'react';
import MyContext from '../../../context';
const B = props => {
  console.log('b===>', props);
  return <div>B 页面 </div>;
};

export default B;
