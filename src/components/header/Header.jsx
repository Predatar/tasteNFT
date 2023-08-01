import React, { useState } from 'react';
import Logo from '../logo/Logo';

import styles from './Header.module.scss';
import BtnHeader from '../button/btnHeader/BtnHeader';

const Header = () => {
  const [text, setText] = useState('');

  const searchInput = ({ target }) => {
    setText(target.value);
  };

  const deleteSearchText = () => {
    setText('');
  };

  return (
    <div className={styles.header}>
      <Logo />
      <div className={styles.header__search}>
        <span className="icon-search"></span>
        <input
          type="text"
          className={styles.header__input}
          placeholder="Search for ..."
          onChange={searchInput}
          value={text}
        />
        {text ? (
          <div className={styles.header__searchBtn} onClick={deleteSearchText}>
            <span className="icon-close"></span>
            Clear
          </div>
        ) : null}
      </div>
      <BtnHeader text="Connect wallet" />
    </div>
  );
};

export default Header;
