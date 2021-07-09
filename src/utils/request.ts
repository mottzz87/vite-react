/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 * @Author: Vane
 * @Date: 2021-07-04 00:26:43
 * @LastEditTime: 2021-07-09 10:27:53
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \vite-react\src\utils\request.ts
 */
import axios from 'axios';
// import { message, Spin } from 'antd';
// import { stringify } from 'qs';
// import { useHistory } from 'react-router-dom';
import config from '#/config';
import { Session } from '@/utils/storage';
// import router from '@/routes/index';

// // 是否返回原始响应数据
// let isShowOriginResponse = false;
// // 是否弹窗形式显示错误提示
// let isShowErrorModal = false;
// // 是否不显示任何错误信息
// let isSkipError = false;
// // 是否显示加载提示
// let isShowLoading = false;

// const history = useHistory();

const { MODE } = import.meta.env; // 环境变量

export const envConf = config[MODE]; // 获取当前环境变量

interface IRequest {
  url: string;
  params?: Record<string, unknown>;
  data?: Record<string, unknown>;
  header?: Record<string, unknown>;
  options?: Record<string, unknown>;
  method?: 'POST' | 'OPTIONS' | 'GET' | 'HEAD' | 'PUT' | 'DELETE' | undefined;
}

export interface IResponse {
  count: number;
  errorMsg: string;
  classify: string;
  data: any;
  detail?: any;
  img?: Record<string, unknown>;
}

// url = params ? `${envConf.apiBaseUrl + url}/?${stringify(params)}` : envConf.apiBaseUrl + url;
// 配置新建一个 axios 实例
const request = axios.create({
  baseURL: envConf.apiBaseUrl,
  timeout: 50000,
  headers: { 'Content-Type': 'application/json' }
});

// 添加请求拦截器
request.interceptors.request.use(
  config => {
    // const {
    //   showOriginData = false, // 显示服务器返回的原始数据，不做任何处理 默认值false
    //   showErrorModal = false, // 以弹窗形式显示服务器返回的错误信息 默认值false
    //   skipError = false, // 静默处理，不显示任何错误信息 默认值false
    //   showLoading = false // 是否显示loading浮层
    // } = options || {};

    // 在发送请求之前做些什么 token
    if (Session.get('token')) {
      config.headers.common['Authorization'] = `${Session.get('token')}`;
    }
    return config;
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
request.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    const res = response.data;
    if (res?.code !== 0) {
      // `token` 过期或者账号已在别处登录
      if (res.code === 401 || res.code === 4001) {
        Session.clear(); // 清除浏览器全部临时缓存
        // history.push('/login'); // 去登录页面
        // resetRoute(); // 删除/重置路由
        console.error('你已被登出，请重新登录', '提示', {});
      }
      return Promise.reject(request.interceptors.response);
    } else {
      return response.data;
    }
  },
  error => {
    // 对响应错误做点什么
    if (error.message.indexOf('timeout') != -1) {
      console.error('网络超时');
    } else if (error.message == 'Network Error') {
      console.error('网络连接错误');
    } else {
      if (error.response.data) console.error(error.response.statusText);
      else console.error('接口路径找不到');
    }
    return Promise.reject(error);
  }
);

// 导出 axios 实例
export default request;

// export const request = ({ url, data, params, header, options, method = 'POST' }: IRequest): Promise<IResponse> => {
//   return new Promise((resolve, reject) => {
//     // eslint-disable-next-line no-param-reassign
//     url = params ? `${envConf.apiBaseUrl + url}/?${stringify(params)}` : envConf.apiBaseUrl + url;
//     const {
//       // showOriginData = false, // 显示服务器返回的原始数据，不做任何处理 默认值false
//       // showErrorModal = false, // 以弹窗形式显示服务器返回的错误信息 默认值false
//       // skipError = false, // 静默处理，不显示任何错误信息 默认值false
//       // showLoading = false // 是否显示loading浮层
//     } = options || {};
//     // showLoading && Toast.loading('加载中...', 0);
//     axios(url, {
//       data,
//       headers: {
//         'X-Requested-With': 'XMLHttpRequest',
//         'Content-Type': 'application/json',
//         ...header
//       },
//       method
//     })
//       .then(res => {
//         resolve(res.data);
//       })
//       .catch(error => {
//         reject(error);
//       });
//   });
// };
