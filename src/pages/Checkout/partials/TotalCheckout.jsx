export default function TotalCheckout() {
    return (
        <div className="cart-container--right">
            <ul>
                <li></li>
            </ul>
            <div className="flex items-center h-[40px]">
                <input id="discount" type="text" className=" p-[19px] w-full h-full border-gray-800 border-[1px] border-r-0" placeholder="Nhập mã giảm giá" />
                <label htmlFor="discount" className="cursor-pointer uppercase text-[14px] h-full w-[84px] shrink-0 flex items-center justify-center text-white bg-[#2d2d29]">
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
    )
}
