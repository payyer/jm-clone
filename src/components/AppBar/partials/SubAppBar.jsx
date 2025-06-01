import { Link } from "react-router";
import mapsIcon from "../../../assets/AppBar/maps-icon.png";
import truckIcon from "../../../assets/AppBar/truck-icon.png";
import noteIcon from "../../../assets/AppBar/note-icon.png";

const infor = [
  {
    link: "/",
    text: "Hệ thống cửa hàng",
    img: mapsIcon,
  },
  {
    link: "/",
    text: "Thông tin vận chuyển",
    img: truckIcon,
  },
  {
    link: "/",
    text: "Chính sách tích điểm",
    img: noteIcon,
  },
];
const category = {
  section01: [
    {
      link: "/",
      text: "Đồ đi làm",
    },
    {
      link: "/",
      text: "Đồ đi chơi",
    },
    {
      link: "/",
      text: "Đồ đi tiệc",
    },
    {
      link: "/",
      text: "Xu hướng",
    },
  ],
  section02: [
    {
      link: "/",
      text: "Giảm giá",
    },
    {
      link: "/",
      text: "Chính sách bảo hành",
    },
    {
      link: "/",
      text: "Thông tin vận chuyển",
    },
    {
      link: "/",
      text: "Hệ thống cửa hàng",
    },
  ],
};
export default function SubAppBar() {
  return (
    <div className="pt-[54px] sm:pt-[94px] sm:bg-gray">
      <ul className="flex flex-wrap sm:hidden items-center justify-center gap-x-[16px] py-[16px]">
        {category?.section01?.map((data, index) => (
          <li key={index}>
            <Link
              to={data?.link}
              className={`uppercase hover-effect text-gray-200 text-[14px] font-bold ${
                index === 3 && "text-red-100"
              }`}
            >
              {data?.text}
            </Link>
          </li>
        ))}
      </ul>

      <div className="hidden sm:flex h-[48px] max-w-[1280px] m-auto  items-center justify-evenly px-[20px]">
        {infor.map((data, index) => (
          <Link
            key={index}
            to={data.link}
            className="flex items-center gap-[24px] hover-effect"
          >
            <img
              className="h-auto w-[32px]"
              src={data.img}
              alt=""
              width={32}
              height={29}
              loading="eager"
              decoding="async"
            />
            <span className="text-gray-100 text-[16px] font-medium leading-[23px]">
              {data.text}
            </span>
          </Link>
        ))}
      </div>

      <div className="flex items-center justify-center text-center gap-2 sm:hidden max-w-[375px] m-auto pb-[16px]">
        {category?.section02?.map((data, index) => (
          <Link
            key={index}
            to={data?.link}
            className={`flex items-center justify-center rounded-[4px] text-[10px] text-gray-200 font-bold "text-gray-200 h-[38px] w-[80px] border-black-200 border-1 ${
              index === 0 && "text-red-100 border-pink text-[12px] uppercase"
            }  `}
          >
            {data?.text}
          </Link>
        ))}
      </div>
    </div>
  );
}
