/*
 * @Author: Vane
 * @Date: 2021-07-05 00:51:49
 * @LastEditTime: 2021-07-09 02:58:26
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \vite-react\src\routes\route.tsx
 */
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Switch, Route, Link, Redirect, useHistory } from 'react-router-dom';
import CacheRoute, {
  CacheSwitch,
  dropByCacheKey,
  clearCache,
  refreshByCacheKey,
  getCachingKeys
} from 'react-router-cache-route';
import { isEmpty } from '@/utils';
import routeItems from '@/routes';
import { Local } from '@/utils/storage';
import { ACCOUNT_INFO, LOGIN_PATH } from '~/config/constance';
import { getFirstRoute } from '@/utils/common';
import Login from '@/pages/Login';
import Page401 from '@/pages/error/401';
import Page404 from '@/pages/error/404';
import Layout from '@/layouts/index';
import Index from '@/pages/Index';
import About from '@/pages/About';

// const aliveControl = {
//   dropByCacheKey,
//   clearCache,
//   refreshByCacheKey,
//   getCachingKeys
// };

// export default function App(): JSX.Element {
//   const history = useHistory();
//   const [userData, setUserData] = useState<UserInterface | null>(null);
//   useEffect(() => {
//     // if (history?.location?.pathname !== LOGIN_PATH) {
//     //   if (isEmpty(Local.get(ACCOUNT_INFO))) history?.push(LOGIN_PATH);
//     //   setUserData(Local.get(ACCOUNT_INFO));
//     // }
//   }, []);

//   return (
//     <Router>
//       <CacheSwitch>
//         <Route exact path={LOGIN_PATH} component={Login} />
//         {/* <Route exact path={'/401'} component={Page401} />
//         <Route exact path={'*'} component={Page404} /> */}
//         <Route path="/">
//           <Layout />
//         </Route>
//       </CacheSwitch>
//     </Router>
//   );
// }

export const RouterView = (): JSX.Element => (
  <Router>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route exact path="/about" component={About} />
      <Route exact path="/401" component={Page401} />
      <Route exact path="/404" component={Page404} />
    </Switch>
  </Router>
);
const renderRoutes = () => {
  const routes: Array<React.ReactNode> = [];
  const routeMap = arr => {
    arr.forEach(route => {
      if (!route.meta.hidden) {
        routes.push(
          <CacheRoute
            when={() => !!route.meta.isCache}
            cacheKey={route.path}
            key={route.path}
            exact={route.exact}
            path={route.path}
            component={route.component}
          />
        );
      }
      if (route.routes && route.routes.length) routeMap(route.routes);
    });
  };
  routeMap(routeItems);
  return routes;
};
export function App(): JSX.Element {
  return (
    <Router>
      <CacheSwitch>
        <Route exact path={LOGIN_PATH} component={Login} />
        <Route exact path="/404" component={Page404} />
        <Route path="/">
          <Layout>123</Layout>
        </Route>
      </CacheSwitch>
    </Router>
  );
}
