/*
 * @Author: Vane
 * @Date: 2021-07-03 22:03:15
 * @LastEditTime: 2021-07-05 02:44:54
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \vite-react\src\App.tsx
 */
import React, { StrictMode } from 'react';
import { ConfigProvider } from 'antd';
import ReactDOM from 'react-dom';
import RouterView from '@/routes/route';
import setIntroduction from '@/utils/setIconfont';
import '@/styles/index.less';
import 'antd/dist/antd.less';

ReactDOM.render(
  <StrictMode>
    <ConfigProvider componentSize="middle">
      <RouterView />
    </ConfigProvider>
  </StrictMode>,
  document.getElementById('root')
);
