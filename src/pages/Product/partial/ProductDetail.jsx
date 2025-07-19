import ProductImageGallery from "./ProductImageGallery";
import ProductInfo from "./ProductInfo";

export default function ProductDetail() {
    return (
        <div className="mt-4 flex flex-col sm:flex-row gap-[30px]">
            <ProductImageGallery />
            <ProductInfo />
        </div>
    )
}
