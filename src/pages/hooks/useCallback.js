import React, { useState, useCallback, useMemo } from 'react';
import './index.less';

const Son = React.memo(({ getNum }) => {
  console.log('hhhhhhhhhhhhhh');
  return <>{getNum()}</>;
});

// const Son = ({ getNum }) => {
//   console.log('hhhhhhhhhhhhhh');
//   return <>{getNum()}</>;
// };

const UseCallback = () => {
  const [a, set_a] = useState(1);
  const [b, set_b] = useState(1);
  const [c, set_c] = useState(1);
  const z = 1;

  const getNum = () => {
    console.log('999999', c);
    return a + b + c;
  };

  // const getNum = useCallback(() => {
  //   console.log('2222');
  //   return a + b + c;
  // }, [a, b]);

  const getNumMeomo = useMemo(() => {
    return getNum();
  }, [a, b]);

  return (
    <div className="bg">
      <div>callback : a+b ={getNum()}</div>
      <div>memo: a+b+c = {getNumMeomo}</div>
      <div onClick={() => set_c((c) => c + 1)}> change c == {c}</div>
      {/* <div onClick={() => {}}>z:::::::{z}</div> */}
      <Son getNum={getNum} />
    </div>
  );
};

export default UseCallback;
