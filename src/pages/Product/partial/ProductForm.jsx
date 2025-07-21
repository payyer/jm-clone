import { FaMinus, FaPlus, FaRegHeart } from "react-icons/fa"

export default function ProductForm() {
    const colors = [{ name: "white", color: "#e3d9d7" }, { name: "black", color: "#000" }]
    const sizes = ["S", "M", "L"]
    return (
        <form className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
                <span className="min-w-[80px] text-[16px] text-gray-400 font-medium">Màu sắc:</span>

                <ul className="flex gap-4">
                    {colors?.map((data, index) =>
                        <li key={index}>
                            <input id={`color-${data.name}`} name="color" className="peer cursor-pointer hidden h-[24px] w-[24px] rounded-full border-[1px] border-b-black-400" type="radio" value={"white"} />
                            <label className={`block w-[24px] h-[24px] bg-[${data.color}] peer-checked:border-red-200 peer-checked:border-[2px] rounded-full border border-border cursor-pointer`} title={`color-${data.name}`} htmlFor={`color-${data.name}`}></label>
                        </li>
                    )}

                </ul>
            </div>

            <div className="flex items-center gap-4">
                <span className="min-w-[80px] text-[16px] text-gray-400 font-medium">Size:</span>
                <ul className="flex gap-4">
                    {sizes.map((size, index) =>
                        <li key={index}>
                            <input id={`size-${size}`} name="size" className="peer cursor-pointer hidden  rounded-full border-[1px] border-b-black-400" type="radio" value={`${size}`} />
                            <label htmlFor={`size-${size}`} className="flex items-center justify-center h-[30px] w-[24px] bg-[#fff] text-[14px] font-medium peer-checked:bg-red-200 peer-checked:text-white border border-border cursor-pointer">{size}</label>
                        </li>
                    )}
                </ul>
            </div>

            <div className="flex items-center gap-4 text-[14px] font-medium">
                <span className="min-w-[80px] text-[16px] text-gray-400 font-medium">Số lượng:</span>
                <button type="button"><FaMinus /></button>
                <input className="w-[40px] text-center" id="count" type="text" defaultValue={1} />
                <label htmlFor="count" title="count" className="hidden"></label>
                <button type="button"><FaPlus /></button>
            </div>

            <div className="hidden sm:flex items-center gap-4 text-[14px] font-medium h-[54px] ">
                <button type="button" title="Yêu thích sản phẩm" className="flex shrink-0 items-center justify-center text-[20px] text-[#303030] w-[54px] h-full rounded-[4px] bg-[#E9E9E9]"><FaRegHeart /></button>
                <button type="button" title="Thêm vào giỏ hàng" className="text-[14px] uppercase font-medium px-[18px] border-black border-[1px] rounded-[4px] h-full"><span>Thêm vào giỏ hàng</span></button>
                <button type="button" title="Mua ngay" className="text-[14px] uppercase font-medium px-[18px] border-black border-[1px] rounded-[4px] h-full text-white bg-black"><span>Mua ngay</span></button>
            </div>

            <div className="fixed sm:hidden z-[99] left-0 bg-white w-full flex gap-4 bottom-0 h-[84px] p-[15px] border-t-[1px] border-b-[#00000040]">
                <div className="flex-1 gap-4 flex items-center ">
                    <button type="button" title="Thêm vào giỏ hàng" className="text-[14px] uppercase font-medium px-[18px] border-black border-[1px] rounded-[4px]  w-[50%] h-full"><span>Thêm vào giỏ hàng</span></button>
                    <button type="button" title="Mua ngay" className="text-[14px] uppercase font-medium px-[18px] border-black border-[1px] rounded-[4px] h-full w-[50%]  text-white bg-black"><span>Mua ngay</span></button>
                </div>
                <button type="button" title="Yêu thích sản phẩm" className="flex items-center justify-center text-[20px] text-[#303030] w-[54px] h-full rounded-[4px] bg-[#E9E9E9]"><FaRegHeart /></button>
            </div>
        </form>
    )
}
