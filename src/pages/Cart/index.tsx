import SearchBar from "../../components/SearchBar"
import CartDetail from "./partials/CartDetail"
import CartProduct from "./partials/CartProduct"
import CartTotal from "./partials/CartTotal"

export default function Cart() {
    return (
        <section className="main-container ">
            {/* <SearchBar className={""} /> */}
            <h1 className="text-[26px] text-[#333] font-medium text-center mt-[20px]">Giỏ hàng của bạn</h1>
            <p className="text-[16px] text-[#333] font-medium text-center">Có 0 sản phẩm trong giỏ hàng</p>

            <div className="cart-container flex flex-col sm:flex-row gap-[2%] mt-8">
                <CartProduct />
                <CartTotal />
            </div>
        </section>
    )
}
