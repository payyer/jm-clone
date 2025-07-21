import { Link } from "react-router";

export default function CartTotal() {
    return (
        <div className="cart-container--right mt-8 sm:mt-0">
            <h3 className="text-[18px] font-medium text-[#2d2d29] mb-[24px] pb-[24px] border-b-[#e6e6e6] border-b-[1px]">Tóm tắt đơn hàng</h3>
            <p className="flex justify-between items-end text-[14px] font-medium text-[#2d2d29] mb-[24px] pb-[24px] border-b-[#e6e6e6] border-b-[1px]">
                <span>Tổng tiền tiền hàng:</span>
                <span className="text-[16px]">700.000đ</span>
            </p>
            <p className="flex justify-between items-end text-[14px] font-medium text-[#2d2d29] mb-[24px] pb-[24px] border-b-[#e6e6e6] border-b-[1px]">
                <span>Giảm giá:</span>
                <span className="text-[16px]">- 0đ</span>
            </p>
            <p className="flex justify-between items-end text-[14px] font-medium text-[#2d2d29] mb-[24px] pb-[24px] border-b-[#e6e6e6] border-b-[1px]">
                <span>Tạm tính:</span>
                <span className="text-[16px]">700.000đ</span>
            </p>
            <p className="flex justify-between items-center text-[14px] font-medium text-[#2d2d29] mb-[24px] pb-[24px] border-b-[#e6e6e6] border-b-[1px]">
                <span>Tổng tiền:</span>
                <span className="text-[24px] font-bold text-red-200">700.000đ</span>
            </p>

            <Link to={"./checkout"} className="bg-red-200 h-[48px] text-[14px] rounded-[4px] flex items-center justify-center font-bold text-white uppercase">
                Tiến hành đặt hàng
            </Link>
            <Link to={"/"} className="bg-white border-gray-600 border-[1px] h-[48px] mt-[24px] text-[14px] rounded-[4px] flex items-center justify-center font-bold text-gray-400 uppercase">
                Mua thêm sản phẩm
            </Link>
        </div>
    )
}
