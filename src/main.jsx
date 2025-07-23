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
import ScrollToTop from "./lib/ScrollToTop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout"
import Signin from "./pages/Signin";
import Favorite from "./pages/Favorite";
import Campaign from "./pages/Campaign";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/user" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="signin" element={<Signin />} />
          </Route>
          <Route path="/product/:id" element={<Layout />}>
            <Route index element={<ProductPage />} />
          </Route>
          <Route path="/search" element={<Layout />}>
            <Route index element={<SearchPage />} />
          </Route>
          <Route path="/cart" element={<Layout />}>
            <Route index element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>
          <Route path="/favorite" element={<Layout />}>
            <Route index element={<Favorite />} />
          </Route>
          <Route path="/campaign/:collection" element={<Layout />}>
            <Route index element={<Campaign />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
