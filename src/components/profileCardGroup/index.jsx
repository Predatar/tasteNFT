import React, { useState } from 'react';
import { createPortal } from 'react-dom';

import ProfileCard from '../card/profileCard';
import ChangeTime from '../modal/changeTimer';

import styles from './index.module.scss';

import artWork1 from '../../img/artWork/artWork1.jpg';
import artWork2 from '../../img/artWork/artWork2.jpg';
import artWork3 from '../../img/artWork/artWork3.jpg';
import artWork4 from '../../img/artWork/artWork4.jpg';
import artWork5 from '../../img/artWork/artWork5.jpg';
import artWork6 from '../../img/artWork/artWork6.jpg';
import artWork7 from '../../img/artWork/artWork7.jpg';
import artWork8 from '../../img/artWork/artWork8.jpg';

const ProfileCardGroup = () => {
  const [active, setActive] = useState(false);

  const openModal = () => {
    if (!active) {
      setActive(!active);
    }
  };

  const closeModal = () => {
    if (active) {
      setActive(!active);
    }
  };

  return (
    <div className={styles.artWorkSections}>
      <ProfileCard artWork={artWork1} state={'Approved'} setActive={openModal} />
      <ProfileCard artWork={artWork2} state={'On moderation'} setActive={openModal} />
      <ProfileCard artWork={artWork3} state={'Declined'} setActive={openModal} />
      <ProfileCard artWork={artWork4} state={'Approved'} setActive={openModal} />
      <ProfileCard artWork={artWork5} state={'Approved'} setActive={openModal} />
      <ProfileCard artWork={artWork6} state={'Approved'} setActive={openModal} />
      <ProfileCard artWork={artWork7} state={'Approved'} setActive={openModal} />
      <ProfileCard artWork={artWork8} state={'Approved'} setActive={openModal} />
      {createPortal(<ChangeTime active={active} closeModal={closeModal} />, document.body)}
    </div>
  );
};

export default ProfileCardGroup;
