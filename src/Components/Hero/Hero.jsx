import React, { useRef, useState } from 'react'
import './hero.css'

import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className='hero-section'>
      <div className="container">
        <div className="left">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="slide_same">
                <img className='swipersliderwidth' src="https://spicemunnar.com/wp-content/uploads/2019/01/black-pepper.jpg" alt="" />
                <div className="slider-container">
                  <span>Beat kerala spices</span>
                  <p>from the high range</p>
                  <Link to={''}>Shop Now <i class="ri-arrow-right-line"></i></Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide_same">
                <img className='swipersliderwidth' src="https://spicemunnar.com/wp-content/uploads/2019/01/clove-1.jpg" alt="" />
                <div className="slider-container">
                <span>Pure spices</span>
                  <p>Pesticide free, Grown naturally</p>
                  <Link to={''}>Shop Now <i class="ri-arrow-right-line"></i></Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide_same">
                <img className='swipersliderwidth' src="https://spicemunnar.com/wp-content/uploads/2019/01/nutmeg-2.jpg" alt="" />
                <div className="slider-container">
                <span>nutmeg, clove, cardamom</span>
                  <p>best high quality spices</p>
                  <Link to={''}>Shop Now <i class="ri-arrow-right-line"></i></Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="right">
          <div className="up">
            <div className="upleft imgheightslider">
              <img className='same-img' src="https://spicemunnar.com/wp-content/uploads/2019/01/cardamom-1.jpg" alt="" />
              <div className="content-detail">
                <p>Up to 10% Off</p>
                <span>Cardamom</span>
                <Link to={''}>Shop Now <i class="ri-arrow-right-line"></i></Link>
              </div>
            </div>
            <div className="upright imgheightslider">
              <img className='same-img' src="https://spicemunnar.com/wp-content/uploads/2019/01/cinamon-1.jpg" alt="" />
              <div className="content-detail">
                <p>Up to 5% Off</p>
                <span>Cinnamon</span>
                <Link to={''}>Shop Now <i class="ri-arrow-right-line"></i></Link>
              </div>
            </div>
          </div>
          <div className="down">
            <div className="downleft imgheightslider">
              <img className='same-img' src="https://spicemunnar.com/wp-content/uploads/2019/01/staranise-2.jpg" alt="" />
              <div className="content-detail">
                <p>Up to 5% Off</p>
                <span>Star Anise</span>
                <Link to={''}>Shop Now <i class="ri-arrow-right-line"></i></Link>
              </div>
            </div>
            <div className="downright imgheightslider">
              <img className='same-img' src="https://spicemunnar.com/wp-content/uploads/2019/01/coriander.jpg" alt="" />
              <div className="content-detail">
                <p>Up to 10% Off</p>
                <span>Coriander</span>
                <Link to={''}>Shop Now <i class="ri-arrow-right-line"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
