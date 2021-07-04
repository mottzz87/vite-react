/*
 * @Author: Vane
 * @Date: 2021-07-04 14:42:02
 * @LastEditTime: 2021-07-04 17:15:56
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \vite-react\src\types\typing.d.ts
 */

declare module '*.svg' {
  const content: { [key: string]: string };
  export default content;
}

declare module '*.less' {
  const resource: { [key: string]: string };
  export default resource;
}

declare module '*.png' {
  const content: { [key: string]: string };
  export default content;
}

declare module '*.md' {
  const content: { [key: string]: string };
  export default content;
}

interface Window {
  less: unknown;
}
