import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router";

export default function SummerSale() {
  return (
    <div
      to="/sale"
      className="relative cursor-pointer flex items-center gap-1 font-bold text-color-primary text-[14px] leading-[20px] group"
    >
      <span className="nav-text-hover">SUMMER SALE</span>
      <MdKeyboardArrowDown />
      <span className="absolute -top-[calc(100%-4px)] right-0 text-[10px] p-1 rounded-t-[4px] rounded-bl-[4px]  bg-red text-white leading-[14px]">
        SALE
      </span>
      <ul className="absolute z-[2] rounded-b-[4px] shadow-2xl opacity-0 invisible top-[calc(100%+4px)] w-[150px] py-[10px] shadow-xs bg-white group-hover:opacity-100 group-hover:visible translate-y-[50%] group-hover:translate-y-[0%] transition-all duration-500 ease-in-out">
        <Link to="/sale" className="summer-sale__li">
          Đồng giá chỉ từ
          <br /> 225k
        </Link>
        <Link to="/sale" className="summer-sale__li mt-2">
          Siêu sale liền tay
          <br /> 70%
        </Link>
      </ul>
    </div>
  );
}
