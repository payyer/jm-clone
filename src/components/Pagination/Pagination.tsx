import { Link, useSearchParams } from "react-router";

export default function Pagination({ className, currentPage, totalPage = 5 }) {

    const [searchParams, setSearchParams] = useSearchParams();
    let pageActive = Number(searchParams.get("page") || 1)
    const currentParams = Object.fromEntries(searchParams.entries())

    const createPageLink = (pageNumber) => {
        const params = new URLSearchParams(currentParams);
        params.set("page", pageNumber);
        return `?${params.toString()}`;
    };

    return (
        <div className={className}>
            <ul className="flex items-center justify-center gap-2">
                <li >
                    <Link to={createPageLink(pageActive - 1)} className="flex items-center justify-center w-[50px] h-[40px] rounded-full cursor-pointer ">Prev</Link>
                </li>

                {Array.from({ length: totalPage }).map((_, index) =>
                    <li key={index}>
                        <Link
                            to={createPageLink(index + 1)}
                            className={`flex items-center justify-center w-[40px] h-[40px] rounded-full cursor-pointer font-semibold ${pageActive === (index + 1) ? "bg-[#303030] text-gray-500" : ""} `} >
                            {index + 1}
                        </Link>
                    </li>
                )}

                <li >
                    <button className="flex items-center justify-center w-[50px] h-[40px] rounded-full cursor-pointer " onClick={createPageLink}>Next</button>
                </li>

            </ul>
        </div>
    )
}
