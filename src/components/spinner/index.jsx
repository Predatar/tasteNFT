import React from 'react';

import styles from './index.module.scss';

const Spinner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.spinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
