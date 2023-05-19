import React from 'react';
import './slider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import image01 from '../../../assets/img/common/NE@3x.png';

const Imageslider = () => {
 
  return (
    <Swiper 
    style={{padding:" 40px 0px 0px 70px"}}
    spaceBetween={-210}
    slidesPerView={4}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
      
    >
      <SwiperSlide>
        <img src={image01} alt="Image 1" style={{ maxWidth: "501px", maxHeight: "443px"}} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image01} alt="Image 2" style={{ maxWidth: "501px", maxHeight: "443px"}} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image01} alt="Image 3" style={{ maxWidth: "501px", maxHeight: "443px"}} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image01} alt="Image 4" style={{ maxWidth: "501px", maxHeight: "443px"}} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image01} alt="Image 1" style={{ maxWidth: "501px", maxHeight: "443px"}} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image01} alt="Image 2" style={{ maxWidth: "501px", maxHeight: "443px"}} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image01} alt="Image 3" style={{ maxWidth: "501px", maxHeight: "443px"}} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image01} alt="Image 4" style={{ maxWidth: "501px", maxHeight: "443px"}} />
      </SwiperSlide>
     
    </Swiper>
  );
};

export default Imageslider;
