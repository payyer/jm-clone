import { IoStar } from "react-icons/io5";

export default function ProductRating() {
  return (
    <div className="flex justify-between">
      <div className="flex items-center">
        <IoStar className="text-black-400 text-[14px]" />
        <IoStar className="text-black-400 text-[14px]" />
        <IoStar className="text-black-400 text-[14px]" />
        <IoStar className="text-black-400 text-[14px]" />
        <IoStar className="text-black-400  text-[14px]" />
        <span className="text-[14px] text-gray-200">(0)</span>
      </div>
      <span className="text-[12px] text-gray-200">(336 đã bán)</span>
    </div>
  );
}
