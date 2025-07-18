import { IoMdHeartEmpty } from "react-icons/io";
import { product_02, product_02_black } from "../../../assets/Products";

export default function ProductColors({ setProductColor }) {
  return (
    <div className=" flex justify-between items-center">
      <ul className="flex items-center pl-[1px]">
        <li
          onMouseEnter={() => setProductColor(product_02)}
          onMouseLeave={() => setProductColor(product_02)}
          className="rounded-full p-1 hover:outline-1 hover:outline-gray-300"
        >
          <span className="block border border-border w-4 h-4 rounded-full  bg-[#DBD0C0]"></span>
        </li>
        <li
          onMouseEnter={() => setProductColor(product_02_black)}
          onMouseLeave={() => setProductColor(product_02)}
          className="rounded-full p-1 hover:outline-1 hover:outline-gray-300"
        >
          <span className="block border border-border w-4 h-4 rounded-full  bg-[#000]"></span>
        </li>
      </ul>
      <button title="Add to favorite product button" className="cursor-pointer">
        <IoMdHeartEmpty className="text-[18px] hover:text-red-200" />
      </button>
    </div>
  );
}
