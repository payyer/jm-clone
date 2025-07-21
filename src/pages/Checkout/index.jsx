import SearchBar from "../../components/SearchBar";

export default function index() {
    return (
        <section className="main-container ">
            <SearchBar className={""} />
            <h1 className="text-[26px] text-[#333] font-medium text-center mt-[20px]">Giỏ hàng của bạn</h1>
            <p className="text-[16px] text-[#333] font-medium text-center">Có 0 sản phẩm trong giỏ hàng</p>
            <div className="cart-container flex gap-[2%] mt-8">
                <div className="cart-container--left">
                </div>
                <div className="cart-container--right">
                    <ul>
                        <li></li>
                    </ul>

                    <div className="flex items-center h-[40px]">
                        <input id="discount" type="text" className=" p-[19px] flex-1 h-full border-gray-800 border-[1px] border-r-0" placeholder="Nhập mã giảm giá" />
                        <label htmlFor="discount" className="cursor-pointer uppercase text-[14px] h-full w-[84px] flex items-center justify-center text-white bg-[#2d2d29]">
                            Áp dụng
                        </label>
                    </div>

                    <h3 className="text-[20px] mt-6 text-gray-400 font-bold">Tổng cộng</h3>
                    <p className="flex mt-2 text-[16px] justify-between items-end text-gray-400 font-bold">Tổng tiền hàng: <span className="text-[16px]">700.000đ</span></p>
                    <p className="flex mt-2 text-[16px] justify-between items-end text-gray-400 font-bold">Giảm giá: <span className="text-[16px]">- 0đ</span></p>
                    <p className="flex mt-2 text-[16px] justify-between items-end text-gray-400 font-bold">Tạm tính: <span className="text-[16px]">700.000đ</span></p>
                    <p className="flex mt-2 text-[16px] justify-between items-end text-gray-400 font-bold">Phí ship: <span className="text-[16px]">0đ</span></p>
                    <p className="flex mt-2 text-[16px] justify-between items-end text-gray-400 font-bold">Cần thanh toán: <span className="text-[20px] text-red-200">700.000đ</span></p>
                </div>
            </div>
        </section>
    )
}
