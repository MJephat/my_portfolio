import React from 'react'
import data from "./data"
import "./testmonial.css"

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



function Testmonial() {
  return (
   <section id='testmonials'>
    <h5>Clients Review</h5>
    <h2>Testmonials</h2>
    <Swiper className='container testimonials__container'
    
      modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
    
      {
        data.map(({avater, name, review}, index) =>{
          return(
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avater">
              <img src={avater} alt="image"/>
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
   </section>
  )
}

export default Testmonial