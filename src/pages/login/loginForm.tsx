import React, { useEffect } from 'react';
import { InputItem, Button, WingBlank, WhiteSpace } from 'antd-mobile';

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = props => {
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <WingBlank size="lg">
      <WhiteSpace size="lg" />
      <InputItem type="text" placeholder="请输入账号" clear>
        账号
      </InputItem>
      <InputItem
        type="text"
        placeholder="请输入密码"
        clear
        autoComplete="new-password"
      >
        密码
      </InputItem>
      <WhiteSpace size="lg" />
      <Button type="primary">登录</Button>
    </WingBlank>
  );
};

export default LoginForm;
