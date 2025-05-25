import SummerSale from "./SummerSale";
import { Link } from "react-router";
import { APP_BAR_CATEGORIES } from "../../../constant/AppBar";

export default function AppBarCategories() {
  return (
    <div className="hidden sm:hidden lg:flex lg:gap-[36px]">
      <SummerSale />
      {APP_BAR_CATEGORIES.map((data, index) => (
        <Link
          key={index}
          to={data?.link}
          className="font-bold text-[14px] leading-[20px] text-primary uppercase nav-text-hover"
        >
          {data?.text}
        </Link>
      ))}
    </div>
  );
}
