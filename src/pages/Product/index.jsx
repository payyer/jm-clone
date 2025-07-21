import SearchBar from "../../components/SearchBar";
import ProductDetail from "./partial/ProductDetail";
import ProductRating from "./partial/ProductRating";
import SuggestedProduct from "../Home/partials/SuggestedProduct"

export default function ProductPage() {
    return (
        <section className="main-container">
            <SearchBar />
            <ProductDetail />

            <ProductRating />
            <SuggestedProduct heading={"có thể bạn sẽ thích"} />
        </section>
    )
}
