import React from 'react';
import styles from './index.less';
import SearchInput from './SearchInput';
import Carousel from './Carousel';
import NavTable from './NavTable';

export default () => {
  return (
    <div className={styles.main}>
      <SearchInput />
      <Carousel />
      <NavTable />
    </div>
  );
};
