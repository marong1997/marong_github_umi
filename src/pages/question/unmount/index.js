import React, { useState, useEffect, useContext } from 'react';
import './index.less';
const ContextValue = React.createContext({});

// 函数式组件内声明组件 触发卸载问题

const Son = ({ children }) => {
  const { context_value } = useContext(ContextValue);
  useEffect(() => {
    return () => {
      console.log('son组件卸载了！！！！！');
    };
  }, []);

  return context_value % 2 === 0 ? (
    children
  ) : (
    <div className="square">{children}</div>
  );
};

// const Parent = ({ children }) => {
//   const { context_value } = useContext(ContextValue);
//   useEffect(() => {
//     return () => {
//       console.log('--------------------');
//     };
//   }, []);
//   return (
//     <div className="bg">
//       当前的contetx——value值为： {context_value}
//       <br />
//       {children}
//     </div>
//   );
// };

const Others = () => {
  useEffect(() => {
    return () => console.log('others也卸载了');
  }, []);
  return '不开心';
};

export default () => {
  const [context_value, set_context_value] = useState(0);

  const Parent = ({ children }) => {
    const { context_value } = useContext(ContextValue);

    useEffect(() => {
      return () => {
        console.log('--------------------');
      };
    }, []);

    return (
      <div className="bg">
        当前的contetx——value值为： {context_value}
        <br />
        {children}
      </div>
    );
  };

  // const Son = ({ children }) => {
  //   const { context_value } = useContext(ContextValue);
  //   useEffect(() => {
  //     return () => {
  //       console.log('son组件卸载了！！！！！');
  //     };
  //   }, []);

  //   return context_value % 2 === 0 ? (
  //     children
  //   ) : (
  //     <div className="square">{children}</div>
  //   );
  // };

  return (
    <ContextValue.Provider
      value={{
        dispatch: (value) => set_context_value(value),
        context_value,
      }}
    >
      <Parent>
        <Others />
        <Son>
          <button onClick={() => set_context_value(context_value + 1)}>
            已经点了我{context_value}次
          </button>
        </Son>
      </Parent>
    </ContextValue.Provider>
  );
};
