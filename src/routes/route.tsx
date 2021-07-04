/*
 * @Author: Vane
 * @Date: 2021-07-05 00:51:49
 * @LastEditTime: 2021-07-05 01:16:29
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \vite-react\src\routes\route.tsx
 */
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory } from 'react-router-dom';
import CacheRoute, {
  CacheSwitch,
  dropByCacheKey,
  clearCache,
  refreshByCacheKey,
  getCachingKeys
} from 'react-router-cache-route';
import { isEmpty } from '@/utils';
import routeItems from '@/routes';
import { getItem } from '@/utils/localStorage';
import { ACCOUNT_INFO, LOGIN_PATH } from '~/config/constance';
import { getFirstRoute } from '@/utils/common';
import Login from '@/pages/Login';
import Layout from '@/layouts/index';

const aliveControl = {
  dropByCacheKey,
  clearCache,
  refreshByCacheKey,
  getCachingKeys
};

export default function App(): JSX.Element {
  const history = useHistory();
  const [userData, setUserData] = useState<UserInterface | null>(null);
  useEffect(() => {
    if (history?.location?.pathname !== LOGIN_PATH) {
      if (isEmpty(getItem(ACCOUNT_INFO))) history?.push(LOGIN_PATH);
      setUserData(getItem(ACCOUNT_INFO));
    }
  }, []);
  const handleClickDrop = () => {
    // Tabs.clearTabsCache();
    // removeUserData();
  };
  const renderRoutes = () => {
    const routes: Array<React.ReactNode> = [];
    const routeMap = (arr: Array<RouteItem>) => {
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
  const homePath = getFirstRoute(routeItems).path;
  const redirect = isEmpty(getItem(ACCOUNT_INFO)) ? LOGIN_PATH : homePath;
  console.log(111, redirect);
  return (
    <Router>
      <CacheSwitch>
        <Route exact path="/">
          <Redirect to={redirect} />
        </Route>
        <Route exact path={LOGIN_PATH} component={Login} />
        <Route>
          <Layout />
        </Route>
      </CacheSwitch>
    </Router>
  );
}
