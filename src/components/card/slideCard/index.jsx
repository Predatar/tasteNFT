import React from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';

import userIMg from '../../../img/user/user9.png';

const SlideCard = () => {
  return (
    <div className={styles.slideCard}>
      <div className={styles.slideCardImg}>
        <img src={userIMg} alt="user" />
      </div>
      <div className={styles.slideCardName}>User Name</div>
      <Link to={'/creatorPage'} className={styles.slideCardTag}>@username</Link>
      <div className={styles.slideCardInfo}>24 sales on 32ETH</div>
    </div>
  );
};

export default SlideCard;
