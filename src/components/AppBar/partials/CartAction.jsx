import { PiHandbagBold } from "react-icons/pi";
import CartPopup from "./CartPopup";
import { useRef, useState } from "react";
import useClickOutSide from "../../../hooks/useClickOutSide";

export default function CartAction() {
  const [isCartPopupOpen, setIscartPopupOpen] = useState(false);

  const toggleCartPopup = () => {
    setIscartPopupOpen((prev) => !prev);
  };

  const cartRef = useRef(null);
  useClickOutSide(cartRef, () => setIscartPopupOpen(false));

  return (
    <div className="relative flex items-center" ref={cartRef}>
      <button
        onClick={toggleCartPopup}
        className="flex gap-1 items-center hover:text-red cursor-pointer"
      >
        <PiHandbagBold className="w-[22px] h-auto" />
        <span className="hidden sm:inline">0</span>
      </button>
      {isCartPopupOpen && <CartPopup isCartPopupOpen={isCartPopupOpen} />}
    </div>
  );
}
