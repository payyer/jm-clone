import { Link } from "react-router";

export default function OrderHistory() {
    return (
        <section >
            <h2 className="text-[18px] font-bold">
                Lịch sử đặt hàng
            </h2>
            <div>
                <p className=" text-center text-[14px] font-medium mt-4">
                    Bạn chưa có đơn hàng nào <Link to={"/"} className="text-red-200  hover-effect">Mua hàng ngay</Link>
                </p>
            </div>
        </section>
    )
}
