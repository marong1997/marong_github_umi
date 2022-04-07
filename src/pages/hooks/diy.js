import React, { useEffect, useState } from 'react';
import './index.less';

const useReduce = (init) => {
  const [b, set_b] = useState(init || 0);
  useEffect(() => {
    set_b((b) => b - 1);
  }, [init]);
  return [b, set_b];
};

export default () => {
  const [a, set_a] = useState(100);
  const [b, set_b] = useReduce(a);

  return (
    <div className="bg">
      <div>
        <p>a: {a}</p>
        <div
          onClick={() => {
            set_a((a) => a + 1);
          }}
        >
          a+1
        </div>
      </div>
      <div>
        <p>b: {b}</p>
        <div
          onClick={() => {
            set_b((b) => b - 1);
          }}
        >
          b-1
        </div>
      </div>
    </div>
  );
};
