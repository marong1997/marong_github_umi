export default [
  { name: '首页', path: '/', component: '@/pages/index' },
  {
    name: 'hooks',
    path: '/hooks',
    routes: [
      {
        name: 'ref',
        path: '/hooks/ref',
        component: '@/pages/hooks/ref',
      },
      {
        name: 'state',
        path: '/hooks/state',
        component: '@/pages/hooks/state',
      },
      {
        name: 'effect',
        path: '/hooks/effect',
        component: '@/pages/hooks/effect',
      },
      {
        name: 'useCallback',
        path: '/hooks/useCallback',
        component: '@/pages/hooks/useCallback',
      },
      {
        name: 'diy',
        path: '/hooks/diy',
        component: '@/pages/hooks/diy',
      },
    ],
  },
  {
    name: '问题',
    path: '/question/unmount/index',
    routes: [
      {
        name: '卸载问题',
        path: '/question/unmount/index',
        component: '@/pages/question/unmount',
      },
    ],
  },
  {
    name: '实验proxy+hooks',
    path: '/proxy/index',
    routes: [
      {
        name: 'proxy_page1',
        path: '/proxy/index',
        component: '@/pages/proxy/index',
      },
    ],
  },
];
