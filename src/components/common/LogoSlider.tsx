import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Autoplay from "swiper";
const LogoSlider = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      loop={true}
      slidesPerView="auto"
      spaceBetween={30}
      autoplay={{ delay: 0, disableOnInteraction: false }}
      speed={2500}
      breakpoints={{
        320: {
          slidesPerView: 1.7,
        },
        600: {
          slidesPerView: 3,
        },
        1000: {
          slidesPerView: 5,
        },
        1600: {
          slidesPerView: 7,
        },
      }}
      key={"true"}
    >
      <SwiperSlide>
        <Link href="#">
          <img
            src="/assets/images/logo-1.svg"
            alt=""
            className="mx-auto transition hover:scale-110"
          />
        </Link>
      </SwiperSlide>
    </Swiper>
  );
};

export default LogoSlider;
