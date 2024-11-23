import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import slidesData from "../data/slidesData";

const swiperConfig = {
  slidesPerView: 5,
  spaceBetween: 50,
  navigation: true,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    575: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
  },
};

const ImageSlider = () => {
  return (
    <Swiper {...swiperConfig}>
      {slidesData.map(({ id, imgSrc, alt, title }) => (
        <SwiperSlide key={id}>
          <img src={imgSrc} alt={alt} loading="lazy" />
          <p className="text-amber-400 font-semibold mt-3">{title}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
