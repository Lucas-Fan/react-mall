import React from 'react';
import styles from './index.less';
import { connect, Redirect } from 'umi';
import {
  ConnectState,
  ConnectProps,
  UserModelState,
} from '@/models/connect.d.ts';
import LoginForm from './LoginForm';
import { loginParamsType } from '@/services/login';

interface LoginProps extends ConnectProps {
  user: UserModelState;
}

const Login: React.FC<LoginProps> = ({ user, location, dispatch }) => {
  const { userId } = user.currentUser;
  const isLogin = !!userId;

  if (isLogin) {
    const { from = '/' } = location.state || {};
    return <Redirect to={from} />;
  }

  const handleSubmit = (value: loginParamsType) => {
    dispatch({ type: 'user/login', payload: value });
  };

  return (
    <div className={styles.main}>
      <div className={styles.logo}></div>
      <LoginForm handleSubmit={handleSubmit}></LoginForm>
    </div>
  );
};

export default connect(({ user }: ConnectState) => ({ user }))(Login);
