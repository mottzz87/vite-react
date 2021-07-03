/*
 * @Author: Vane
 * @Date: 2021-07-04 00:20:37
 * @LastEditTime: 2021-07-04 00:20:45
 * @LastEditors: Vane
 * @Description: 
 * @FilePath: \vite-react\config\index.ts
 */

export default {
  development: {
    cdn: './',
    apiBaseUrl: '/api' // 开发环境接口请求，后用于 proxy 代理配置
  },
  beta: {
    cdn: '//s.xxx.com/vite-react-app/beta', // 测试环境 cdn 路径
    apiBaseUrl: '//www.beta.xxx.com/v1' // 测试环境接口地址
  },
  release: {
    cdn: '//s.xxx.com/vite-react-app/release', // 正式环境 cdn 路径
    apiBaseUrl: '//www.xxx.com/v1' // 正式环境接口地址
  }
}
