import React, { useState, useEffect } from 'react';

import styles from './index.module.scss';

import userImg from '../../../img/user/user9.png';

const FollowerModal = ({ state, onClick }) => {
  useEffect(() => {
    if (state) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [state]);

  const swithTabs = e => {
    const parentNode = e.target.parentNode;
    parentNode.childNodes.forEach(elem => {
      elem.classList.contains(styles.tabActive) ? elem.classList.remove(styles.tabActive) : null;
    });
    e.target.classList.add(styles.tabActive);
  };

  return (
    <div className={styles.followerModal + ' ' + (state ? styles.followerModalActive : '')}>
      <div className={styles.close} onClick={onClick}>
        <span className="icon-close"></span>
      </div>
      <div className={styles.tabs} onClick={swithTabs}>
        <div className={`${styles.tab} ${styles.tabActive}`}>Following</div>
        <div className={styles.tab}>Followers</div>
      </div>
      <div className={styles.wrapper}>
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
      </div>
    </div>
  );
};

const User = () => {
  const [state, setState] = useState(false);

  const handleClick = () => {
    setState(!state);
  };

  return (
    <div className={styles.user}>
      <div className={styles.userWrapper}>
        <div className={styles.img}>
          <img src={userImg} alt="user" />
        </div>
        <div className={styles.textWrapper}>
          <div className={styles.userName}>User Name</div>
          <div className={styles.userTag}>@username</div>
        </div>
      </div>
      <div className={state ? styles.btnActive : styles.btn} onClick={handleClick}>
        {state ? <span>Unfollow</span> : 'Follow'}
      </div>
    </div>
  );
};

export default FollowerModal;
