/*
 * @Author: Vane
 * @Date: 2021-06-07 03:08:44
 * @LastEditTime: 2021-06-07 22:07:40
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \vue-admin\build\vite\plugin\hmr.ts
 */
import type { Plugin } from 'vite';

/**
 * TODO
 * Temporarily solve the Vite circular dependency problem, and wait for a better solution to fix it later. I don't know what problems this writing will bring.
 * @returns
 */

export function configHmrPlugin(): Plugin {
	return {
		name: 'singleHMR',
		handleHotUpdate({ modules = [], file }) {
			if (file.match(/xml$/)) return [];

			modules.forEach(
				(m: { url: string; importedModules: Set<unknown>; importers: Set<unknown>; acceptedHmrDeps: Set<unknown> }) => {
					if (!m.url.match(/\.(css|less)/)) {
						m.importedModules = new Set();
						m.importers = new Set();
					}
				}
			);
			return modules;
		},
	};
}
