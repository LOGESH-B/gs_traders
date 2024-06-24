import './Construction.css'
import Nav from '../../components/nav_component/Nav'
import ProductBanner from '../../components/product/product_banner/ProductBanner'
import bgimg from '../../assets/images/constructionBanner.jpeg'

import c1 from '../../assets/construction/cons1.jpg'
import c2 from '../../assets/construction/cons2.jpg'
import c3 from '../../assets/construction/cons3.jpg'


import conslogo from '../../assets/logo/GS-logo-construction.png'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';


function Construction() {
  const slideImages = [
   
    c1,c2,c3
    // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk2mfGt4AV9awKbbbaCGDx-yYAmESWHP7IJFhjss82rWyWntvXnpqCdKJKjZGhHDRCGT0&usqp=CAU",
    // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRKzct9T4TI4gLAKiJQpb-T_Dvuu_jDYNwsviCEKQ_6_wl8CmED1U6sk4t4C-5T3O6Hso&usqp=CAU",
    // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk2mfGt4AV9awKbbbaCGDx-yYAmESWHP7IJFhjss82rWyWntvXnpqCdKJKjZGhHDRCGT0&usqp=CAU",
    // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk2mfGt4AV9awKbbbaCGDx-yYAmESWHP7IJFhjss82rWyWntvXnpqCdKJKjZGhHDRCGT0&usqp=CAU",
    // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRKzct9T4TI4gLAKiJQpb-T_Dvuu_jDYNwsviCEKQ_6_wl8CmED1U6sk4t4C-5T3O6Hso&usqp=CAU",
    // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk2mfGt4AV9awKbbbaCGDx-yYAmESWHP7IJFhjss82rWyWntvXnpqCdKJKjZGhHDRCGT0&usqp=CAU",
    // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRKzct9T4TI4gLAKiJQpb-T_Dvuu_jDYNwsviCEKQ_6_wl8CmED1U6sk4t4C-5T3O6Hso&usqp=CAU",
    // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk2mfGt4AV9awKbbbaCGDx-yYAmESWHP7IJFhjss82rWyWntvXnpqCdKJKjZGhHDRCGT0&usqp=CAU",

  ];


  return (
    <>
      <Nav img={conslogo} w={200}/>
      <ProductBanner bgimg={bgimg} name={'GS CONSTRUCTION'} content={'GS Construction offers top-notch planning, blueprints, estimations, elevation designs, consulting, and labor work, ensuring high-quality and fast project delivery.'} />
      <div className="swiper-container">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {slideImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt="slide_image" />
            </SwiperSlide>
          ))}

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <br/>
              <center className="swiper-pagination"></center>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>

          </div>
        </Swiper>
      </div>
    </>
  );
}

export default Construction;