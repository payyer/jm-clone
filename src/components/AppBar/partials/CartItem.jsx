import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Link } from "react-router";

export default function CartItem() {
  const [count, setCount] = useState(1);
  const increaseCount = () => {
    setCount((prev) => prev + 1);
  };
  const decreaseCount = () => {
    setCount((prev) => {
      if (prev <= 1) return 1;
      return prev - 1;
    });
  };
  return (
    <div className="flex gap-3">
      {/* Img Item */}
      <img
        src="https://pos.nvncdn.com/4ef0bf-108661/ps/20250515_IraIJMkkqz.jpeg"
        alt="Đầm 2 dây đính nơ vai"
        loading="lazy"
        decoding="async"
        width={70}
        height={90}
        className="object-contain w-[70px] h-[90px]"
      />
      {/* Item Detail */}
      <div className="flex flex-col font-medium">
        <Link
          to={"/"}
          className="text-gray-400 text-[14px] leading-[20px] font-medium"
        >
          Đầm 2 dây dính nơ vai, cổ U - Đen - S
        </Link>

        <div className="mb-1">
          <span className="text-red-200 text-[14px] ">725,000₫</span>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[12px]">Số lượng:</span>
            <div className="flex gap-1">
              <button className="hover-effect" onClick={decreaseCount}>
                <FaMinus className="text-gray-200 text-[10px]" />
              </button>
              <input
                type="text"
                value={count}
                className="w-[20px] text-[14px] text-center"
                readOnly
              />
              <button className="hover-effect" onClick={increaseCount}>
                <FaPlus className="text-gray-200 text-[10px]" />
              </button>
            </div>
          </div>
          <button className="text-[16px] text-red-200 hover-effect underline-offset-1 underline">
            xóa
          </button>
        </div>
      </div>
    </div>
  );
}
