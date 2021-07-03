/*
 * @Author: Vane
 * @Date: 2021-07-03 22:03:15
 * @LastEditTime: 2021-07-04 05:24:04
 * @LastEditors: Vane
 * @Description: 
 * @FilePath: \vite-react\src\index.tsx
 */
import React, { useState, StrictMode } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import ReactDOM from 'react-dom'
import routes from '@/routes'
import '@/styles/index.less'
import "antd/dist/antd.less";

ReactDOM.render(
  <StrictMode>
    <Router>
      <Switch>
        {
          routes.map((route: any) => (
            <Route exact key={route.path} path={route.path} {...route} />
          ))
        }
      </Switch>
    </Router>
  </StrictMode>,
  document.getElementById('root')
)
