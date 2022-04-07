import React from 'react';
import useUpdate from './useUpdate';

const Page = () => {
  const [data] = useUpdate();
  return <>page2页面的伤害值： {data?.hurt}</>;
};

export default Page;

export const a = 1;

const initData = {};

const eventMap = new Map();

const proxyObj = new Proxy(initData, {
  set(target, key, value, receiver) {
    const res = Reflect.set(target, key, value, receiver);

    eventMap.forEach((fn) => fn(target));

    return res;
  },
});

eventMap.set('one', (obj) => {
  console.log('one', obj);
});

eventMap.set('two', (obj) => {
  console.log('two', obj);
});

proxyObj.a = 2;

eventMap.delete('two');

proxyObj.a = 1;
