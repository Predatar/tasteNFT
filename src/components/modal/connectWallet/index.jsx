import React, { useEffect, useState } from 'react';
import MetaMaskOnboarding from '@metamask/onboarding';
import Btn from '../../button/btn/Btn';

import styles from './index.module.scss';

import MetaMask from '../../../img/metamask.png';
import loader from '../../../img/loading.svg';

const ConnectWallet = ({ state, onClick }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState('');

  const [isMetaMask, setMetaMask] = useState(false);

  useEffect(() => {
    setMetaMask(window.ethereum && window.ethereum.isMetaMask);
  }, []);

  const installMetaMask = () => {
    setLoading(true);
    const onboarding = new MetaMaskOnboarding();
    onboarding.startOnboarding();
    setLoading(false);
  };

  const handleClick = async () => {
    setLoading(true);
    try {
      const account = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setUser(account);
      console.log(account);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className={styles.modal + ' ' + (state ? styles.modalActive : '')}>
      <div className={styles.close} onClick={onClick}>
        <span className="icon-close"></span>
      </div>
      <div className={styles.title}>Connecting wallet</div>
      {user ? (
        `Connected ${user}`
      ) : loading ? (
        <div className={styles.loading}>
          <div className={styles.loadingImg}>
            <img src={MetaMask} alt="metamask logo" className={styles.logo} />
            <img className={styles.loader} src={loader} />
          </div>
          <div className={styles.loadingText}>
            <span>I</span>
            <span>n</span>
            <span>i</span>
            <span>t</span>
            <span>i</span>
            <span>a</span>
            <span>l</span>
            <span>i</span>
            <span>z</span>
            <span>i</span>
            <span>n</span>
            <span>g</span>
          </div>
        </div>
      ) : (
        <>
          <div className={styles.wrapper}>
            <div className={styles.videoWrapper}>
              <div className={styles.number}>1.</div>
              <div className={styles.video}>
                <div className={styles.play}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="12" viewBox="0 0 9 12" fill="none">
                    <path d="M9 6L4.64275e-07 11.1962L9.18537e-07 0.803847L9 6Z" fill="white" />
                  </svg>
                </div>
              </div>
              <div className={styles.descr}>Описание что нужно сделать</div>
            </div>
            <div className={styles.videoWrapper}>
              <div className={styles.number}>2.</div>
              <div className={styles.video}>
                <div className={styles.play}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="12" viewBox="0 0 9 12" fill="none">
                    <path d="M9 6L4.64275e-07 11.1962L9.18537e-07 0.803847L9 6Z" fill="white" />
                  </svg>
                </div>
              </div>
              <div className={styles.descr}>Описание что нужно сделать</div>
            </div>
            <div className={styles.videoWrapper}>
              <div className={styles.number}>3.</div>
              <div className={styles.video}>
                <div className={styles.play}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="12" viewBox="0 0 9 12" fill="none">
                    <path d="M9 6L4.64275e-07 11.1962L9.18537e-07 0.803847L9 6Z" fill="white" />
                  </svg>
                </div>
              </div>
              <div className={styles.descr}>Описание что нужно сделать</div>
            </div>
          </div>
          <div className={styles.btn}>
            {isMetaMask ? (
              <Btn text={'Connect wallet'} onClick={handleClick} />
            ) : (
              <Btn text={'Install MetaMask'} onClick={installMetaMask} />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ConnectWallet;
