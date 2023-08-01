import React from 'react';

import styles from './Btn.module.scss';

const Btn = props => {
  const { text } = props;

  return <div className={styles.btn}>{text}</div>;
};

export default Btn;
