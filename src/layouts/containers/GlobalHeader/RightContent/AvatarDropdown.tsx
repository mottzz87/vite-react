/* eslint-disable react/prop-types */
/*
 * @Author: Vane
 * @Date: 2021-07-09 11:07:49
 * @LastEditTime: 2021-07-13 20:23:11
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \vite-react\src\layouts\containers\GlobalHeader\RightContent\AvatarDropdown.tsx
 */
import React from 'react';
import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Menu } from 'antd';
import { useConcent } from 'concent';
// import { history } from '@vitjs/runtime';

import HeaderDropdown from '@/layouts/components/HeaderDropdown';
import styles from './index.module.less';

export type GlobalHeaderRightProps = {
  menu?: boolean;
};

const AvatarDropdown: React.FC<GlobalHeaderRightProps> = ({ menu }) => {
  const { dispatch } = useConcent('login');
  const { state } = useConcent('me');

  const onMenuClick = (event: {
    key: React.Key;
    keyPath: React.Key[];
    item: React.ReactInstance;
    domEvent: React.MouseEvent<HTMLElement>;
  }) => {
    const { key } = event;

    if (key === 'logout') {
      dispatch?.('logout');
      return;
    }

    // history.push(`/account/${key}`);
  };

  const menuHeaderDropdown = (
    <Menu className={styles.menu} selectedKeys={[]} onClick={onMenuClick}>
      {menu && (
        <Menu.Item key="center">
          <UserOutlined />
          个人中心
        </Menu.Item>
      )}
      {menu && (
        <Menu.Item key="settings">
          <SettingOutlined />
          个人设置
        </Menu.Item>
      )}
      {menu && <Menu.Divider />}
      <Menu.Item key="logout">
        <LogoutOutlined />
        退出登录
      </Menu.Item>
    </Menu>
  );
  return (
    <HeaderDropdown overlay={menuHeaderDropdown}>
      <span className={`${styles.action} ${styles.account}`}>
        <Avatar size="small" className={styles.avatar} src={state.avatar} alt="avatar" />
        <span className={`${styles.name} anticon`}>{state.name}</span>
      </span>
    </HeaderDropdown>
  );
};

export default AvatarDropdown;
