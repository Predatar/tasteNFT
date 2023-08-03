import React from 'react';

import { createPortal } from 'react-dom';

import styles from './index.module.scss';

import artWork from '../../img/artWork/artWorkBig.jpg';

const ArtWorkPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img src={artWork} alt="artWork" />
      </div>
    </div>
  );
};

export default ArtWorkPage;
