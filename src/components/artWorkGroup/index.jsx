import React from 'react';

import ArtWork from '../card/artWork/ArtWork';

import styles from './index.module.scss';

import artWork1 from '../../img/artWork/artWork1.jpg';
import artWork2 from '../../img/artWork/artWork2.jpg';
import artWork3 from '../../img/artWork/artWork3.jpg';
import artWork4 from '../../img/artWork/artWork4.jpg';
import artWork5 from '../../img/artWork/artWork5.jpg';
import artWork6 from '../../img/artWork/artWork6.jpg';
import artWork7 from '../../img/artWork/artWork7.jpg';
import artWork8 from '../../img/artWork/artWork8.jpg';

import userImg1 from '../../img/user/user1.jpg';
import userImg2 from '../../img/user/user2.jpg';
import userImg3 from '../../img/user/user3.jpg';
import userImg4 from '../../img/user/user4.jpg';
import userImg5 from '../../img/user/user5.jpg';
import userImg6 from '../../img/user/user6.jpg';
import userImg7 from '../../img/user/user7.jpg';
import userImg8 from '../../img/user/user8.jpg';

const ArtWorkGroup = () => {
  return (
    <div className={styles.artWorkSections}>
      <ArtWork artWork={artWork1} userImg={userImg1} />
      <ArtWork artWork={artWork2} userImg={userImg2} />
      <ArtWork artWork={artWork3} userImg={userImg3} />
      <ArtWork artWork={artWork4} userImg={userImg4} />
      <ArtWork artWork={artWork5} userImg={userImg5} />
      <ArtWork artWork={artWork6} userImg={userImg6} />
      <ArtWork artWork={artWork7} userImg={userImg7} />
      <ArtWork artWork={artWork8} userImg={userImg8} />
    </div>
  );
};

export default ArtWorkGroup;
