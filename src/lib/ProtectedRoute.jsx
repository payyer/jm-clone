import { Navigate, Outlet } from "react-router"
import Cookies from "js-cookie"
const ProtectedRoutes = () => {
    const isLogged = Cookies.get("isLogged")
    return isLogged ? <Outlet /> : <Navigate to={"/user/signin"} />
}

export default ProtectedRoutes