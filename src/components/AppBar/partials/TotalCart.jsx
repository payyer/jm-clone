import { Link } from "react-router";

export default function TotalCart({ setIsCartPopupOpen }) {
  return (
    <>
      <div className="flex justify-between items-center pt-4 border-t border-divider">
        <span className="text-[14px] text-gray-400 font-bold">TẠM TÍNH</span>
        <span className="text-[18px] text-red-200 font-bold">725,000₫</span>
      </div>
      <Link
        onClick={() => setIsCartPopupOpen(false)}
        className="flex justify-center items-center bg-gray-400 h-10 text-white font-bold mt-4 hover-effect rounded-[4px]"
        to={"/cart"}
      >
        XEM GIỎ HÀNG
      </Link>
    </>
  );
}
