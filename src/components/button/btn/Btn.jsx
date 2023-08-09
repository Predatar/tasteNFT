import React from 'react';

import styles from './Btn.module.scss';

const Btn = ({text, onClick}) => {
  return <div className={styles.btn} onClick={onClick}>{text}</div>;
};

export default Btn;
