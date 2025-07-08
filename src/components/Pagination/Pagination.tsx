import { Link, useSearchParams } from "react-router";

export default function Pagination({ className, totalPage = 5 }) {

    const [searchParams] = useSearchParams();
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
                <li>
                    <Link to={createPageLink(pageActive + 1)} className="p-2 px-4 rounded-full cursor-pointer">
                        Next
                    </Link>
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

                {pageActive < totalPage && (
                    <li>
                        <Link to={createPageLink(pageActive + 1)} className="p-2 px-4 rounded-full cursor-pointer">
                            Next
                        </Link>
                    </li>
                )}

            </ul>
        </div>
    )
}
