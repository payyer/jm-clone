import { Outlet } from "react-router";
import AppBar from "../AppBar";
import BurgerModal from "./partials/BurgerModal";
import Footer from "../Footer"

export default function Layout() {
  return (
    <>
      <AppBar />
      <main>
        <Outlet />
      </main>

      <Footer />

      <BurgerModal />
    </>
  );
}
