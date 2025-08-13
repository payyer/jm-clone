import OrderHistory from "./partials/OrderHistory";
import UserInfo from "./partials/UserInfo";

export default function Profile() {
    return (
        <div className="small-container ">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <UserInfo />
                <OrderHistory />
            </div>
        </div>
    )
}
