import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Helmet } from 'react-helmet';
import Btn from '../../components/button/btn/Btn';
import Spinner from '../../components/spinner';
import FollowerModal from '../../components/modal/follower';
import ArtWorkGroup from '../../components/artWorkGroup';

import styles from './index.module.scss';

import userImg from '../../img/user/user9.png';

const CreatorProfile = () => {
  const [tab, setTab] = useState(true);

  const [modal, setModal] = useState(false);

  const openModal = () => {
    if (!modal) {
      setModal(!modal);
    }
  };

  const closeModal = () => {
    if (modal) {
      setModal(!modal);
    }
  };

  const switchTab = e => {
    if (e.target.nextSibling == null) {
      e.target.previousSibling.classList.remove(styles.selectorItemActive);
      e.target.previousSibling.classList.add(styles.selectorItem);
      e.target.classList.add(styles.selectorItemActive);
      e.target.classList.remove(styles.selectorItem);
      setTab(!tab);
    } else {
      e.target.nextSibling.classList.remove(styles.selectorItemActive);
      e.target.nextSibling.classList.add(styles.selectorItem);
      e.target.classList.add(styles.selectorItemActive);
      e.target.classList.remove(styles.selectorItem);
      setTab(!tab);
    }
  };

  return (
    <>
      <Helmet>
        <title>Creator profile - TasteNFT</title>
      </Helmet>
      <div className={styles.wrapper}>
        <div className={styles.user}>
          <div className={styles.userInfo}>
            <div className={styles.userImg}>
              <img src={userImg} alt="userImg" />
            </div>
            <div className={styles.userWrapper}>
              <div className={styles.userName}>User Name</div>
              <div className={styles.userTag}>@username</div>
            </div>
          </div>
          <div className={styles.userDetail}>
            <div className={styles.userFollowers}>
              <div className={styles.userFollowersCount} onClick={openModal}>
                234
              </div>
              <div className={styles.userFollowersText}>Followers</div>
            </div>
            <div className={styles.userFollowing}>
              <div className={styles.userFollowingCount} onClick={openModal}>
                15
              </div>
              <div className={styles.userFollowingText}>Following</div>
            </div>
            <div className={styles.userBtn}>
              <Btn text={'Follow'} />
            </div>
            <div className={styles.userExternal}>
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
        </div>
        <div className={styles.social}>
          <div className={styles.socialLink}>
            <span className="icon-twitch"></span>
            Twitch
          </div>
          <div className={styles.socialLink}>
            <span className="icon-instagram"></span>
            Instagram
          </div>
          <div className={styles.socialLink}>
            <span className="icon-twitter"></span>
            Twitter
          </div>
          <div className={styles.socialLink}>
            <span className="icon-onlyfans"></span>
            Onlyfans
          </div>
        </div>
        <div className={styles.descr}>
          <span>Description:</span> The iconic meme that became a viral Internet sensation and an indispensable part of
          the gachimuchi music genre. This was taken when I was very young and in my full "performance" attire. That
          part of me now "lives" on platforms like Twitch, YouTube, and Bilibili (B 站). The iconic meme that became a
          viral Internet sensation and an indispensable part of the gachimuchi music genre. This was taken when I was
          very young and in my full "performance" attire. That part of me now "lives" on platforms like Twitch, YouTube,
          and Bilibili (B 站).
        </div>
        <div className={styles.tabs}>
          <div className={styles.selector} onClick={switchTab}>
            <div className={styles.selectorItemActive}>Created</div>
            <div className={styles.selectorItem}>Collected</div>
          </div>
          <div className={styles.tab}>{tab ? <ArtWorkGroup /> : <Spinner />}</div>
        </div>
      </div>
      {createPortal(<FollowerModal state={modal} onClick={closeModal} />, document.body)}
    </>
  );
};

export default CreatorProfile;
