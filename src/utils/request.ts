/*
 * @Author: Vane
 * @Date: 2021-07-04 00:26:43
 * @LastEditTime: 2021-07-04 04:11:01
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \vite-react\src\utils\request.ts
 */
import axios from 'axios';
import { message, Spin } from 'antd';
import { stringify } from 'qs';
import config from '~/config';

// // 是否返回原始响应数据
// let isShowOriginResponse = false;
// // 是否弹窗形式显示错误提示
// let isShowErrorModal = false;
// // 是否不显示任何错误信息
// let isSkipError = false;
// // 是否显示加载提示
// let isShowLoading = false;

const { MODE } = import.meta.env; // 环境变量
export const envConf = config[MODE]; // 获取当前环境变量

interface IRequest {
	url: string;
	params?: object;
	data?: object;
	header?: object;
	options?: object;
	method?: 'POST' | 'OPTIONS' | 'GET' | 'HEAD' | 'PUT' | 'DELETE' | undefined;
}

interface IResponse {
	count: number;
	errorMsg: string;
	classify: string;
	data: any;
	detail?: any;
	img?: object;
}

export const request = ({
	url,
	data,
	params,
	header,
	options,
	method = 'POST',
}: IRequest): Promise<IResponse> => {
	return new Promise((resolve, reject) => {
		url = params
			? `${envConf.apiBaseUrl + url}/?${stringify(params)}`
			: envConf.apiBaseUrl + url;
		const {
			showOriginData = false, // 显示服务器返回的原始数据，不做任何处理 默认值false
			showErrorModal = false, // 以弹窗形式显示服务器返回的错误信息 默认值false
			skipError = false, // 静默处理，不显示任何错误信息 默认值false
			showLoading = false, // 是否显示loading浮层
		} = options || {};
		// showLoading && Toast.loading('加载中...', 0);
		axios(url, {
			data,
			headers: {
				'X-Requested-With': 'XMLHttpRequest',
				'Content-Type': 'application/json',
				...header,
			},
			method,
		})
			.then((res) => {
				resolve(res.data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};
