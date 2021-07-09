/*
 * @Author: Vane
 * @Date: 2021-07-03 22:03:15
 * @LastEditTime: 2021-07-09 11:19:28
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \vite-react\vite.config.ts
 */
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';
import fs from 'fs';
import vitePluginImp from 'vite-plugin-imp';
import lessToJS from 'less-vars-to-js';
import config from './config';

const themeVariables = lessToJS(fs.readFileSync(path.resolve(__dirname, './src/styles/variables.less'), 'utf8'));

const env = process.argv[process.argv.length - 1];
const base = config[env];
export default defineConfig({
  base: base.cdn,
  server: {
    port: 8000,
    proxy: {
      '/api': {
        // 当遇到 /api 路径时，将其转换成 target 的值，这里我们为了测试，写了新蜂商城的请求地址
        target: 'http://47.99.134.126:28019/api/v1',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      },
      '/gitee': {
        target: 'https://gitee.com',
        ws: true,
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/gitee/, '')
      }
    }
  },
  plugins: [
    reactRefresh(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: name => `antd/es/${name}/style`
        }
      ]
    })
  ],
  css: {
    modules: {
      localsConvention: 'camelCaseOnly'
    },
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
        modifyVars: themeVariables
      }
    }
  },
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '#', replacement: path.resolve(__dirname, './') },
      { find: /^~/, replacement: '' }
    ]
  }
});
