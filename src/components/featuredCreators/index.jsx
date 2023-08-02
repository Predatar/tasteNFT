import React from 'react';
import SlideCard from '../card/slideCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import styles from './index.module.scss';

const FeaturedCreators = props => {
  return (
    <div className={styles.featuredCreators}>
      <div className={props.mt ? styles.featuredCreatorsFirst : styles.featuredCreatorsSecond}>
        <div className={props.mt ? styles.titleFirst : styles.titleSecond}>Featured creators</div>
        <Swiper
          slidesPerView={'auto'}
          modules={[Scrollbar]}
          scrollbar={{ draggable: true }}
          spaceBetween={16}
          className={styles.slider}
          grabCursor={true}
        >
          <SwiperSlide className={styles.slide}>
            <SlideCard />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <SlideCard />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <SlideCard />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <SlideCard />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <SlideCard />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <SlideCard />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <SlideCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedCreators;
