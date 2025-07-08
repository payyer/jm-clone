import { useSearchParams } from "react-router";

const listCategory = [
    { text: "Đầm", nameAndId: "dress" },
    { text: "Áo", nameAndId: "clothes" },
    { text: "Quần", nameAndId: "pants" },
    { text: "Chân Vấy", nameAndId: "skirts" },
    { text: "Áo Khoác", nameAndId: "jackets" },
    { text: "Sale", nameAndId: "sale" },
    { text: "Phụ kiện", nameAndId: "accessories" },
]

export default function Filter() {
    const [searchParams, setSearchParams] = useSearchParams()
    const handleCheckbox = (e) => {
        const category = e.target.name;
        const isChecked = e.target.checked;

        const currentParams = Object.fromEntries(searchParams.entries())
        let categories = searchParams.getAll("category")

        if (isChecked) {
            categories.push(category)
        } else {
            categories = categories.filter((c) => c !== category)
        }

        const newParams = new URLSearchParams(currentParams)
        newParams.delete("category");
        categories.forEach((c) => newParams.append("category", c));

        setSearchParams(newParams);
    }
    return (
        <aside className=" sm:sticky sm:top-[100px] sm:max-w-[180px] w-full h-max border-r-black-100">
            <p className="text-lg font-semibold">Dòng sản phẩm</p>
            <ul className="flex sm:block  items-center flex-wrap gap-4">
                {listCategory.map((data, index) =>
                    <li key={index} className="pt-2 ">
                        <label htmlFor={data.nameAndId} className="text-sx font-semibold cursor-pointer flex justify-between items-center gap-2">
                            <span>{data.text}</span>
                            <input type="checkbox" name={data.nameAndId} id={data.nameAndId} className="cursor-pointer" onClick={handleCheckbox} />
                        </label>
                    </li>
                )}
            </ul>
        </aside>
    )
}
