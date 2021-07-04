/*
 * @Author: Vane
 * @Date: 2021-07-04 23:26:34
 * @LastEditTime: 2021-07-04 23:27:24
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \vite-react\build\vite\optimizer.ts
 */
// TODO
import type { GetManualChunk } from 'rollup';

//
const vendorLibs: { match: string[]; output: string }[] = [
  // {
  //   match: ['xlsx'],
  //   output: 'xlsx',
  // },
];

export const configManualChunk: GetManualChunk = (id: string) => {
  if (/[\\/]node_modules[\\/]/.test(id)) {
    const matchItem = vendorLibs.find(item => {
      const reg = new RegExp(`[\\/]node_modules[\\/]_?(${item.match.join('|')})(.*)`, 'ig');
      return reg.test(id);
    });
    return matchItem ? matchItem.output : null;
  }
};
