import React from 'react';
import styles from './BtnHeader.module.scss';

const BtnHeader = props => {
  const { text } = props;
  return (
    <div className={styles.btn} onClick={props.onClick}>
      {text}
    </div>
  );
};

export default BtnHeader;
