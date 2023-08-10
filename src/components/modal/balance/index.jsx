import React, { useEffect, useState } from 'react';
import Cleave from 'cleave.js/react';
import Btn from '../../button/btn/Btn';

import styles from './index.module.scss';

import bnb from '../../../img/bnb.svg';
import miniLogo from '../../../img/miniLogo.svg';

const Balance = ({ state, onClick }) => {
  useEffect(() => {
    if (state) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [state]);

  const [balance, setBalance] = useState('');
  const [cost, setCost] = useState(0);

  const handleInput = ({ target }) => {
    setCost((target.value * 0.000130854).toFixed(2));
  };

  return (
    <div className={styles.modal + ' ' + (state ? styles.modalActive : '')}>
      {balance == ''
        ? BalanceWrapper()
        : balance == 'withdraw'
        ? Withdraw()
        : balance == 'swap'
        ? SwapTaste()
        : balance == 'deposit'
        ? Deposit()
        : ''}
    </div>
  );

  function BalanceWrapper() {
    return (
      <>
        <div className={styles.title}>Balance settings</div>
        <div className={styles.close} onClick={onClick}>
          <span className="icon-close"></span>
        </div>
        <div className={styles.BalanceWrapper}>
          <div className={styles.container}>
            <div className={styles.taste}>
              <img src={miniLogo} alt="miniLogo" />
              1.5M
            </div>
            <div className={styles.tasteBtn} onClick={() => setBalance('withdraw')}>
              Withdraw
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.bnb}>
              <img src={bnb} alt="bnb" />
              1.5M
            </div>
            <div className={styles.bnbWrapper}>
              <div className={styles.bnbBtn} onClick={() => setBalance('swap')}>
                Swap to TASTE
              </div>
              <div className={styles.bnbBtn} onClick={() => setBalance('deposit')}>
                Deposit
              </div>
              <div className={styles.bnbBtn} onClick={() => setBalance('withdraw')}>
                Withdraw
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  function Withdraw() {
    return (
      <>
        <div
          className={styles.close}
          onClick={() => {
            onClick();
            setBalance('');
          }}
        >
          <span className="icon-close"></span>
        </div>
        <div className={styles.back} onClick={() => setBalance('')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21 10.8947V13.1053H7.31579L13.5789 19.4211L12 21L3 12L12 3L13.5789 4.57895L7.31579 10.8947H21Z"
              fill="white"
            />
          </svg>
        </div>
        <div className={styles.title}>Withdraw</div>
        <div className={styles.text}>You will get</div>
        <div className={styles.wrapper}>
          <div className={styles.inputWrapper}>
            <Cleave options={{ numeral: true, delimiter: '' }} className={styles.input} onInput={handleInput} />
            <div className={styles.info}>BNB</div>
          </div>
          <div className={styles.withDraw}>
            <img src={miniLogo} alt="miniLogo" />
            1,5M
          </div>
          <div className={styles.cost}>({cost}$)</div>
        </div>
        <div className={styles.btn}>
          <Btn text={'Confirm'} />
        </div>
      </>
    );
  }
  function Deposit() {
    return (
      <>
        <div
          className={styles.close}
          onClick={() => {
            onClick();
            setBalance('');
          }}
        >
          <span className="icon-close"></span>
        </div>
        <div className={styles.back} onClick={() => setBalance('')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21 10.8947V13.1053H7.31579L13.5789 19.4211L12 21L3 12L12 3L13.5789 4.57895L7.31579 10.8947H21Z"
              fill="white"
            />
          </svg>
        </div>
        <div className={styles.title}>Deposit to BNB</div>
        <div className={styles.text}>You will get</div>
        <div className={styles.wrapper}>
          <div className={styles.inputWrapper}>
            <Cleave options={{ numeral: true, delimiter: '' }} className={styles.input} onInput={handleInput} />
            <div className={styles.info}>BNB</div>
          </div>
          <div className={styles.withDraw}>
            <img src={miniLogo} alt="miniLogo" />
            1,5M
          </div>
          <div className={styles.cost}>({cost}$)</div>
        </div>
        <div className={styles.btn}>
          <Btn text={'Deposit'} />
        </div>
      </>
    );
  }

  function SwapTaste() {
    return (
      <>
        <div
          className={styles.close}
          onClick={() => {
            onClick();
            setBalance('');
          }}
        >
          <span className="icon-close"></span>
        </div>
        <div className={styles.back} onClick={() => setBalance('')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21 10.8947V13.1053H7.31579L13.5789 19.4211L12 21L3 12L12 3L13.5789 4.57895L7.31579 10.8947H21Z"
              fill="white"
            />
          </svg>
        </div>
        <div className={styles.title}>Swap to TASTE</div>
        <div className={styles.text}>You will get</div>
        <div className={styles.wrapper}>
          <div className={styles.inputWrapper}>
            <Cleave options={{ numeral: true, delimiter: '' }} className={styles.input} onInput={handleInput} />
            <div className={styles.info}>TASTE</div>
          </div>
          <div className={styles.cost}>({cost}$)</div>
        </div>
        <div className={styles.btn}>
          <Btn text={'Swap'} />
        </div>
      </>
    );
  }
};

export default Balance;
