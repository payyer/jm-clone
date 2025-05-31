import { Link } from "react-router";

export default function CategoryItem({ imgLink, text, link }) {
  return (
    <Link
      to={link}
      className="group h-[120px] w-[120px] rounded-full border-dashed border-[1px] border-gray-800 p-2"
    >
      <div className="flex justify-between items-center flex-col py-4 bg-gray-700 group-hover:bg-black-300 w-full h-full rounded-full">
        <img
          src={imgLink}
          alt=""
          width={40}
          height={40}
          loading="lazy"
          decoding="async"
          className="transform group-hover:rotate-y-[360deg] group-hover:invert transition-effect w-[40px] h-[40px] object-contain"
        />
        <span className="text-[14px] text-gray-400 group-hover:text-white font-medium uppercase">
          {text}
        </span>
      </div>
    </Link>
  );
}
