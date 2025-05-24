import { Outlet } from "react-router";
import AppBar from "../AppBar";
import BurgerModal from "./partials/BurgerModal";

export default function Layout() {
  return (
    <>
      <AppBar />
      <main>
        <Outlet />
      </main>

      <BurgerModal />
    </>
  );
}
