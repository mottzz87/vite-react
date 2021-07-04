/*
 * @Author: Vane
 * @Date: 2021-07-05 00:55:52
 * @LastEditTime: 2021-07-05 00:56:40
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \vite-react\src\types\route.d.ts
 */

type ComponentType = React.ComponentType<unknown> & { name: string };

export interface RouteItem {
  path: string;
  exact: boolean;
  meta: {
    tabFixed?: boolean;
    isCache?: boolean;
    hidden?: boolean;
    name: string;
    icon: JSX.Element | string;
  };
  component: ComponentType;
  routes?: Array<RouteItem>;
}
