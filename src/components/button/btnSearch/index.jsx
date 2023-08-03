import React from 'react';

import styles from './index.module.scss';

const BtnSearch = ({ text }) => {
  return <div className={styles.btn}><span>{text}</span></div>;
};

export default BtnSearch;
