import { NavLink } from "react-router";
import jmLogo from "../../assets/jm-logo.png";
import SummerSale from "./partials/SummerSale";
export default function Home() {
  return (
    <main>
      <nav className="h-[94px] flex items-center  justify-center border-b-[1px] border-red-400">
        <div className="h-[48px] max-w-[1180px] px-[20px] w-full flex items-center justify-between">
          <NavLink to="/" end className="hover-effect">
            <img
              className="h-auto w-[102px]"
              src={jmLogo}
              height={48}
              width={101}
              alt="JM DRESS DESIGN"
              loading="eager"
              decoding="async"
            />
          </NavLink>

          <div className="flex">
            <SummerSale />
          </div>
        </div>
      </nav>
    </main>
  );
}
