/*
 * @Author: Vane
 * @Date: 2021-07-04 00:39:54
 * @LastEditTime: 2021-07-04 17:27:48
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \vite-react\src\utils\common.ts
 */
import { message } from 'antd';
import { JSEncrypt } from 'jsencrypt';

/**
 * 更新state
 * @param type reducers中的方法名
 */
export const createAction =
  (type: string) =>
  (payload = {}): Record<string, unknown> => ({ type, payload });

/**
 * 获取数据类型
 * @param value
 */
export const getType = (value: unknown): string => Object.prototype.toString.call(value).slice(8, -1);

/**
 * 处理请求参数，移除值为空、null, undefined的参数
 * @param data
 */
export const handleNullData = (data: Record<string, unknown> | []): Record<string, unknown> => {
  return JSON.parse(
    JSON.stringify(data, (k, v) => {
      if (v !== '' && v !== null && v !== undefined && v !== 'undefined') {
        return v;
      }
    })
  );
};

/**
 * 将树转化为数组
 * @param tree
 */
export const treeToArray = (tree: unknown[]): unknown[] => {
  const array: unknown[] = [];
  const getChildren = (node: unknown[]) => {
    node.forEach((item: any) => {
      if (item.children) {
        getChildren(item.children);
        array.push({ ...item, children: undefined });
      } else {
        array.push(item);
      }
    });
  };
  getChildren(tree);
  return array;
};

/**
 * 处理服务器响应数据
 * @param response 响应数据
 * @param showMessage 显示提示
 */
export const handleResponse = (
  response: { code: string; errCode: string; msg: string },
  showMessage = true
): boolean => {
  if (!response) return false;
  const { code = '0', msg = '服务器出错' } = response;
  if (code === '1') {
    showMessage && message.success(msg, 1);
    return true;
  }
  return false;
};

/**
 * rsa加密
 * @param value
 */
export const encryptData = (value: string): string | false => {
  // 使用公钥加密，default_key_size可为512，1024，2048等
  const encrypt = new JSEncrypt({ default_key_size: '2048' });
  const RSA_KEY = '12345';
  encrypt.setPublicKey(RSA_KEY);
  return encrypt.encrypt(value);
};

/**
 * rsa加密pmi（选卡后带加密的pmiNo跳外部医院）
 * @param value
 */
export const encryptPmiNo = (value: string): string | false => {
  // 使用公钥加密，default_key_size可为512，1024，2048等
  const encrypt = new JSEncrypt({ default_key_size: '2048' });
  const PKL =
    'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDSsSSB/WxYGX/JEHganjrD2dP7f4p3De9gDuf3monVGcviA0vn0D+0/pOXIFstcUb1eQtXRvuMbjfB2EBqKYtpL0VKkAzQc9iFS+dxA6FyyrcZrgmbKj9DySAkv79hxcuKIHZF+HjKJbmcXs7jLS69cWKxB0QqmbaViwWT7kOD4QIDAQAB';
  encrypt.setPublicKey(PKL);
  return encrypt.encrypt(value);
};

/**
 * 身份证号脱敏
 * @param value:string 身份证号
 */
export const formatIdCard = (value: string | undefined): string => {
  let idCard = '';
  if (value && value?.length >= 15) {
    idCard = value.replace(/^(.{4})(?:\d+)(.{4})$/, '$1******$2');
  }
  return idCard;
};

/**
 * 动态导入js库
 * @param jsUrl
 * @param name
 */
export const importJs = (jsUrl: string, name: string): Promise<unknown> =>
  new Promise(resolve => {
    const dom = document.createElement('script');
    dom.src = jsUrl;
    dom.type = 'text/javascript';
    dom.onload = () => {
      resolve(window[name]);
    };
    document.head.appendChild(dom);
  });

/**
 * 获取第一个非空路由
 * @param routes
 * @returns {*}
 */
export const getFirstRoute = (routes: Array<RouteItem>): RouteItem | any => {
  for (let i = 0; i < routes.length; i++) {
    const route = routes[i];
    if (!route.routes) {
      return route;
    }
    if (route.routes && route.routes.length) {
      return getFirstRoute(route.routes);
    }
  }
};
