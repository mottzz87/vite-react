/*
 * @Author: Vane
 * @Date: 2021-07-09 02:19:07
 * @LastEditTime: 2021-07-09 02:47:21
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \vite-react\src\routes\routeItems.ts
 */
/** @format */

import React from 'react';
import About from '@/pages/About';
import Home from '@/pages/Index';
type ComponentType = React.ComponentType<any> & { name: string };
interface RouteItem {
  path: string;
  exact: boolean;
  meta: {
    tabFixed?: boolean;
    isCache?: boolean;
    hidden?: boolean;
    name: string;
    icon: JSX.Element | string;
  };
  component: ComponentType;
  routes?: Array<RouteItem>;
}

const routeItems: Array<RouteItem> = [
  {
    path: '/home',
    exact: true,
    meta: {
      tabFixed: true,
      isCache: true,
      icon: 'iconuser',
      name: 'Index'
    },
    component: Home
  },
  {
    path: '/about',
    exact: true,
    meta: {
      tabFixed: true,
      isCache: true,
      icon: 'iconuser',
      name: 'About'
    },
    component: About
  }
];

export default routeItems;
