'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Herosection = () => {
  return (
    <div className='w-full h-screen relative '>
      <Swiper 
        navigation={true}
        modules={[Navigation]} 
        className="mySwiper" 
        style={{ width: '100%', height: '100%', zIndex:1 }}
        slidesPerView={1}
        spaceBetween={0}
        // autoplay={{ delay: 5000}} 
        // loop={true}
      >
        <SwiperSlide>
          <img 
            src="https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="" 
            className='w-full h-full object-cover' 
          />
          <div className="text-[#28193D] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-4xl font-bold">Summer Collection</h1>
            <p className="text-xl font-bold mt-2">Explore our latest summer collection and embrace the season in style.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="" 
            className='w-full h-full object-cover' 
          />
          <div className="text-[#28193D] absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-4xl font-bold">New Arrivals</h1>
            <p className="text-xl mt-2 font-bold">Discover our newest arrivals and stay ahead of the fashion curve.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src="https://plus.unsplash.com/premium_photo-1675183688988-5a90a0f49854?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="" 
            className='w-full h-full object-cover' 
          />
          <div className="text-[#28193D] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-4xl font-bold">Winter Sale</h1>
            <p className="text-xl mt-2 font-bold">Shop our winter sale and enjoy great discounts on your favorite items.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src="https://images.unsplash.com/photo-1591338459467-bd36100b07c2?q=80&w=1504&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="" 
            className='w-full h-full object-cover' 
          />
          <div className=" text-[#28193D] absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-4xl font-bold">Spring Collection</h1>
            <p className="text-xl mt-2 font-bold">Welcome the spring season with our fresh and vibrant collection.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Herosection;
