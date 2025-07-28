import CartItem from "./CartItem";
import TotalCart from "./TotalCart";

export default function CartPopup({ setIsCartPopupOpen }) {
  return (
    <div
      className={`absolute sm:block block z-10 top-[calc(100%+34px)] w-[300px] px-4 py-5 right-0 bg-white shadow-2xl rounded-[4px] border-1 border-gray-700`}
    >
      {/* List cart item */}
      <div className="pr-4 flex flex-col gap-4 max-h-[375px] overflow-y-auto h-full w-full pb-4">
        {/* Item */}
        <CartItem />
      </div>
      <TotalCart setIsCartPopupOpen={setIsCartPopupOpen} />
    </div>
  );
}
