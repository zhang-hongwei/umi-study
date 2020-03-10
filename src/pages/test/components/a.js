import React, { useContext } from 'react';
import MyContext from '../../../context';
const A = props => {
  console.log('a==props===>', props);

  const handleClick = () => {
    props.info.has();
  };
  return (
    <div>
      A<button onClick={handleClick}>click</button>
    </div>
  );
};

export default A;
