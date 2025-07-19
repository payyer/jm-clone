import ProductDetailInfo from "./ProductAccordion";
import ProductForm from "./ProductForm";

export default function ProductInfo() {
    return (
        <div className="flex-1">
            <h1 className="text-[30px] text-gray-400 font-medium">Đầm 2 dây vặn dây ngực, nhún chân</h1>
            <span className="text-[24px] text-red-200 font-medium block py-[20px] mb-[20px] border-dashed border-b-[1px] border-b-black-400">895,000đ</span>

            <ProductForm />

            <ProductDetailInfo />

        </div>
    )
}
