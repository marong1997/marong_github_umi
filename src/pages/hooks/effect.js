import React, { useLayoutEffect, useState, useEffect } from 'react';
import './index.less';

const EffectDiff = () => {
  const [name, set_name] = useState('square');

  // useEffect(() => {
  //   set_name('margin');
  // }, []);

  useLayoutEffect(() => {
    set_name('margin');
  }, []);

  return (
    <div className="bg">
      <div className={name}></div>
    </div>
  );
};

export default EffectDiff;
