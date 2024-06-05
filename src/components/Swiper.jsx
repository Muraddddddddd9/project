import { BrowserRouter } from 'react-router-dom';
import { Main, Info, Social, Company } from './index'
import { Navigation, Pagination } from 'swiper/modules';

import "../styles/swiper.css"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SwiperContent = () => {
  return (
    <div className="swiper-style" style={{ width: '100vw', height: '100vh' }}>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        speed={500}
        navigation
        pagination={{ clickable: true }}
        style={{ width: '100%', height: '100%' }}
      >
        <BrowserRouter>
          <SwiperSlide> <Main /> </SwiperSlide>
          <SwiperSlide> <Info /> </SwiperSlide>
          <SwiperSlide> <Company /> </SwiperSlide>
          <SwiperSlide> <Social /> </SwiperSlide>
        </BrowserRouter>
      </Swiper>
    </div>
  );
};

export default SwiperContent;