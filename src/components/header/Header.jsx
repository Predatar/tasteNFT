import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import BtnHeader from '../button/btnHeader/BtnHeader';
import ConnectWallet from '../modal/connectWallet';

import styles from './Header.module.scss';
import Logo from '../logo/Logo';

const Header = ({ text, setText }) => {
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
      <BtnHeader text="Connect wallet" onClick={openModal}/>
      {createPortal(<ConnectWallet state={modal} onClick={closeModal} />, document.body)}
    </div>
  );
};

export default Header;
