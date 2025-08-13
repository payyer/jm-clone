import { lazy } from "react";
import Profile from "../pages/Profile";
const Campaign = lazy(() => import("../pages/Campaign"));
const Cart = lazy(() => import("../pages/Cart"));
const Checkout = lazy(() => import("../pages/Checkout"));
const Favorite = lazy(() => import("../pages/Favorite"));
const Home = lazy(() => import("../pages/Home"));
const ProductPage = lazy(() => import("../pages/Product"));
const SearchPage = lazy(() => import("../pages/Search"));
const Signin = lazy(() => import("../pages/Signin"));

export const router = {
    public: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/user/signin",
            element: <Signin />
        },
        {
            path: "/product/:id",
            element: <ProductPage />
        },
        {
            path: "/search",
            element: <SearchPage />
        },
        {
            path: "/cart/checkout",
            element: <Checkout />
        },
        {
            path: "/favorite",
            element: <Favorite />
        },
        {
            path: "/campaign/:collection",
            element: <Campaign />
        },
    ],
    protected: [
        {
            path: "/cart",
            element: <Cart />
        },
        {
            path: "/favorite",
            element: <Favorite />
        },
        {
            path: "/user/profile",
            element: <Profile />
        }
    ]
}