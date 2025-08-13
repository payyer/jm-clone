import { Outlet } from "react-router";
import AppBar from "../AppBar";
import BurgerModal from "./partials/BurgerModal";
import Footer from "../Footer"

export default function Layout() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <AppBar />
      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />

      <BurgerModal />
    </div>
  );
}
