/*
 * @Author: Vane
 * @Date: 2021-07-04 03:37:18
 * @LastEditTime: 2021-07-04 03:38:03
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \vite-react\src\service\base.ts
 */

import { request } from '@/utils/request';

const prefix = '/api';

export const getAllInfoGzip = () => {
	return request({
		url: `${prefix}/apis/random`,
		method: 'GET',
	});
};
