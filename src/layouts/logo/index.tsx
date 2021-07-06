/*
 * @Author: Vane
 * @Date: 2021-07-06 10:20:33
 * @LastEditTime: 2021-07-06 14:30:15
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \vite-react\src\layouts\logo\index.tsx
 */
import React, { useEffect, useState } from 'react';
import styles from './index.module.less';
import { Local } from '@/utils/storage'
import classNames from 'classnames';

function Logo(): JSX.Element {
  const [showLogo, setShowLogo] = useState(false);
  useEffect(() => {
    console.log(styles)
  }, []);
  // logo 点击实现菜单展开/收起
  const onThemeConfigChange = () => {
    // if (store.state.themeConfig.themeConfig.layout === 'transverse') return false;
    // proxy.mittBus.emit('onMenuClick');
    // store.state.themeConfig.themeConfig.isCollapse = !store.state.themeConfig.themeConfig.isCollapse;
  };
  return (
    <>
      {showLogo ? (
          <div className="layout-logo" onClick={onThemeConfigChange}>
            <img src="https://gitee.com/vaned/admin-cdn/raw/master/v3/logo/logo-mini.svg" className="layout-logo-medium-img" />
            <span>{{ Local.get('themeConfig')?.globalTitle }}</span>
          </div>
          
      ) : (
        <div className="layout-logo-size" onClick={onThemeConfigChange}>
            <img src="https://gitee.com/vaned/admin-cdn/raw/master/v3/logo/logo-mini.svg" className="layout-logo-size-img" />
          </div>
      )}
    </>
  );
}
export default Logo;
