import React from "react";
import "./home.css";
import { Data } from "./Data";
import { UilArrowRight } from "@iconscout/react-unicons";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

const Home = () => {
  return (
    <section className="home section container">
      <Swiper
        className="home__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className="home__card" key={id}>
              <img src={image} alt="" className="home__img" />

              <h3 className="home__name">{title}</h3>
              <button className="home__button">
                Перейти к каталогу
                <UilArrowRight />
              </button>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Home;
