import { Link } from "react-router";
import { BANNER_PROMOTION } from "../../../constant/BannerPromotion";

export default function BannerPromotion() {
  return (
    <div className="max-w-[1284px] grid grid-cols-1 sm:grid-cols-2 mx-auto gap-4 pt-[60px] px-4">
      {BANNER_PROMOTION?.map((data, index) => {
        return (
          <Link
            key={index}
            to={data?.link}
            className="group h-fit sm:h-[232px] overflow-hidden"
          >
            <img
              width={622}
              height={208}
              src={data?.imgLink}
              alt={data?.altText}
              loading="lazy"
              decoding="async"
              className="w-full h-full transition-effect object-contain sm:object-cover group-hover:scale-[1.2] group-hover:opacity-70"
            />
          </Link>
        );
      })}
    </div>
  );
}
