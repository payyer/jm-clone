import SummerSale from "./SummerSale";
import { Link } from "react-router";
const categories = [
  {
    link: "/",
    text: "Đầm",
  },
  {
    link: "/",
    text: "Áo",
  },
  {
    link: "/",
    text: "Quần",
  },
  {
    link: "/",
    text: "Chân váy",
  },
  {
    link: "/",
    text: "Áo khoác",
  },
  {
    link: "/",
    text: "Lookbook",
  },
  {
    link: "/",
    text: "Street 2025",
  },
];

export default function AppBarCategories() {
  return (
    <div className="hidden sm:hidden lg:flex lg:gap-[36px]">
      <SummerSale />
      {categories.map((data, index) => (
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
