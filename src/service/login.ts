/*
 * @Author: Vane
 * @Date: 2021-07-09 11:27:54
 * @LastEditTime: 2021-07-09 11:30:11
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \vite-react\src\service\login.ts
 */
// ref: https://github.com/ant-design/ant-design-pro/blob/master/src/services/login.ts

import request from '@/utils/request';

export type LoginParamsType = {
  userName: string;
  password: string;
  mobile: string;
  captcha: string;
};

export async function fakeAccountLogin(params: LoginParamsType) {
  return request('/api/login/account', {
    method: 'POST',
    data: params
  });
}

export async function getFakeCaptcha(mobile: string) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}
