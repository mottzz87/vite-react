/*
 * @Author: Vane
 * @Date: 2021-07-03 22:42:06
 * @LastEditTime: 2021-07-04 19:27:59
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \vite-react\src\pages\Index\index.tsx
 */

import React, { useEffect } from 'react';
import { Button } from 'antd';
import { request } from '@/utils/request';
import styles from './index.module.less';

export default function Index(): JSX.Element {
  useEffect(() => {
    request({ url: '/index-infos', method: 'GET' }).then(res => {
      console.log(res);
    });
  }, []);
  return (
    <div>
      <Button>Index</Button>
      <p className={styles.test}>qwweqweweq</p>
    </div>
  );
}
