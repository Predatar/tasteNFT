import React, { useEffect, useState } from 'react';

import Btn from '../../../components/button/btn/Btn';

import { EffectCards, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

import styles from './index.module.scss';

import userImg from '../../../img/main/user.png';

import slide1 from '../../../img/main/slide1.jpg';
import slide2 from '../../../img/main/slide2.jpg';
import slide3 from '../../../img/main/slide3.jpg';
import slide4 from '../../../img/main/slide4.jpg';

import miniLogo from '../../../img/miniLogo.svg';

const Main = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.userInfo}>
          <div className={styles.userInfoImg}>
            <img src={userImg} alt="img" />
          </div>
          <div className={styles.userInfoWrapper}>
            <div className={styles.userInfoName}>User Name</div>
            <div className={styles.userInfoTag}>@username</div>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.infoTitle}>WFH - art name</div>
          <div className={styles.infoDescr}>
            <span>Description:</span> The iconic meme that became a viral Internet sensation and an indispensable part
            of the gachimuchi music genre. This was taken when I was very young and in my full "performance" attire.
            That part of me now "lives" on platforms like Twitch, YouTube, and Bilibili (B 站).
          </div>
        </div>
        <div className={styles.detail}>
          <div className={styles.detailContainer}>
            <div className={styles.sold}>Sold for:</div>
            <div className={styles.soldCount}>
              <img src={miniLogo} alt="miniLogo" />
              1,5M
            </div>
          </div>
          <div className={styles.detailContainer}>
            <Btn text="View" />
            <div className={styles.detailWrapper}>
              <div className={styles.detailLink}>
                <span className="icon-external-link" ></span>
              </div>
              <div className={styles.detailLink}>
                <span className="icon-share"></span>
              </div>
              <div className={styles.detailLink}>
                <span className="icon-menu-vertical"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <Slider />
      </div>
    </div>
  );
};

const Slider = () => {
  return (
    <Swiper
      className={styles.slider}
      modules={[EffectCards, Pagination]}
      effect={'cards'}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      cardsEffect={{
        slideShadows: false,
        rotate: false,
        perSlideRotate: 0,
        perSlideOffset: 28
      }}
      scrollbar={{ draggable: true }}
      grabCursor={true}
    >
      <SwiperSlide className={styles.sliderSlide}>
        <img src={slide1} alt="" className={styles.sliderImg} />
      </SwiperSlide>
      <SwiperSlide className={styles.sliderSlide}>
        <img src={slide2} alt="" className={styles.sliderImg} />
      </SwiperSlide>
      <SwiperSlide className={styles.sliderSlide}>
        <img src={slide3} alt="" className={styles.sliderImg} />
      </SwiperSlide>
      <SwiperSlide className={styles.sliderSlide}>
        <img src={slide4} alt="" className={styles.sliderImg} />
      </SwiperSlide>
    </Swiper>
  );
};

export default Main;
