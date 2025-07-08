import Pagination from "../../components/Pagination/Pagination";
import SearchBar from "../../components/SearchBar";
import ProductList from "./partial/ProductList";
import Filter from "./partial/Filter";

export default function SearchPage() {
    return (
        <div className="main-container ">
            <SearchBar />

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Filter />
                <ProductList />
            </div>

            <Pagination className={"max-w-[1056px] ml-auto mt-4"} />
        </div>
    )
}
