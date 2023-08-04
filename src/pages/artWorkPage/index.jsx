import React from 'react';
import { Helmet } from 'react-helmet';
import InfoModal from './infoModal';
import ActivityRowGroup from '../../components/activityRowGroup';
import ArtWorkGroup from '../../components/artWorkGroup';

import styles from './index.module.scss';

import artWork from '../../img/artWork/artWorkBig.jpg';
import userImg from '../../img/user/user9.png';

const ArtWorkPage = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Artwork page - TasteNFT</title>
      </Helmet>
      <div className={styles.img}>
        <img src={artWork} alt="artWork" />
        <InfoModal />
      </div>
      <div className={styles.info}>
        <div className={styles.infoWrapper}>
          <div className={styles.userInfo}>
            <div className={styles.userInfoImg}>
              <img src={userImg} alt="img" />
            </div>
            <div className={styles.userInfoWrapper}>
              <div className={styles.userInfoName}>User Name</div>
              <div className={styles.userInfoTag}>@username</div>
            </div>
          </div>
          <div className={styles.title}>WFH - art name</div>
          <div className={styles.copy}>
            Сopy: <span>2 of 10</span>
          </div>
          <div className={styles.descr}>
            <span>Description:</span> The iconic meme that became a viral Internet sensation and an indispensable part
            of the gachimuchi music genre. This was taken when I was very young and in my full "performance" attire.
            That part of me now "lives" on platforms like Twitch, YouTube, and Bilibili (B 站). The iconic meme that
            became a viral Internet sensation and an indispensable part of the gachimuchi music genre. This was taken
            when I was very young and in my full "performance" attire. That part of me now "lives" on platforms like
            Twitch, YouTube, and Bilibili (B 站).
          </div>
          <div className={styles.externalLinks}>
            <div className={styles.externalLink}>
              <span className="icon-external-link"></span>
            </div>
            <div className={styles.externalLink}>
              <span className="icon-share"></span>
            </div>
            <div className={styles.externalLink}>
              <span className="icon-menu-vertical"></span>
            </div>
          </div>
        </div>
        <div className={styles.infoWrapper}>
          <div className={styles.titleSecond}>Activity</div>
          <ActivityRowGroup />
        </div>
      </div>
      <div className={styles.featureWorks}>
        <div className={styles.featureWorksTitle}>Feature works</div>
        <div className={styles.featureWrapper}>
          <ArtWorkGroup />
        </div>
      </div>
    </div>
  );
};

export default ArtWorkPage;
