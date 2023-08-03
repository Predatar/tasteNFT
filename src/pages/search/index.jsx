import React from 'react';

import List from '../../components/select';
import ArtWork from '../../components/card/artWork/ArtWork';
import FeaturedCreators from '../../components/featuredCreators';

import styles from './index.module.scss';

import artWork1 from '../../img/artWork/artWork1.jpg';
import artWork2 from '../../img/artWork/artWork2.jpg';
import artWork3 from '../../img/artWork/artWork3.jpg';
import artWork4 from '../../img/artWork/artWork4.jpg';

import BtnSearch from '../../components/button/btnSearch';
import userImg1 from '../../img/user/user1.jpg';
import userImg2 from '../../img/user/user2.jpg';
import userImg3 from '../../img/user/user3.jpg';
import userImg4 from '../../img/user/user4.jpg';

const Search = () => {
  return (
    <>
      <div className={styles.search}>
        <div className={styles.filters}>
          <List items={['Recently added', 'Latest']} />
          <List items={['Auctions', 'Sale']} />
        </div>
        <div className={styles.group}>
          <ArtWork artWork={artWork1} userImg={userImg1} />
          <ArtWork artWork={artWork2} userImg={userImg2} />
          <ArtWork artWork={artWork3} userImg={userImg3} />
          <ArtWork artWork={artWork4} userImg={userImg4} />
        </div>
        <BtnSearch text={'Show all'} />
      </div>
      <FeaturedCreators mt={false} />
    </>
  );
};

export default Search;
