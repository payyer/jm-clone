import { Swiper, SwiperSlide } from 'swiper/react';
import { product_02 } from "../../../assets/Products";
import { useState } from 'react';
import ProductGalleryThumb from './ProductGalleryThumb';

export default function ProductImageGallery() {
    const [thumb, setThumb] = useState(product_02)
    return (
        <div className="flex flex-col-reverse self-start sm:flex-row gap-[30px] w-full items-center sm:w-1/2 justify-center sm:justify-start">
            <Swiper
                slidesPerView={6}
                spaceBetween={10}
                className="mySwiper swiper-gallery"
                breakpoints={{
                    767: {
                        direction: "horizontal",
                    },
                    768: {
                        direction: "vertical"
                    }
                }}
            >
                {Array.from({ length: 10 }).map((_, index) =>
                    <SwiperSlide >
                        <button className="w-full h-full cursor-pointer" title='Gallery image button'>
                            <img className='w-full h-full object-contain' alt='' loading='lazy' src={product_02} />
                        </button>
                    </SwiperSlide>)
                }
            </Swiper>
            <ProductGalleryThumb thumb={thumb} />
        </div>
    )
}
