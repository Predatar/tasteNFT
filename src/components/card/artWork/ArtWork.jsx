import React, { useEffect, useState } from 'react';

import styles from './ArtWork.module.scss';

import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import miniLogo from '../../../img/miniLogo.svg';

const ArtWork = props => {
  const [time, setTime] = useState('');

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
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      setTime(`${hours}h ${minutes}m ${seconds}s`);
    }
  };

  return (
    <Link to={`/artWorkPage`}>
      <div className={styles.artWork}>
        <UserInfo userImg={props.userImg} />
        <div className={styles.artWorkImg}>
          <img src={props.artWork} alt="artWork" />
        </div>
        <div className={styles.artWorkWrapper}>
          <div className={styles.artWorkName}>WFH - art name</div>
          <div className={styles.artWorkContainer}>
            <div className={styles.artWorkDescr}>Sold for:</div>
            <div className={styles.artWorkSold}>
              <img src={miniLogo} alt="miniLogo" />
              1,5M
            </div>
          </div>
          <div className={styles.artWorkContainer}>
            <div className={styles.artWorkDescr}>Ending in:</div>
            <div className={styles.artWorkTimer}>{time}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const UserInfo = props => {
  return (
    <div className={styles.userInfo}>
      <div className={styles.userInfoImg}>
        <img src={props.userImg} alt="user" />
      </div>
      <div className={styles.userInfoWrapper}>
        <div className={styles.userInfoName}>User Name</div>
        <a href="#" className={styles.userInfoTag}>
          @username
        </a>
      </div>
    </div>
  );
};

export default ArtWork;
