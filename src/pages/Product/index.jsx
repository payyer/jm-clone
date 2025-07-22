import SearchBar from "../../components/SearchBar";
import ProductDetail from "./partial/ProductDetail";
import SuggestedProduct from "../Home/partials/SuggestedProduct"
import ProductRating from "./partial/ProductRating";

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
