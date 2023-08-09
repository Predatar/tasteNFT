import React, { useState, useEffect } from 'react';
import Btn from '../../../components/button/btn/Btn';

import styles from './index.module.scss';

import miniLogo from '../../../img/miniLogo.svg';

const InfoModal = props => {
  const [time, setTime] = useState('');
  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();
  const [second, setSecond] = useState();

  useEffect(() => {
    setInterval(() => {
      updateTimer();
    }, 1000);
  }, []);

  const updateTimer = () => {
    let dateText = '';
    if (new Date().getDate() == 31) {
      let day = 1;
      dateText = `2023-08-0${++day}T12:00:00`;
    } else if (new Date().getDate() + 1 > 9) {
      dateText = `2023-08-${new Date().getDate() + 1}T12:00:00`;
    } else {
      dateText = `2023-08-0${new Date().getDate() + 1}T12:00:00`;
    }
    const endDate = new Date(dateText);
    const now = new Date().getTime();
    const timeRemaining = endDate - now;

    if (timeRemaining <= 0) {
      // Время истекло
      setTime("Time's up!");
    } else {
      // Вычисляем оставшееся время
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
      setHour(hours);
      setMinute(minutes);
      setSecond(seconds);
    }
  };

  return (
    <div className={styles.info}>
      <div className={styles.bid}>
        <div className={styles.bidTitle}>Current Bid:</div>
        <div className={styles.bidPrice}>
          <img src={miniLogo} alt="miniLogo" />
          <div className={styles.countFirst}>1,5M</div>
          <div className={styles.countSecond}>(1308.54$)</div>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.time}>
        <div className={styles.timeTitle}>Auction ending in:</div>
        <div className={styles.timeTime}>{!time ? <Timer hour={hour} minute={minute} second={second} /> : time}</div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.btn} onClick={props.onClick}>
        <Btn text={'Place a bid'} />
      </div>
    </div>
  );
};

const Timer = ({ hour, minute, second }) => {
  return (
    <div className={styles.timeTime}>
      {hour}
      <span> h</span> {minute}
      <span> m</span> {second}
      <span> s</span>
    </div>
  );
};

export default InfoModal;
