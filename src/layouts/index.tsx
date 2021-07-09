/*
 * @Author: Vane
 * @Date: 2021-07-09 09:50:16
 * @LastEditTime: 2021-07-09 16:00:24
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \vite-react\src\layouts\index.tsx
 */

/**
 * Ant Design Pro v4 use `@ant-design/pro-layout` to handle Layout.
 *
 * @see You can view component api by: https://github.com/ant-design/ant-design-pro-layout
 */
import React, { useState } from 'react';
import type { BasicLayoutProps as ProLayoutProps } from '@ant-design/pro-layout';
import ProLayout, { PageContainer, SettingDrawer } from '@ant-design/pro-layout';
// import history from '@/utils/history';
import { useHistory, Link, Route } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';
//  import { history, Link, useLocation } from '@vitjs/runtime';

import RightContent from './containers/GlobalHeader/RightContent';
import GlobalFooter from './containers/GlobalFooter';
import defaultSettings from '#/config/defaultSettings';
import defaultProps from './__defaultProps';

const loginPath = '/login';
const content = '1234';

export type BasicLayoutProps = {
  route: ProLayoutProps['route'];
} & ProLayoutProps;

const BasicLayout: React.FC<BasicLayoutProps> = props => {
  //  const location = useLocation();
  const history = useHistory();
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({ fixSiderbar: true });
  const [pathname, setPathname] = useState('/welcome');
  return (
    <div id="test-pro-layout">
      <ProLayout
        logo="https://github.com/vitjs/vit/raw/master/icons/logo.svg"
        {...props}
        {...defaultProps}
        onPageChange={() => {
          console.log(333333);
          //  // 如果没有登录，重定向到 login
          //  if (localStorage.getItem('status') !== 'ok' && history.location.pathname !== loginPath) {
          //    history.push(loginPath);
          //  }
        }}
        onMenuHeaderClick={() => console.log(123)}
        menuItemRender={(menuItemProps, defaultDom) => {
          console.log(2222, menuItemProps, defaultDom);
          if (menuItemProps.isUrl || !menuItemProps.path || history.location.pathname === menuItemProps.path) {
            return defaultDom;
          }
          setPathname(menuItemProps.path || '/welcome');
          return <Link to={menuItemProps.path}>{defaultDom}</Link>;
        }}
        rightContentRender={() => <RightContent />}
        breadcrumbRender={(routers = []) => {
          console.log(555, routers);
          return [
            {
              path: '/',
              breadcrumbName: (<HomeOutlined />) as any
            },
            ...routers
          ];
        }}
        // itemRender={(route, params, routes, paths) => {
        //   console.log(1111, routes, route);
        //   const first = routes.indexOf(route) === 0;
        //   return first ? <Link to={paths.join('/')}>{route.breadcrumbName}</Link> : <span>{route.breadcrumbName}</span>;
        // }}
        footerRender={() => <GlobalFooter />}
        {...defaultSettings}
        {...settings}
      >
        <PageContainer
          content={content}
          tabList={[
            {
              tab: '基本信息',
              key: 'base'
            },
            {
              tab: '详细信息',
              key: 'info'
            }
          ]}
        >
          <div
            style={{
              height: '120vh'
            }}
          >
            水电费地方
          </div>
        </PageContainer>
      </ProLayout>
      <SettingDrawer
        pathname={pathname}
        getContainer={() => document.getElementById('test-pro-layout')}
        settings={settings}
        onSettingChange={changeSetting => {
          setSetting(changeSetting);
        }}
        disableUrlParams
      />
    </div>
  );
};

export default BasicLayout;
