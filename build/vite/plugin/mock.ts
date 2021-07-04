/*
 * @Author: Vane
 * @Date: 2021-06-07 03:08:44
 * @LastEditTime: 2021-06-07 22:27:19
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \vue-admin\build\vite\plugin\mock.ts
 */
/**
 * Mock plugin for development and production.
 * https://github.com/anncwb/vite-plugin-mock
 */
import { viteMockServe } from 'vite-plugin-mock';

export function configMockPlugin(isBuild: boolean) {
	return viteMockServe({
		ignore: /^\_/,
		mockPath: 'mock',
		localEnabled: !isBuild,
		prodEnabled: isBuild,
		// watchFiles：true,
		injectCode: `
      import { setupProdMockServer } from '../mock/_createProductionServer';

      setupProdMockServer();
      `,
	});
}
