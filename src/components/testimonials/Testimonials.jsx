import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/dance1.webp";
import AVTR2 from "../../assets/neon2.jpeg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Angela Fackler",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur fugit debitis dolor obcaecati repellat aspernatur quas soluta? Voluptatum, tempore facilis.",
  },
  {
    avatar: AVTR2,
    name: "Jordan Estaban",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur fugit debitis dolor obcaecati repellat aspernatur quas soluta? Voluptatum, tempore facilis.",
  },
  {
    avatar: AVTR3,
    name: "Ariana Grande",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur fugit debitis dolor obcaecati repellat aspernatur quas soluta? Voluptatum, tempore facilis.",
  },
  {
    avatar: AVTR4,
    name: "Yebba",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur fugit debitis dolor obcaecati repellat aspernatur quas soluta? Voluptatum, tempore facilis.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5> Review From clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
