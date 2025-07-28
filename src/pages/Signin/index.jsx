import { Link } from "react-router";
import Login from "./partials/Login";
import Register from "./partials/Register";
import { mv03, mv02 } from "../../assets/Main_visual";
import { useState } from "react";
export default function Signin() {
    const [step, setStep] = useState("login")
    return (
        <section className="main-container flex flex-col sm:flex-row flex-wrap gap-[4%]">
            <div className="flex justify-center gap-[4%] sm:hidden">
                <button onClick={() => { setStep("login") }}>
                    <h2 className={`text-[18px] font-bold opacity-50 ${step === "login" && "underline underline-offset-[10px] opacity-100"}`}>Đăng nhập</h2>
                </button>
                <button onClick={() => { setStep("register") }}>
                    <h2 className={`text-[18px] font-bold opacity-50 ${step === "register" && "underline underline-offset-[10px] opacity-100"}`}>Đăng Ký</h2>
                </button>
            </div>


            <div className={`sm:w-[48%] ${step === "login" ? "block" : "hidden"} sm:block`}>
                <h2 className={`text-[18px] font-bold hidden sm:block`}>Đăng nhập</h2>
                <Login />
            </div>

            <div className={`sm:w-[48%] ${step === "register" ? "block" : "hidden"} sm:block`}>
                <h2 className={`text-[18px] font-bold hidden sm:block`}>Đăng ký</h2>
                <Register />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-[2%] w-full mt-10">
                <Link to={"/campaign/lac-giua-rung-mo"} className="w-full sm:w-[49%] overflow-hidden block group">
                    <img className="w-full h-auto block object-cover group-hover:scale-[1.2] transition-effect" src={mv03} alt="Thumb" />
                </Link>

                <Link to={"/campaign/dong-chay-thanh-lich"} className="w-full sm:w-[49%] overflow-hidden block group">
                    <img className="w-full h-auto block object-cover group-hover:scale-[1.2] transition-effect" src={mv02} alt="Thumb" />
                </Link>
            </div>

        </section>
    )
}
