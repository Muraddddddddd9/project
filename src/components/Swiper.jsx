import { BrowserRouter } from 'react-router-dom';

import { register } from 'swiper/element/bundle';
import { Main, Info, Social } from './index'
register();

import "../styles/swiper.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Swiper = () => {

  return (
    <div className="swiper-style" style={{ width: '100vw', height: '100vh' }}>
      <swiper-container
        slides-per-view="1"
        speed="500"
        loop="true"
        pagination="true"
        navigation="true"
        keyboard="true"
        style={{ width: '100%', height: '100%' }}
      >
        <BrowserRouter>
          <swiper-slide> <Main /> </swiper-slide>
          <swiper-slide> <Info /> </swiper-slide>
          <swiper-slide> <Social /> </swiper-slide>
        </BrowserRouter>
      </swiper-container>
    </div>
  );
}

export default Swiper;
