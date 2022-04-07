import React, { useEffect, useState } from 'react';
import './index.less';
import useUpdate, { proxy_data } from './useUpdate';
import Page2 from './page2';

const Show = () => {
  const [state, set_state] = useState(proxy_data);

  const handleClick = () => {
    const [data] = useUpdate({ ...state, hurt: state.hurt + 1 });
    set_state(data);
  };
  return (
    <div className="bg">
      当前伤害值为： {state?.hurt}
      <br />
      <button onClick={handleClick}>点击升级伤害值</button>
      <Page2 />
    </div>
  );
};

export default Show;
