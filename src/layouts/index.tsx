/*
 * @Author: Vane
 * @Date: 2021-07-04 04:58:02
 * @LastEditTime: 2021-07-05 01:23:38
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \vite-react\src\layouts\index.tsx
 */
import React from 'react';
import { Layout, Menu } from 'antd';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '@/pages/Index';
import About from '@/pages/About';
import routes from '@/routes';
import styles from './index.less';

const { Header, Content, Footer } = Layout;

export default function App(): JSX.Element {
  return (
    <Layout className={styles.layout}>
      <Header>
        <div className={styles.logo} />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="/">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="/about">
            <Link to="/about">About</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content className={styles.content}>
        <Switch>
          {routes.map((route: any) => (
            <Route exact key={route.path} path={route.path} {...route} />
          ))}
        </Switch>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
}
