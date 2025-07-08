import { Link } from "react-router";
import { product_02 } from "../../assets/Products";
import ProductColors from "./partials/ProductColors";
import ProductRating from "./partials/ProductRating";
import { useState } from "react";
export default function ProductItem() {
  const [productColor, setProductColor] = useState(product_02);
  return (
    <Link to={"/product/1"}>
      <img
        src={productColor}
        width={187}
        height={280}
        alt=""
        loading="lazy"
        decoding="async"
        className="w-full h-auto"
      />
      <h4 className="line-clamp-1 text-[14px] text-gray-400 font-medium leading-[20px] mt-3 mb-2">
        Đầm 2 dây vặn dây ngực, nhún chân
      </h4>

      <ProductColors setProductColor={setProductColor} />

      <span className=" text-red-200 text-[14px] font-medium">525,000đ</span>

      <ProductRating />
    </Link>
  );
}
