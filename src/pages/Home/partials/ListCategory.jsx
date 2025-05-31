import CategoryItem from "./CategoryItem";
import { CATEGORY_LIST } from "../../../constant/CategoryList";
export default function ListCategory() {
  return (
    <div className="hidden sm:flex max-w-[1240px] w-full mx-auto justify-center gap-[30px] py-[60px] perspective-normal flex-wrap px-4">
      {CATEGORY_LIST?.map((data, index) => (
        <CategoryItem
          key={index}
          imgLink={data?.imgLink}
          link={data?.link}
          text={data?.text}
        />
      ))}
    </div>
  );
}
