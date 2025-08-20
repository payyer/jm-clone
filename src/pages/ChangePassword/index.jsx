import GetOtp from "./partials/GetOtp";
import { useState } from "react";
import ResetPassword from "./partials/ResetPassword";

export default function ChangePassword() {
    const [email, setEmail] = useState("")
    return (
        <section className="p-4 max-w-[640px] mx-auto ">
            <h1 className="text-[26px] text-[#333] font-medium text-center mt-[20px]">Thay đổi mật khẩu</h1>
            {email ? <ResetPassword email={email} /> : <GetOtp setEmail={setEmail} />}
            {/* <ResetPassword email={email} /> */}
        </section>
    )
}
