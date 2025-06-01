import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import ProductItem from "../../../components/ProductItem";

export default function HotProductList() {
  return (
    <>
      <Swiper
        slidesPerView={6}
        spaceBetween={18}
        className="mySwiper"
        pagination={{
          el: ".swiper-pagination-02",
          type: "bullets",
          clickable: true,
          bulletClass: "block bg-gray-600 h-3 w-3 rounded-full ",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        speed={1000}
        loop
        modules={[Pagination]}
        breakpoints={{
          1280: {
            slidesPerView: 6,
          },
          768: {
            slidesPerView: 3,
          },
          320: {
            slidesPerView: 2,
          },
        }}
      >
        {Array.from({ length: 12 }).map((data, index) => (
          <SwiperSlide key={index}>
            <ProductItem />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-pagination-02 h-2 flex gap-2 items-center justify-center mt-[40px] mb-[70px]"></div>
    </>
  );
}
