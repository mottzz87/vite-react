/*
 * @Author: Vane
 * @Date: 2021-07-03 22:03:15
 * @LastEditTime: 2021-07-12 15:59:20
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \vite-react\src\App.tsx
 */
import React, { StrictMode } from 'react';
import { ConfigProvider } from 'antd';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from '@/routes/route';
import '@/concent';
import { HashRouter as Router } from 'react-router-dom';
import setIntroduction from '@/utils/setIconfont';
import '@/styles/index.less';
import 'antd/dist/antd.less';

ReactDOM.render(
  <StrictMode>
    <ConfigProvider componentSize="middle">
      <Provider store={store}>
        <App />
      </Provider>
    </ConfigProvider>
  </StrictMode>,
  document.getElementById('root')
);
