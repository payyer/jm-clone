import ProductItem from "../../../components/ProductItem";

export default function ProductList({ className }) {
    return (
        <div className={`flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 ${className}`}>
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
        </div>
    )
}
