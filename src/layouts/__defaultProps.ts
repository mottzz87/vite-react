/*
 * @Author: Vane
 * @Date: 2021-07-09 10:11:47
 * @LastEditTime: 2021-07-09 14:52:57
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \vite-react\src\layouts\__defaultProps.ts
 */
import React from 'react';
import { SmileOutlined, CrownOutlined, TabletOutlined, AntDesignOutlined } from '@ant-design/icons';

export default {
  route: {
    path: '/',
    routes: [
      {
        path: '/welcome',
        name: '欢迎',
        icon: '123',
        component: './Welcome'
      },
      {
        path: '/admin',
        name: '管理页',
        icon: '123',
        access: 'canAdmin',
        component: './Admin',
        routes: [
          {
            path: '/admin/sub-page1',
            name: '一级页面',
            icon: '123',
            component: './Welcome'
          },
          {
            path: '/admin/sub-page2',
            name: '二级页面',
            icon: '123',
            component: './Welcome'
          },
          {
            path: '/admin/sub-page3',
            name: '三级页面',
            icon: '123',
            component: './Welcome'
          }
        ]
      },
      {
        name: '列表页',
        icon: '123',
        path: '/list',
        component: './ListTableList',
        routes: [
          {
            path: '/list/sub-page',
            name: '一级列表页面',
            icon: '123',
            routes: [
              {
                path: 'sub-sub-page1',
                name: '一一级列表页面',
                icon: '123',
                component: './Welcome'
              },
              {
                path: 'sub-sub-page2',
                name: '一二级列表页面',
                icon: '123',
                component: './Welcome'
              },
              {
                path: 'sub-sub-page3',
                name: '一三级列表页面',
                icon: '123',
                component: './Welcome'
              }
            ]
          },
          {
            path: '/list/sub-page2',
            name: '二级列表页面',
            icon: '123',
            component: './Welcome'
          },
          {
            path: '/list/sub-page3',
            name: '三级列表页面',
            icon: '123',
            component: './Welcome'
          }
        ]
      },
      {
        path: 'https://ant.design',
        name: 'Ant Design 官网外链',
        icon: '123'
      }
    ]
  },
  location: {
    pathname: '/'
  }
};
