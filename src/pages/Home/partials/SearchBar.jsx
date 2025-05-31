export default function SearchBar() {
  return (
    <form className="hidden sm:flex absolute bottom-[20px] bg-white max-w-[680px] rounded-[4px] overflow-hidden border-1 border-white w-full h-[40px] left-1/2 -translate-x-1/2 z-[2]">
      <input
        type="text"
        className="flex-1 outline-transparent px-6 text-[14px] focus:outline-black-300 text-black "
        placeholder="Bạn muốn tìm sản phầm gì"
      />
      <button
        type="submit"
        className="hover-effect flex items-center justify-around w-[118px] text-[14px] bg-gray-400 text-white  "
      >
        Tìm kiếm ngay
      </button>
    </form>
  );
}
