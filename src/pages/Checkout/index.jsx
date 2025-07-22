import SearchBar from "../../components/SearchBar";
import CheckoutForm from "./partials/CheckoutForm";
import TotalCheckout from "./partials/TotalCheckout";

export default function index() {
    return (
        <section className="main-container ">
            {/* <SearchBar className={""} /> */}
            <h1 className="text-[26px] text-[#333] font-medium text-center mt-[20px]">Giỏ hàng của bạn</h1>
            <p className="text-[16px] text-[#333] font-medium text-center">Có 0 sản phẩm trong giỏ hàng</p>
            <div className="cart-container flex flex-col-reverse sm:flex-row gap-[2%] mt-8">
                <CheckoutForm />
                <TotalCheckout />
            </div>
        </section>
    )
}
