import SearchBar from "../../components/SearchBar";
import ProductDetail from "./partial/ProductDetail";

export default function ProductPage() {
    return (
        <section className="main-container ">
            <SearchBar />
            <ProductDetail />
        </section>
    )
}
