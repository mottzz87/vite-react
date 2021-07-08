/*
 * @Author: Vane
 * @Date: 2021-07-05 11:38:33
 * @LastEditTime: 2021-07-09 03:13:11
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \vite-react\src\layouts\components\Aside\index.tsx
 */
import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import { History } from 'history';
import { RouteItem } from '@/routes/routeItems';
import { useHistory } from 'react-router-dom';
import Icon from '@/components/Icon';
const { Item, SubMenu } = Menu;
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
export interface UserProps {
  updateModalVisible: boolean;
}
export interface MenuProps {
  collapsed: boolean;
  routeItems: Array<RouteItem>;
  history?: History;
}

const SiderBar: React.FC<MenuProps> = ({ collapsed, routeItems }) => {
  const history = useHistory();

  // const toggle = () => {
  //   setCollapsed(!collapsed);
  // };

  const renderIcon = (route: RouteItem) =>
    typeof route.meta.icon === 'function' ? route.meta?.icon() : <Icon type={route.meta.icon || 'icon-tuichu'} />;

  const renderSubMenu = (route: RouteItem) => (
    <SubMenu key={route.path} title={route.meta.name} icon={renderIcon(route)}>
      {renderMenuItem(route?.routes)}
    </SubMenu>
  );

  const renderMenuItem = (routes: Array<RouteItem> = []) =>
    routes?.map(route => {
      if (route.routes && route.routes.length) return renderSubMenu(route);
      return (
        <Item key={route.path} title={route.meta.name} icon={renderIcon(route)}>
          {route.meta.name}
        </Item>
      );
    });
  const handleClickMenu = (menu: { key: string }) => {
    history.push(menu.key as string);
  };
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo">
        <img src="/src/assets/favicon.svg" alt="" />
      </div>
      <Menu
        mode="inline"
        theme="dark"
        // selectedKeys={selectedKeys}
        inlineCollapsed={collapsed}
        // defaultOpenKeys={defaultOpenKeys}
        onClick={handleClickMenu}
      >
        {renderMenuItem(routeItems)}
      </Menu>
    </Sider>
  );
};
export default SiderBar;
