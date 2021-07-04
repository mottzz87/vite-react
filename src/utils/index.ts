/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/*
 * @Author: Vane
 * @Date: 2021-07-05 00:43:02
 * @LastEditTime: 2021-07-05 00:44:47
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \vite-react\src\utils\index.ts
 */

/**
 * @description 判空
 * @param obj
 */
export const isEmpty = (obj: any) => {
  let isEmpty = false;
  if (!obj) {
    isEmpty = true;
  } else if (Array.isArray(obj) && obj.length === 0) {
    isEmpty = true;
  } else if (obj.constructor === Object && Object.keys(obj).length === 0) {
    isEmpty = true;
  }
  return isEmpty;
};
