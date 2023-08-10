import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';

import miniLogo from '../../../img/miniLogo.svg';

const ProfileCard = props => {
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
    } else if (new Date().getDate() + 1 > 9) {
      dateText = `2023-08-${new Date().getDate() + 1}T12:00:00`;
    }else {
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
    <div className={styles.artWork}>
      <State state={props.state} />
      <Menu state={props.state} onClick={props.setActive} />
      <Link to={`/artWorkPage`} className={styles.artWorkImg}>
        <img src={props.artWork} alt="artWork" />
      </Link>
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
  );
};

const State = ({ state }) => {
  const returnState = () => {
    switch (state) {
      case 'Approved':
        return <div className={`${styles.state} ${styles.approved}`}>{state}</div>;
      case 'On moderation':
        return <div className={`${styles.state} ${styles.moderation}`}>{state}</div>;
      case 'Declined':
        return <div className={`${styles.state} ${styles.declined}`}>{state}</div>;
      default:
        break;
    }
  };

  return returnState();
};

const Menu = ({ state, onClick }) => {
  const handleClick = e => {
    if (e.target.classList.contains(styles.menuActive)) {
      e.target.classList.remove(styles.menuActive);
    } else {
      e.target.classList.add(styles.menuActive);
    }
  };

  const returnMenu = () => {
    switch (state) {
      case 'Approved':
        return (
          <>
            <div className={styles.menu} onClick={handleClick}>
              <span className="icon-menu-vertical"></span>
            </div>
            <div className={styles.delete} style={{ '--top': '66px' }}>
              <span className="icon-delete-bin"></span>
            </div>
          </>
        );
      case 'On moderation':
        return (
          <>
            <div className={styles.menu} onClick={handleClick}>
              <span className="icon-menu-vertical"></span>
            </div>
            <div className={styles.time} style={{ '--top': '66px' }} onClick={onClick}>
              <span className="icon-time"></span>
            </div>
          </>
        );
      case 'Declined':
        return (
          <>
            <div className={styles.menu} onClick={handleClick}>
              <span className="icon-menu-vertical"></span>
            </div>
            <div className={styles.time} style={{ '--top': '66px' }} onClick={onClick}>
              <span className="icon-time"></span>
            </div>
            <div className={styles.edit} style={{ '--top': '110px' }}>
              <span className="icon-edit"></span>
            </div>
            <div className={styles.delete} style={{ '--top': '154px' }}>
              <span className="icon-delete-bin"></span>
            </div>
          </>
        );
      default:
        break;
    }
  };

  return returnMenu();
};

export default ProfileCard;
