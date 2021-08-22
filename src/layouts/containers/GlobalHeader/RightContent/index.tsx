/*
 * @Author: Vane
 * @Date: 2021-07-09 11:07:49
 * @LastEditTime: 2021-07-13 20:35:56
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \vite-react\src\layouts\containers\GlobalHeader\RightContent\index.tsx
 */
import React from 'react';
import { Space } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
// import Avatar from './AvatarDropdown';
import styles from './index.module.less';

export type SiderTheme = 'light' | 'dark';

const GlobalHeaderRight: React.FC = () => {
  const theme = 'dark';
  const layout = 'mix';

  const className = styles.right;

  // if (theme === 'dark' && layout === 'top') {
  //   className = `${styles.right}  ${styles.dark}`;
  // }

  return (
    <Space className={className}>
      <span className={styles.action}>
        <QuestionCircleOutlined />
      </span>
      {/* <Avatar menu /> */}
    </Space>
  );
};

export default GlobalHeaderRight;
