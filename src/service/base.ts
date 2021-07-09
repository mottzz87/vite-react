/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/*
 * @Author: Vane
 * @Date: 2021-07-04 03:37:18
 * @LastEditTime: 2021-07-09 11:53:08
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \vite-react\src\service\base.ts
 */

import request from '@/utils/request';

const prefix = '/api';

export const getAllInfoGzip = () => {
  return request({
    url: `${prefix}/apis/random`,
    method: 'GET'
  });
};

// 获取后端动态路由菜单(admin)
export function getMenuAdmin(params?: Record<string, unknown>) {
  return request({
    url: '/gitee/vaned/admin-cdn/raw/master/v3/menu/adminMenu.json',
    method: 'GET',
    params
  });
}

// 获取后端动态路由菜单(test)
export function getMenuTest(params?: Record<string, unknown>) {
  return request({
    url: '/gitee/vaned/admin-cdn/raw/master/v3/menu/testMenu.json',
    method: 'GET',
    params
  });
}
