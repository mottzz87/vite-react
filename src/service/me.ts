/*
 * @Author: Vane
 * @Date: 2021-07-09 11:28:05
 * @LastEditTime: 2021-07-09 11:29:58
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \vite-react\src\service\me.ts
 */
import request from '@/utils/request';

export async function queryMe(): Promise<any> {
  return request('/api/me');
}
