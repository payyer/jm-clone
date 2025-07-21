import CartProduct from "./CartProduct";
import CartTotal from "./CartTotal";

export default function CartDetail() {
    return (
        <div className="cart-container flex gap-[2%] mt-8">
            <CartProduct />
            <CartTotal />
        </div>
    )
}
