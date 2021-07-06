/*
 * @Author: Vane
 * @Date: 2021-07-05 14:49:08
 * @LastEditTime: 2021-07-05 15:53:22
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \vite-react\src\pages\error\404\index.tsx
 */
import React from 'react';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
import styles from './index.module.less';
import classNames from 'classnames';

function Page404(): JSX.Element {
  const history = useHistory();

  const onGoHome = () => {
    // clearSession();
    history.push('/');
  };
  return (
    <div className={styles.error}>
      <div className={styles.errorFlex}>
        <div className={styles.left}>
          <div className={styles.leftItem}>
            <div className={classNames(styles.leftItemAnimation, styles.leftItemNum)}>404</div>
            <div className={classNames(styles.leftItemAnimation, styles.leftItemTitle)}>
              地址输入错误，请重新输入地址~
            </div>
            <div className={classNames(styles.leftItemAnimation, styles.leftItemMsg)}>
              您可以先检查网址，然后重新输入或给我们反馈问题。
            </div>
            <div className={classNames(styles.leftItemAnimation, styles.leftItemBtn)}>
              <Button type="primary" size="large" shape="round" onClick={onGoHome}>
                返回首页
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <img src="https://gitee.com/vaned/admin-cdn/raw/master/v3/error/404.png" />
        </div>
      </div>
    </div>
  );
}
export default Page404;
