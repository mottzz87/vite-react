import type { Plugin } from 'vite';

import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import legacy from '@vitejs/plugin-legacy';

import { configPwaConfig } from './pwa';
import { configImageminPlugin } from './imagemin';
import { configSvgIconsPlugin } from './svgSprite';
import { configHmrPlugin } from './hmr';
import liveReload from 'vite-plugin-live-reload';
import { configMockPlugin } from './mock';

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
	const { VITE_USE_IMAGEMIN, VITE_USE_MOCK, VITE_LEGACY, VITE_BUILD_COMPRESS, VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE } =
		viteEnv;

	const vitePlugins: (Plugin | Plugin[])[] = [
		// have to
		vue(),
		// have to
		vueJsx(),
	];

	// TODO
	!isBuild && vitePlugins.push(configHmrPlugin());

	// @vitejs/plugin-legacy
	VITE_LEGACY && isBuild && vitePlugins.push(legacy());

	// vite-plugin-svg-icons
	vitePlugins.push(configSvgIconsPlugin(isBuild));

	vitePlugins.push(liveReload('*.vue', { alwaysReload: true }));

	// vite-plugin-mock
	VITE_USE_MOCK && vitePlugins.push(configMockPlugin(isBuild));

	// The following plugins only work in the production environment
	if (isBuild) {
		//vite-plugin-imagemin
		VITE_USE_IMAGEMIN && vitePlugins.push(configImageminPlugin());

		// vite-plugin-pwa
		vitePlugins.push(configPwaConfig(viteEnv));
	}

	return vitePlugins;
}
