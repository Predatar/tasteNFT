import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import BtnHeader from '../button/btnHeader/BtnHeader';
import ConnectWallet from '../modal/connectWallet';
import Balance from '../modal/balance';

import styles from './Header.module.scss';
import Logo from '../logo/Logo';
import miniLogo from '../../img/miniLogo.svg';
import userImg from '../../img/user/user9.png';

const Header = ({ text, setText, profile, openModalCreate, openModalEdit }) => {
  const [modal, setModal] = useState(false);
  const [balance, setBalance] = useState(false);

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
  const openBalance = () => {
    if (!balance) {
      setBalance(!balance);
    }
  };

  const closeBalance = () => {
    if (balance) {
      setBalance(!balance);
    }
  };

  const searchInput = ({ target }) => {
    setText(target.value);
  };

  const deleteSearchText = () => {
    setText('');
  };

  return (
    <div className={styles.header + ' ' + (profile ? styles.headerProfile : '')}>
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
      {profile ? <Profile /> : <BtnHeader text="Connect wallet" onClick={openModal} />}
      {createPortal(<ConnectWallet state={modal} onClick={closeModal} />, document.body)}
      {createPortal(<Balance state={balance} onClick={closeBalance} />, document.body)}
    </div>
  );

  function Profile() {
    const [active, setActive] = useState(false);

    return (
      <>
        <div className={styles.btn} onClick={openModalCreate}>
          + Add artwork
        </div>
        <div className={styles.placeholder}></div>
        <div className={styles.profile} style={{ '--height': active ? '180px' : '56px' }}>
          <div className={styles.wrapper}>
            <img src={userImg} alt="userName" />
            <div className={styles.userWrapper}>
              <div className={styles.userName}>User Name</div>
              <div className={styles.userDetail}>
                <div className={styles.userTag}>@username</div>
                <div className={styles.balance}>
                  <span>Balance: </span>
                  <img src={miniLogo} alt="minilogo" />
                  1,5M
                </div>
              </div>
            </div>
            <div
              className={styles.dropdown + ' ' + (active ? styles.dropdownActive : '')}
              onClick={() => setActive(!active)}
            >
              <span className="icon-drop-down"></span>
            </div>
          </div>
          <div className={styles.address}>Address: 0c0xcx1cx606g4516x51g1...</div>
          <div className={styles.myProfile} onClick={openModalEdit}>
            My profile
          </div>
          <div className={styles.balanceSett} onClick={openBalance}>
            Balance settings
          </div>
          <div className={styles.logOut}>Log out</div>
        </div>
      </>
    );
  }
};

export default Header;
