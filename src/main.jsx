import "./index.css";
import "swiper/css";
import Home from "./pages/Home";
import { StrictMode } from "react";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Layout from "./components/Layout";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import ScrollToTop from "./lib/ScrollToTop";
import { router } from "./lib/router";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            {router.map((route, index) =>
              <Route key={index} path={route.path} element={route.element} />
            )}
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
