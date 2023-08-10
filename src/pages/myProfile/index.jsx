import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Helmet } from 'react-helmet';

import Spinner from '../../components/spinner';
import ProfileCardGroup from '../../components/profileCardGroup';
import EditProfile from '../../components/modal/editProfile';
import CreateArtWork from '../../components/modal/createArtwork';

import styles from './index.module.scss';

import userImg from '../../img/user/user9.png';

const MyProfile = () => {
  const [tab, setTab] = useState(0);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalCreate, setModalCreate] = useState(true);

  const openModalEdit = () => {
    if (!modalEdit) {
      setModalEdit(!modalEdit);
    }
  };

  const closeModalEdit = () => {
    if (modalEdit) {
      setModalEdit(!modalEdit);
    }
  };
  const openModalCreate = () => {
    if (!modalCreate) {
      setModalCreate(!modalCreate);
    }
  };

  const closeModalCreate = () => {
    if (modalCreate) {
      setModalCreate(!modalCreate);
    }
  };

  const switchTab = e => {
    const parentNode = e.target.parentNode;
    switch (e.target.id) {
      case '0':
        parentNode.childNodes.forEach(elem => {
          elem.classList.contains(styles.selectorItemActive) ? elem.classList.remove(styles.selectorItemActive) : null;
        });
        parentNode.childNodes[0].classList.add(styles.selectorItemActive);
        setTab(0);
        break;
      case '1':
        parentNode.childNodes.forEach(elem => {
          elem.classList.contains(styles.selectorItemActive) ? elem.classList.remove(styles.selectorItemActive) : null;
        });
        parentNode.childNodes[1].classList.add(styles.selectorItemActive);
        setTab(1);
        break;
      case '2':
        parentNode.childNodes.forEach(elem => {
          elem.classList.contains(styles.selectorItemActive) ? elem.classList.remove(styles.selectorItemActive) : null;
        });
        parentNode.childNodes[2].classList.add(styles.selectorItemActive);
        setTab(2);
        break;
      default:
        break;
    }
  };

  const renderTab = () => {
    switch (tab) {
      case 0:
        return <ProfileCardGroup />;
      case 1:
        return <Spinner />;
      case 2:
        return <Spinner />;
    }
  };

  return (
    <>
      <Helmet>
        <title>My profile - TasteNFT</title>
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
              <div className={styles.userFollowersCount}>234</div>
              <div className={styles.userFollowersText}>Followers</div>
            </div>
            <div className={styles.userFollowing}>
              <div className={styles.userFollowingCount}>15</div>
              <div className={styles.userFollowingText}>Following</div>
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
          part of me now "lives" on platforms like Twitch, YouTube, VK (ВКонта́кте), and Bilibili (B 站). The iconic meme
          that became a viral Internet sensation and an indispensable part of the gachimuchi music genre. This was taken
          when I was very young and in my full "performance" attire. That part of me now "lives" on platforms like
          Twitch, YouTube, and Bilibili (B 站).
        </div>
        <div className={styles.tabs}>
          <div className={styles.selector} onClick={switchTab}>
            <div className={styles.selectorItemActive + ' ' + styles.selectorItem} id="0">
              Created
            </div>
            <div className={styles.selectorItem} id="1">
              Collected
            </div>
            <div className={styles.selectorItem} id="2">
              Bids
            </div>
          </div>
          {renderTab()}
        </div>
      </div>
      {createPortal(<EditProfile state={modalEdit} onClick={closeModalEdit} />, document.body)}
      {createPortal(<CreateArtWork state={modalCreate} onClick={closeModalCreate} />, document.body)}
    </>
  );
};

export default MyProfile;
