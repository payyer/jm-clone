import HotProductList from "./HotProductList";

export default function HotProduct() {
  return (
    <section className="max-w-[1284px] mx-auto px-4">
      <h3 className="text-center text-[26px] text-gray-400 uppercase font-medium my-[42px] ">
        SẢN PHẨM BÁN CHẠY
      </h3>

      <HotProductList />
    </section>
  );
}
