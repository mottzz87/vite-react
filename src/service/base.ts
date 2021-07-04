/*
 * @Author: Vane
 * @Date: 2021-07-04 03:37:18
 * @LastEditTime: 2021-07-04 16:38:53
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \vite-react\src\service\base.ts
 */

import { request, IResponse } from '@/utils/request';

const prefix = '/api';

export const getAllInfoGzip = (): Promise<IResponse> => {
  return request({
    url: `${prefix}/apis/random`,
    method: 'GET'
  });
};
