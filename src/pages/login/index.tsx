import React from 'react';
import styles from './index.less';
import { connect, Redirect } from 'umi';
import {
  ConnectState,
  ConnectProps,
  UserModelState,
} from '@/models/connect.d.ts';
import LoginForm from './loginForm';

interface LoginProps extends ConnectProps {
  user: UserModelState;
}

const Login: React.FC<LoginProps> = ({ user, location }) => {
  const { userId } = user.currentUser;
  const isLogin = !!userId;

  if (isLogin) {
    const { from = '/' } = location.state || {};
    return <Redirect to={from} />;
  }

  return (
    <div className={styles.main}>
      <div className={styles.logo}></div>
      <LoginForm></LoginForm>
    </div>
  );
};

export default connect(({ user }: ConnectState) => ({ user }))(Login);
