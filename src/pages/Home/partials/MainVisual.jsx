import "swiper/css";
import { Link } from "react-router";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import {
  mv01,
  mv02,
  mv03,
  mv04,
  mv05,
} from "../../../assets/Main_visual/index.js";
import SearchBar from "./SearchBar.jsx";

const mvList = [
  {
    img: mv05,
    alt: "Nét",
    link: "/",
  },
  {
    img: mv01,
    alt: "Hạ",
    link: "/",
  },
  {
    img: mv02,
    alt: "Dòng chảy thanh lịch",
    link: "/",
  },
  {
    img: mv03,
    alt: "Lạc giữa rừng mer",
    link: "/",
  },
  {
    img: mv04,
    alt: "Dư ảnh",
    link: "/",
  },
];

export default function MainVisual() {
  return (
    <div className="relative">
      <Swiper
        pagination={{
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
          bulletClass: "bg-gray-600 block h-2 w-2 rounded-full",
          bulletActiveClass: "bg-white",
        }}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1000}
        loop={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {mvList?.map((data, index) => (
          <SwiperSlide id={index}>
            <Link to={data?.link}>
              <img
                src={data?.img}
                width={3654}
                height={1217}
                alt={data?.alt}
                loading="eager"
                decoding="async"
                className=" sm:max-w-full h-[205px] object-cover sm:h-auto w-full"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Search Bar */}
      <SearchBar />

      {/* Pagination Bar */}
      <div className="absolute sm:invisible bottom-[10px] left-0 w-full z-10">
        <div className="swiper-pagination h-2 flex gap-2 items-center justify-center"></div>
      </div>
    </div>
  );
}
