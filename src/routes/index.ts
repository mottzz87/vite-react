/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/*
 * @Author: Vane
 * @Date: 2021-07-03 22:43:24
 * @LastEditTime: 2021-07-05 01:24:16
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \vite-react\src\routes\index.ts
 */

import Index from '@/pages/Index';
import About from '@/pages/About';
import Login from '@/pages/Login';

const routes = [
  { path: '/index', component: Index },
  { path: '/about', component: About }
  // { path: '/login', component: Login }
];

// const routes = [
//   {
//     path: '/',
//     exact: false,
//     component: () => import('@/layouts/index'),
//     redirect: '/index',
//     meta: {
//       name: '首页',
//       isKeepAlive: true,
//       icon: '123'
//     },
//     children: [
//       {
//         path: '/index',
//         component: () => import('@/pages/Index')
//       },
//       {
//         path: '/about',
//         component: () => import('@/pages/About')
//       }
//     ]
//   }
// ];
export default routes;
