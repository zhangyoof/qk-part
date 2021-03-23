import { defineConfig } from 'umi';
const routes = require('./src/routes')

export default defineConfig({
    mountElementId: `app-${process.env.npm_package_name}`,
    nodeModulesTransform: {
        type: 'none',
    },
    //   routes: [
    //     { path: '/', component: '@/layouts/index' },
    //   ],
    routes: routes,
    fastRefresh: {},
    // qiankun:{
    //     // master:{}
    //     slave: {},
    // }
});
