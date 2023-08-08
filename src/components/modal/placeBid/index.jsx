import React, { useState } from 'react';

import Cleave from 'cleave.js/react';

import Btn from '../../button/btn/Btn';

import styles from './index.module.scss';

const PlaceBid = ({ state, onClick }) => {
  const [cost, setCost] = useState(0);

  const handleInput = ({ target }) => {
    setCost((target.value * 0.000130854).toFixed(2));
  };

  return (
    <div className={styles.modal + ' ' + (state ? styles.modalActive : '')}>
      <div className={styles.close} onClick={onClick}>
        <span className="icon-close"></span>
      </div>
      <div className={styles.title}>Place a bid</div>
      <div className={styles.text}>Min.sum</div>
      <div className={styles.wrapper}>
        <div className={styles.inputWrapper}>
          <Cleave options={{ numeral: true, delimiter: '' }} className={styles.input} onInput={handleInput} />
          <div className={styles.info}>TASTE</div>
        </div>
        <div className={styles.cost}>({cost}$)</div>
      </div>
      <div className={styles.btn}>
        <Btn text={'Place'}/>
      </div>
    </div>
  );
};

export default PlaceBid;
