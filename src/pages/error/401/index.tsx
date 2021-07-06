/*
 * @Author: Vane
 * @Date: 2021-07-05 14:50:00
 * @LastEditTime: 2021-07-05 15:53:09
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \vite-react\src\pages\error\401\index.tsx
 */
import React from 'react';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
import styles from './index.module.less';
import classNames from 'classnames';

function Page401(): JSX.Element {
  const history = useHistory();

  const onSetAuth = () => {
    // clearSession();
    history.push('/login');
  };

  return (
    <div className={styles.error}>
      <div className={styles.errorFlex}>
        <div className={styles.left}>
          <div className={styles.leftItem}>
            <div className={classNames(styles.leftItemAnimation, styles.leftItemNum)}>401</div>
            <div className={classNames(styles.leftItemAnimation, styles.leftItemTitle)}>您未被授权，没有操作权限~</div>
            <div className={classNames(styles.leftItemAnimation, styles.leftItemMsg)}>请联系管理员 +10086</div>
            <div className={classNames(styles.leftItemAnimation, styles.leftItemBtn)}>
              <Button type="primary" size="large" shape="round" onClick={onSetAuth}>
                重新授权
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <img src="https://gitee.com/vaned/admin-cdn/raw/master/v3/error/401.png" />
        </div>
      </div>
    </div>
  );
}
export default Page401;
