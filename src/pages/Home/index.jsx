import BannerPromotion from "./partials/BannerPromotion.jsx";
import HotProduct from "./partials/HotProduct.jsx";
import ListCategory from "./partials/ListCategory.jsx";
import MainVisual from "./partials/MainVisual.jsx";

export default function Home() {
  return (
    <>
      <h1 className="hidden">
        Thương hiệu thời trang nữ JM có hệ thống cửa hàng toàn quốc
      </h1>

      <MainVisual />

      <ListCategory />

      <BannerPromotion />

      <HotProduct />
    </>
  );
}
