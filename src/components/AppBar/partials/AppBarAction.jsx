import { Link } from "react-router";
import CartAction from "./CartAction";
import { FaRegUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import Cookies from "js-cookie"
import { useState } from "react";
export default function AppBarAction() {
  // const [isLogged, setIsLogged] = useState(!!Cookies.get("isLogged"))

  return (
    <div className="flex gap-[12px] sm:gap-[20px] ">
      <button title="Search button" className="sm:hidden hover-effect hover:text-red">
        <IoSearch className="w-[20px] h-auto " />
      </button>

      <Link to={"/favorite"} className="flex gap-1 items-center hover:text-red">
        <FaRegHeart className="w-[20px]  h-auto" />
        <span className="hidden sm:inline">0</span>
      </Link>

      <CartAction />

      <Link to={"/user/profile"} className="hidden sm:flex items-center hover:text-red">
        <FaRegUser className="w-[18x] h-auto" />
      </Link>
    </div>
  );
}
