import React, { useEffect } from 'react';
import styles from './index.less';
import { connect, UserModelState } from 'umi';
import { ConnectState, ConnectProps } from '@/models/connect';
import Header from './Header/index';
import MyList from './MyList';
import Logout from './Logout';

interface UserProps extends ConnectProps {
  user: UserModelState;
}

const User: React.FC<UserProps> = ({ dispatch, user }) => {
  useEffect(() => {
    dispatch({ type: 'user/queryDetail' });
  }, []);
  const { name, icon } = user.detail;
  const logout = () => {
    dispatch({ type: 'user/logout' });
  };
  console.log('name, icon :>> ', name, icon);
  return (
    <div>
      <Header name={name} icon={icon} />
      <MyList />
      <Logout logout={logout} />
    </div>
  );
};

export default connect(({ user }: ConnectState) => ({ user }))(User);
