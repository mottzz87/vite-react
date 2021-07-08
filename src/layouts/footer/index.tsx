/*
 * @Author: Vane
 * @Date: 2021-07-06 10:20:16
 * @LastEditTime: 2021-07-09 03:16:37
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \vite-react\src\layouts\footer\index.tsx
 */

import React, { useEffect, useState } from 'react';
import styles from './index.module.less';
import classNames from 'classnames';

const { layoutFooterWarp, layoutFooter } = styles;

const Footer = (): JSX.Element => {
  const [delayFooter, setDelayFooter] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setDelayFooter(true);
    }, 800);
  }, []);

  return (
    <>
      {delayFooter ? (
        <div className={classNames(layoutFooterWarp, 'mt15')}>
          <div className={layoutFooter}>
            <div>vite-react，Made by mottzz with ❤️</div>
            <div className="mt5">Copyright: XXX Technology 蓉ICP备467000号</div>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default Footer;
