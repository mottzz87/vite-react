/*
 * @Author: Vane
 * @Date: 2021-07-03 22:43:24
 * @LastEditTime: 2021-07-04 05:22:04
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \vite-react\src\routes\index.ts
 */

import Index from '@/pages/Index';
import About from '@/pages/About';

const routes = [
	{ path: '/', component: Index },
	{ path: '/about', component: About },
];

export default routes;
