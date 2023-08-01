import React from 'react';

import List from '../../../components/select';

import styles from './index.module.scss';
import ArtWorkGroup from '../../../components/artWorkGroup';

const ArtWorkSection = () => {
  return (
    <div className={styles.artWorkSections}>
      <div className={styles.filters}>
        <List items={['Recently added', 'Latest']} />
        <List items={['Auctions', 'Sale']} />
      </div>
      <ArtWorkGroup />
    </div>
  );
};

export default ArtWorkSection;
