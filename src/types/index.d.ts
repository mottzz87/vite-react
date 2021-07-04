/*
 * @Author: Vane
 * @Date: 2021-07-04 23:43:40
 * @LastEditTime: 2021-07-04 23:45:02
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \vite-react\src\types\index.d.ts
 */

declare type LabelValueOptions = {
  label: string;
  value: unknown;
}[];

declare interface Fn<T = unknown, R = T> {
  (...arg: T[]): R;
}

declare interface PromiseFn<T = unknown, R = T> {
  (...arg: T[]): Promise<R>;
}
