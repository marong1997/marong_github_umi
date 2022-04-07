import React, { useRef, useEffect, useState, createRef } from 'react';
import './index.less';

const Ref = () => {
  // 获取dom节点
  const dom = useRef();
  const [info, set_info] = useState();
  useEffect(() => {
    set_info(dom.current);
  }, []);

  return (
    <div className="bg">
      dom.clientWidth: {info?.clientWidth}
      <br />
      dom.clientHeight: {info?.clientHeight}
      <div ref={dom} className="square"></div>
    </div>
  );
};

const Son = ({ ref_var }) => {
  return (
    <button onClick={() => (ref_var.current = Math.random() * 100)}>
      change ref
    </button>
  );
};

// const Ref = () => {
//   const ref_var = useRef({});
//   // const [a, seta] = useState({})
//   // const ref_var = React.createRef();

//   // useEffect(() => {
//   //   setInterval(() => {
//   //     console.log(ref_var.current, 'ref_var');
//   //   }, 1000);
//   // }, []);

//   return (
//     <div className="bg">
//       <Son ref_var={ref_var} />
//     </div>
//   );
// };

export default Ref;
