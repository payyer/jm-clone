import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { product_02 } from "../../../assets/Products";
import { useState } from 'react';

export default function ProductImageGallery() {
    const [thumb, setThumb] = useState(product_02)
    return (
        <div className="flex gap-[16px] w-1/2 justify-center">
            <Swiper
                slidesPerView={6}
                spaceBetween={10}
                direction={'vertical'}
                className="mySwiper"
                style={{ height: "600px", width: "70px", margin: "unset" }}
            >
                {Array.from({ length: 10 }).map((_, index) =>
                    <SwiperSlide >
                        <button className="w-full h-full cursor-pointer" title='Gallery image button'>
                            <img className='w-full h-full object-contain' alt='' loading='lazy' src={product_02} />
                        </button>
                    </SwiperSlide>)
                }
            </Swiper>

            <div className='h-[600px]'>
                <img className='w-auto h-full object-contain' src={thumb} width={462} height={592} alt="Thumb image" loading='lazy' />
            </div>
        </div>
    )
}
