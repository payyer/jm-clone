import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import "./index.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import "swiper/css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
