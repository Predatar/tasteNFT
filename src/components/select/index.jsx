import React, {useState} from "react";

import styles from './index.module.scss';

const List = ({ items }) => {
  const [dropDown, setDropDown] = useState(false);
  const [selected, setSelected] = useState(items[0]);

  const activeSelect = () => {
    setDropDown(!dropDown);
  };

  const selectItems = ({ target }) => {
    setSelected(target.innerHTML);
  };

  return (
    <div className={styles.select} onClick={activeSelect}>
      <div className={dropDown ? styles.selectedActive : styles.selected}>
        {selected} <span className="icon-drop-down"></span>
      </div>
      <div className={dropDown ? styles.selectListActive : styles.selectList} onClick={selectItems}>
        {items.map((elem, index) => (
          <div className={styles.selectItem} key={index}>{elem}</div>
        ))}
      </div>
    </div>
  );
};

export default List;