import React from 'react';

import styles from './index.module.scss';

import userImg from '../../img/user/user10.png';
import miniLogo from '../../img/miniLogo.svg';

const ActivityRow = () => {
  return (
    <div className={styles.row}>
      <div className={styles.container}>
        <div className={styles.img}>
          <img src={userImg} alt="userImg" />
        </div>
        <div className={styles.info}>
          <div className={styles.text}>Bid placed by 0x6FC0...14A4</div>
          <div className={styles.date}>May 19, 2021 at 2:27pm</div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.detail}>
          <img src={miniLogo} alt="miniLogo" />
          <div className={styles.cost}>
            1,5M <span>(1308.54$)</span>
          </div>
					<div className={styles.externalLink}>
						<span className="icon-external-link"></span>
					</div>
        </div>
      </div>
    </div>
  );
};

export default ActivityRow;
