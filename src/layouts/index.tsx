/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/*
 * @Author: Vane
 * @Date: 2021-07-04 04:58:02
 * @LastEditTime: 2021-07-09 03:14:43
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \vite-react\src\layouts\index.tsx
 */
import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined
} from '@ant-design/icons';
import RouteItems from '@/routes/routeItems';
import Footer from '@/layouts/footer';
const { Header, Content } = Layout;
import Aside from '@/layouts/components/Aside';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '@/pages/Index';
import About from '@/pages/About';
import routes from '@/routes';
// import Footer from './footer';
import './index.less';
export interface aliveControlInterface {
  dropByCacheKey: (cacheKey: string) => void;
  refreshByCacheKey: (cacheKey: string) => void;
  getCachingKeys: () => Array<string>;
  clearCache: () => void;
}
// interface LayoutProps {
//   logo?: any;
//   aliveControl: aliveControlInterface;
//   routeItems: Array<RouteItem>;
//   history: History;
//   username: string;
//   onClickDrop: () => void;
// }
const App = (props: {
  children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined;
}) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    console.log(collapsed);

    setCollapsed(!collapsed);
  };
  return (
    <Layout className="layout">
      <Aside collapsed={collapsed} routeItems={RouteItems} />
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggle
          })}
          <Breadcrumb style={{ margin: '16px 0', display: 'inline' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280
          }}
        >
          {props.children}
        </Content>
        <Footer>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};
export default App;
