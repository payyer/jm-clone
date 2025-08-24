import { lazy } from "react";
import DashboardProduct from "../pages/DashboardProduct";
const Campaign = lazy(() => import("../pages/Campaign"));
const Profile = lazy(() => import("../pages/Profile"));
const Cart = lazy(() => import("../pages/Cart"));
const Checkout = lazy(() => import("../pages/Checkout"));
const Favorite = lazy(() => import("../pages/Favorite"));
const Home = lazy(() => import("../pages/Home"));
const ProductPage = lazy(() => import("../pages/Product"));
const SearchPage = lazy(() => import("../pages/Search"));
const Signin = lazy(() => import("../pages/Signin"));
const ChangePassword = lazy(() => import("../pages/ChangePassword"));
const Dashboard = lazy(() => import("../pages/Dashboard"));

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
        {
            path: "/user/change-password",
            element: <ChangePassword />
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
    ],
    admin: [
        {
            path: "/dashboard",
            element: <Dashboard />
        },
        {
            path: "/dashboard/products",
            element: <DashboardProduct />
        }
    ]
}