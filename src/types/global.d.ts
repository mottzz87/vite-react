/*
 * @Author: Vane
 * @Date: 2021-07-04 23:31:34
 * @LastEditTime: 2021-07-04 23:44:09
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \vite-react\src\types\global.d.ts
 */

declare type Nullable<T> = T extends null | undefined ? never : T;

declare type Recordable<T = unknown> = Record<string, T>;

declare type ReadonlyRecordable<T = unknown> = {
  readonly [key: string]: T;
};

declare type Indexable<T = unknown> = {
  [key: string]: T;
};

declare type TimeoutHandle = ReturnType<typeof setTimeout>;

declare type IntervalHandle = ReturnType<typeof setInterval>;

declare interface ChangeEvent extends Event {
  target: HTMLInputElement;
}

interface ImportMetaEnv extends ViteEnv {
  __: unknown;
}

declare interface ViteEnv {
  VITE_PORT: number;
  VITE_USE_MOCK: boolean;
  VITE_USE_PWA: boolean;
  VITE_PUBLIC_PATH: string;
  VITE_PROXY: [string, string][];
  VITE_GLOB_APP_TITLE: string;
  VITE_GLOB_APP_SHORT_NAME: string;
  VITE_USE_CDN: boolean;
  VITE_DROP_CONSOLE: boolean;
  VITE_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none';
  VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean;
  VITE_LEGACY: boolean;
  VITE_USE_IMAGEMIN: boolean;
  VITE_GENERATE_UI: string;
}
