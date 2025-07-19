import { FaStar } from "react-icons/fa";

export default function ProductRating() {
    return (
        <section className="mt-8 text-gray-400 font-medium">
            <h2 className="text-gray-400 text-[20px] ">Đánh giá sản phẩm</h2>
            <span className="text-[16px] text-[#656565]">0 Đánh giá</span>

            <div className=" flex flex-col sm:flex-row gap-8 sm:gap-0 items-center h-fit sm:h-[250px] py-[45px] bg-[#F5F5F5] mt-8">
                <div className="ratting w-full flex flex-col justify-center items-center sm:w-[30%] h-full text-[44px] text-center ">
                    <div className="flex items-center justify-center">
                        <p>0.0 / </p><span className="text-[25px]">5</span>
                    </div>

                    <div className="flex items-center justify-center gap-2">
                        <FaStar className="text-[16px] text-[#656565]" />
                        <FaStar className="text-[16px] text-[#656565]" />
                        <FaStar className="text-[16px] text-[#656565]" />
                        <FaStar className="text-[16px] text-[#656565]" />
                        <FaStar className="text-[16px] text-[#656565]" />
                    </div>
                </div>

                <div className="flex-1 max-w-[calc(100%) - 2rem] w-full sm:w-auto flex items-center justify-center h-full px-4 text-[18px]">
                    <div className="w-full max-w-[80%] sm:max-w-[60%] sm:min-w-[400px]">
                        <h4>Sản phẩm được đánh giá</h4>
                        <ul className="w-full ">
                            {Array.from({ length: 5 }).map((_, index) => {
                                let star = 5 - index
                                return (
                                    <li key={index} className="flex items-center gap-2">
                                        <span className="shrink-0">{star} Sao</span>
                                        <div className="flex-1 h-[5px] sm:w-[340px] rounded-[40px] bg-[#D9D9D9]"></div>
                                        <span>(0)</span>
                                    </li>
                                )
                            }
                            )}
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    )
}
