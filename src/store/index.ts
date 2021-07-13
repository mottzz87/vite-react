/*
 * @Author: Vane
 * @Date: 2021-07-05 02:45:37
 * @LastEditTime: 2021-07-12 16:59:50
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \vite-react\src\store\index.ts
 */

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counter';

export default configureStore({
  reducer: {
    counter: counterReducer
  }
});
