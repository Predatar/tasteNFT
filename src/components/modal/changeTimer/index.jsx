import React from 'react';
import Cleave from 'cleave.js/react';
import Btn from '../../button/btn/Btn';

import styles from './index.module.scss';

const ChangeTime = ({ active, closeModal }) => {
  return (
    <div className={styles.modal + ' ' + (active ? styles.modalActive : '')}>
      <div className={styles.close} onClick={closeModal}>
        <span className="icon-close"></span>
      </div>
      <div className={styles.title}>Changing ending time</div>
      <div className={styles.subtitle}>Selling will end</div>
      <div className={styles.wrapper}>
        <Cleave
          options={{ date: true, delimiter: '.', datePattern: ['d', 'm', 'Y'] }}
          className={styles.date}
          placeholder="00.00.0000"
        />
        <Cleave options={{ time: true, timePattern: ['h', 'm'] }} className={styles.time} placeholder="00:00" />
        <div className={styles.timer}>05h 02m 41s</div>
        <div className={styles.delete}>
          <span className="icon-close"></span>
          delete file
        </div>
      </div>
      <div className={styles.btn}>
        <Btn text={'Change'} />
      </div>
    </div>
  );
};

export default ChangeTime;
