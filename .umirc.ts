import { defineConfig } from 'umi';
import route_config from './src/config/routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: route_config,
  fastRefresh: {},
  layout: {},
});
