import "./index.css";
import "swiper/css";
import { StrictMode, Suspense } from "react";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Layout from "./components/Layout";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import ScrollToTop from "./lib/ScrollToTop";
import { router } from "./lib/router";
import NotFoundPage from "./pages/NotFound";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={"Loading..."}>
          <Routes>
            <Route path="*" element={<NotFoundPage />}></Route>
            <Route element={<Layout />}>
              {router.map((route, index) =>
                <Route key={index} path={route.path} element={route.element} />
              )}
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
