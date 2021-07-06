/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/*
 * @Author: Vane
 * @Date: 2021-07-03 22:43:24
 * @LastEditTime: 2021-07-06 09:37:49
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \vite-react\src\routes\index.ts
 */

import NProgress from 'nprogress'; // 引入nprogress插件
import 'nprogress/nprogress.css'; // 这个nprogress样式必须引入
import Index from '@/pages/Index';
// import About from '@/pages/About';
import Login from '@/pages/Login';
import Page401 from '@/pages/error/401';

const routes = [
  { path: '/index', component: Index },
  // { path: '/about', component: About },
  { path: '/401', component: Page401 }
  // { path: '/login', component: Login }
];

// 动态路由
export const dynamicRoutes = [
  {
    path: '/',
    name: '/',
    component: () => import('@/layouts/index'),
    redirect: '/home',
    meta: {
      isKeepAlive: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/pages/About'),
        meta: {
          title: 'message.router.home',
          isLink: '',
          isHide: false,
          isKeepAlive: true,
          isAffix: true,
          isIframe: false,
          auth: ['admin', 'test'],
          icon: 'iconfont ant-icon-home'
        }
      }
      // {
      //   path: '/system',
      //   name: 'system',
      //   component: () => import('@/pages/About'),
      //   redirect: '/system/menu',
      //   meta: {
      //     title: 'message.router.system',
      //     isLink: '',
      //     isHide: false,
      //     isKeepAlive: true,
      //     isAffix: false,
      //     isIframe: false,
      //     auth: ['admin'],
      //     icon: 'iconfont ant-icon-setting'
      //   },
      //   subs: [
      //     {
      //       path: '/system/menu',
      //       name: 'systemMenu',
      //       component: () => import('@/pages/About'),
      //       meta: {
      //         title: 'message.router.systemMenu',
      //         isLink: '',
      //         isHide: false,
      //         isKeepAlive: true,
      //         isAffix: false,
      //         isIframe: false,
      //         auth: ['admin'],
      //         icon: 'iconfont ant-icon-menu'
      //       }
      //     }
      //   ]
      // }
    ]
  }
];

// 定义静态路由
const staticRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/Login'),
    meta: {
      title: '登陆'
    }
  },
  {
    path: '/404',
    name: 'notFound',
    component: () => import('@/pages/error/404'),
    meta: {
      title: '找不到此页面'
    }
  },
  {
    path: '/401',
    name: 'noPower',
    component: () => import('@/pages/error/401'),
    meta: {
      title: '没有权限'
    }
  }
];

// // 添加静态路由
// const router = createRouter({
//   history: createWebHashHistory(),
//   routes: staticRoutes
// });

// // 定义404界面
// const pathMatch = {
//   path: '/:path(.*)*',
//   redirect: '/404'
// };

// // 路由加载前
// router.beforeEach((to: unknown, from: unknown, next: () => void) => {
//   NProgress.start();
//   next();
// });

// // 路由加载后
// router.afterEach(() => {
//   NProgress.done();
// });

export default [...dynamicRoutes, ...staticRoutes];
