import Logo from "./partials/Logo";
import Burger from "./partials/Burger";
import SubAppBar from "./partials/SubAppBar";
import AppBarAction from "./partials/AppBarAction";
import AppBarCategories from "./partials/AppBarCategories";

export default function AppBar() {
  return (
    <nav>
      <div className="h-[54px] sm:h-[94px]  flex items-center justify-center border-b-1 border-black-100">
        <div className="relative h-full sm:h-[48px] max-w-[1240px] px-[16px] sm:px-[20px] w-full flex items-center justify-between">
          <Burger />
          <Logo />
          <AppBarCategories />
          <AppBarAction />
        </div>
      </div>
      <SubAppBar />
    </nav>
  );
}
