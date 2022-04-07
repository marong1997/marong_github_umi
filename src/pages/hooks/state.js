import React, { useState, useEffect } from 'react';
import './index.less';

const State = ({ init } = {}) => {
  const [num, set_num] = useState(init || 0);

  useEffect(() => {
    console.log('useEffect监控到了num变化');
  }, [num]);
  console.log('重新render了');
  // debugger;

  return (
    <div className="bg">
      <div>
        当前的num: {num}
        <button onClick={() => set_num((num) => num + 1)}>num+1</button>
        <button onClick={() => set_num(num)}>num保持原样</button>
      </div>
    </div>
  );
};

// class State extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       num: 0,
//     };
//   }

//   render() {
//     const { num } = this.state;
//     console.log('render====console');
//     return (
//       <div className="bg">
//         <div>当前的num: {num}</div>
//         <button onClick={() => this.setState({ num: num + 1 })}>num+1</button>
//         <button onClick={() => this.setState({ num: num })}>num保持原样</button>
//       </div>
//     );
//   }
// }

export default State;
