import React from "react"
import "./testimonials.css"
import AVTR1 from "../assets/avatar1.jpg"
import AVTR2 from "../assets/avatar2.jpg"
import AVTR3 from "../assets/avatar3.jpg"
import AVTR4 from "../assets/avatar4.jpg"
import {  Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
// import Swiper and modules styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const Testimonials = () => {
  const data = [
    {
      avatar: AVTR1,
      name: "Tina Snow",
      review:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus commodi iusto mollitia natus, veritatis quasi optio ducimus officiis",
    },
    {
      avatar: AVTR1,
      name: "Tina Snow",
      review:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus commodi iusto mollitia natus, veritatis quasi optio ducimus officiis",
    },
    {
      avatar: AVTR2,
      name: "Tina Snow",
      review:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus commodi iusto mollitia natus, veritatis quasi optio ducimus officiis",
    },
    {
      avatar: AVTR3,
      name: "Tina Snow",
      review:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus commodi iusto mollitia natus, veritatis quasi optio ducimus officiis",
    },
    {
      avatar: AVTR4,
      name: "Tina Snow",
      review:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus commodi iusto mollitia natus, veritatis quasi optio ducimus officiis",
    },
  ]
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonals</h2>

      <Swiper
        className='container testimonials_container'
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, review, name }, index) => {
          return (
            <SwiperSlide key={index} className='testimonial'>
              <div className='client_avatar'>
                <img src={avatar} alt={name} />
                <h5 className='client_name'>{name}</h5>
              </div>
              <small className='client_review'>{review}</small>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials
