import { useDispatch, useSelector } from "react-redux";
import { setIsOpenBurgerModal } from "../../../redux/modal/modalSlice";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router";
import { useState } from "react";
export default function BurgerModal() {
  const dispatch = useDispatch();
  const closeModal = (e) => {
    dispatch(setIsOpenBurgerModal(false));
  };
  const isOpenBurgerModal = useSelector(
    (state) => state.modal.isOpenBurgerModal
  );
  const [isOpenSale, setIsOpenSale] = useState(false);
  const openSale = () => {
    setIsOpenSale((state) => !state);
  };

  return (
    <div
      onClick={closeModal}
      className={`fixed bg-black/65  transition-effect inset-0 ${
        isOpenBurgerModal
          ? "bg-black/65  pointer-events-auto"
          : "bg-transparent pointer-events-none"
      }`}
    >
      <aside
        onClick={(e) => e.stopPropagation()}
        className={`relative max-w-[355px] w-full px-[32px] pt-[40px] min-h-dvh bg-white transition-effect ${
          isOpenBurgerModal ? "left-0" : "-left-full"
        }`}
      >
        <ul>
          <li
            onClick={openSale}
            className="group cursor-pointer min-h-[44px] w-full flex items-center justify-between font-bold uppercase text[14px] text-gray-400"
          >
            <Link className="relative group">
              <span className="nav-text-hover group-hover:after:left-0 group-hover:after:bg-red">
                Summer sale
              </span>
              <span className="absolute -top-[calc(100%-16px)] left-full text-[10px] p-1 rounded-t-[4px] rounded-bl-[4px]  bg-red text-white leading-[14px]">
                SALE
              </span>
            </Link>{" "}
            <MdKeyboardArrowRight
              className={`w-[26px] h-auto ${
                isOpenSale && "rotate-90"
              } transition-effect`}
            />
          </li>
        </ul>

        <button
          onClick={closeModal}
          className="absolute top-[14px] right-[6px] hover-effect"
        >
          <FaXmark className="text-[30px]" />
        </button>
      </aside>
    </div>
  );
}
