/*
 * @Author: Vane
 * @Date: 2021-07-04 17:11:57
 * @LastEditTime: 2021-07-05 17:52:48
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \vite-react\src\pages\Login\index.tsx
 */
import React, { FC, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import project from '~/package.json';
import style from './index.module.less';
import LoginImg from '@/assets/imgs/login/login.png';
import { Local } from '@/utils/storage';
import { ACCOUNT_INFO } from '~/config/constance';
import { getFirstRoute } from '@/utils/common';
import routeItems from '@/routes';

const layout = {
  // labelCol: { span: 6 },
  wrapperCol: { span: 24 }
};

interface LoginProps {}

const Login: FC<LoginProps> = () => {
  const history = useHistory();
  const onFinish = (values: any) => {
    console.log(values);
    const { username, password } = values;
    if (values.remember) {
      Local.set(ACCOUNT_INFO, { username });
    } else {
      Local.remove(ACCOUNT_INFO);
    }
    const homePath = getFirstRoute(routeItems).path;
    history.push(homePath);
  };

  const onFinishFailed = (errorInfo: unknown) => {
    console.log('Failed:', errorInfo);
  };
  const { username, password } = Local.get(ACCOUNT_INFO);
  return (
    <div className={style.login}>
      <div className={style.loginWrapper}>
        <div className={style.loginWrapperImg}>
          <img src={LoginImg} />
        </div>
        <div className={style.loginForm}>
          <p className={style.loginFormTitle}>
            {project.name}
            {/* <Icon type="iconweixiao" className={style.icon} /> */}
          </p>
          <p className={style.loginFormDesc}>欢迎使用～</p>
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              // label="用户名"
              name="username"
              initialValue={username}
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input
                size="large"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="请输入用户名"
              />
            </Form.Item>

            <Form.Item
              // label="密码"
              name="password"
              initialValue={password}
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password
                size="large"
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="请输入密码"
              />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>记住密码</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ span: 24 }}>
              <Button size="large" block type="primary" htmlType="submit">
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
