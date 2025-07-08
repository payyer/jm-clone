import "./index.css";
import "swiper/css";
import Home from "./pages/Home";
import { StrictMode } from "react";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Layout from "./components/Layout";
import ProductPage from "./pages/Product";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import SearchPage from "./pages/Search";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/product/:id" element={<Layout />}>
            <Route index element={<ProductPage />} />
          </Route>
          <Route path="/search" element={<Layout />}>
            <Route index element={<SearchPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
