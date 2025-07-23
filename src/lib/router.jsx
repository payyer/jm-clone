import Campaign from "../pages/Campaign";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Favorite from "../pages/Favorite";
import Home from "../pages/Home";
import ProductPage from "../pages/Product";
import SearchPage from "../pages/Search";
import Signin from "../pages/Signin";

export const router = [
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
        path: "/cart",
        element: <Cart />
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
]