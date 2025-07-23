import SuggestedProductList from "./SuggestedProductList";

export default function SuggestedProduct({ heading }) {
  return (
    <section className="max-w-[1284px] mx-auto px-4">
      <h3 className="text-center uppercase text-[26px] text-gray-400 font-medium my-[42px] ">
        {heading}
      </h3>

      <SuggestedProductList />
    </section>
  );
}
