import { createSearchParams, useNavigate, useSearchParams } from "react-router"
export default function SearchBar({ className }) {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams()
    const handleSearch = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target)
        const name = formData.get('name')
        const currentParams = Object.fromEntries(searchParams.entries())
        const newParams = {
            ...currentParams,
            name,
            page: "1",
        };
        navigate({
            pathname: "/search",
            search: `?${createSearchParams(newParams)}`,
        });
    }
    return (
        <form onSubmit={handleSearch} className={`max-w-[800px] w-full mx-auto p-[1px] flex items-center h-[40px] ${className} border-white border-[1px] shadow-lg rounded-lg`}>
            <label htmlFor="name" className="flex-1 h-full">
                <input className="block h-full w-full px-4" id="name" name="name" type="text" placeholder="Tìm kiếm sản phẩm ..." />
            </label>

            <label htmlFor="submit" className="w-[130px] bg-black h-full flex items-center justify-center text-gray rounded-lg hover hover-effect" >
                <input className="cursor-pointer" id="submit" type="submit" value={"Tìm ngay"} />
            </label>
        </form>
    )
}
