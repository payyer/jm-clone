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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from "sonner";
import ProtectedRoutes from "./lib/ProtectedRoute";
const queryClient = new QueryClient()

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={"Loading..."}>
            <Routes>
              <Route path="*" element={<NotFoundPage />}></Route>
              <Route element={<Layout />}>
                {router.public.map((route, index) =>
                  <Route key={index} path={route.path} element={route.element} />
                )}
              </Route>
              <Route element={<ProtectedRoutes />}>
                <Route element={<Layout />}>
                  {router.protected.map((route, index) =>
                    <Route key={index} path={route.path} element={route.element} />
                  )}
                </Route>
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
        <Toaster />
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
