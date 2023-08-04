import React, { useEffect, useState } from 'react';

import ActivityRow from '../activityRow';

import styles from './index.module.scss';

const ActivityRowGroup = () => {
  const [heigth, setHeigth] = useState();
  const [translateY, setTranslate] = useState();

  useEffect(() => {
    setHeigth(443 / 13);
  }, []);

  return (
    <div className={styles.container}>
      <div
        className={styles.group}
        onScroll={e => {
          const elemHeight = e.target.scrollHeight - e.target.offsetHeight;
          const maxTop = 100 - (heigth / e.target.offsetHeight) * 100;
          const scrollPercent = (e.target.scrollTop / elemHeight) * 100;
          setTranslate(Math.min(scrollPercent, maxTop));
        }}
      >
        <ActivityRow />
        <ActivityRow />
        <ActivityRow />
        <ActivityRow />
        <ActivityRow />
        <ActivityRow />
        <ActivityRow />
        <ActivityRow />
        <ActivityRow />
        <ActivityRow />
        <ActivityRow />
        <ActivityRow />
        <ActivityRow />
      </div>
      <div className={styles.scroll} style={{ height: `${heigth}px`, top: `${translateY}%` }}></div>
    </div>
  );
};

export default ActivityRowGroup;
