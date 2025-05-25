import { useDispatch, useSelector } from "react-redux";
import { setIsOpenBurgerModal } from "../../../redux/modal/modalSlice";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router";
import { useState } from "react";
import { APP_BAR_CATEGORIES, APP_BAR_POLICY } from "../../../constant/AppBar";
import Divider from "../../Divider";
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
        className={`relative overflow-y-auto max-w-[355px] w-full h-dvh pl-[26px] pr-[30px] py-[40px]  bg-white transition-effect ${
          isOpenBurgerModal ? "left-0" : "-left-full"
        }`}
      >
        {/* Categories */}
        <ul>
          <li
            onClick={openSale}
            className="group cursor-pointer  w-full flex flex-col items-baseline justify-center font-bold uppercase text[14px] text-gray-400"
          >
            <Link
              to={"/"}
              className=" flex min-h-[44px] justify-between w-full group"
            >
              <span className="relative  flex items-center">
                <span className="nav-text-hover group-hover:after:left-0 group-hover:after:bg-red">
                  Summer sale
                </span>
                <span className="absolute -top-[calc(100%-36px)] left-full text-[10px] p-1 rounded-t-[4px] rounded-bl-[4px]  bg-red text-white leading-[14px]">
                  SALE
                </span>
              </span>

              <MdKeyboardArrowRight
                className={`w-[26px] h-auto ${
                  isOpenSale && "rotate-90"
                } transition-effect`}
              />
            </Link>{" "}
            <ul
              className={`${
                isOpenSale ? "h-[84px]" : "h-0 "
              } overflow-hidden pl-[24px] flex flex-col gap-5 transition-effect duration-150`}
            >
              <li>
                <Link>
                  <span className="nav-text-hover uppercase">
                    Đồng giá chỉ từ 225k
                  </span>
                </Link>
              </li>
              <li>
                <Link>
                  <span className="nav-text-hover uppercase">
                    Siêu sale liền tay 70%
                  </span>
                </Link>
              </li>
            </ul>
          </li>

          {APP_BAR_CATEGORIES?.map((data, index) => (
            <li
              id={index}
              className="group cursor-pointer w-full flex flex-col items-baseline justify-center font-bold uppercase text[14px] text-gray-400"
            >
              <Link
                to={data.link}
                className=" flex min-h-[44px] items-center justify-between w-full group"
              >
                <span className="nav-text-hover group-hover:after:left-0 group-hover:after:bg-red">
                  {data.text}
                </span>
              </Link>{" "}
            </li>
          ))}
        </ul>

        <Divider className={"mt-4"} />

        {/* Customer Service Policy */}
        <h5 className="text-[16px] font-bold leading-[20px] pt-[26px] pb-4 text-gray-400 uppercase">
          Chăm sóc khách hàng
        </h5>
        <ul>
          {APP_BAR_POLICY?.map((data, index) => (
            <li id={index} className="group">
              <Link to={data?.link} className="flex items-center">
                <span className="nav-text-hover group-hover:after:left-0 group-hover:after:bg-red w-fit text-[14px] leading-[28px] text-gray-200 font-medium">
                  {data?.text}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <Divider className={"mt-4"} />
        <h5 className="text-[16px] font-bold leading-[20px] pt-[26px] pb-4 text-gray-400 uppercase ">
          ĐĂNG KÝ MAIL NHẬN ƯU ĐÃI TƯ JM
        </h5>

        <form action="">
          <div className="flex items-center h-[48px] ">
            <input
              className="h-full flex-1 p-2 outline-none border-1 border-black-200 focus:border-black-300 rounded-tl-[4px] rounded-bl-[4px]"
              type="email"
              placeholder="Nhập email của bạn"
            />
            <button
              className="hover-effect h-full text-[12px] text-white bg-black-300 w-[90px] font-semibold rounded-tr-[4px] rounded-br-[4px] uppercase"
              type="submit"
            >
              Gửi ngay
            </button>
          </div>
        </form>

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
