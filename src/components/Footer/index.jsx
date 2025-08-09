import { Link } from "react-router";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { AiTwotoneMail } from "react-icons/ai";
export default function Footer() {
    return (
        <footer className=" bg-[#232222] py-[60px]">
            <div className="max-w-[1284px] px-4 mx-auto grid grid-cols-4 gap-4 text-white">
                <section>
                    <h5 className="uppercase text-[16px] font-bold mb-[10px]">JM DRESS DESIGN</h5>
                    <ul className="flex flex-col gap-2">
                        <li><Link to={"/"}>Giới thiệu</Link></li>
                        <li><Link to={"/"}>Tin tức</Link></li>
                        <li><Link to={"/"}>Hệ thống cửa hàng</Link></li>
                        <li><Link to={"/"}>Thông tin tuyển dụng</Link></li>
                        <li><Link to={"/"}>Liên hệ hợp tác kinh doanh</Link></li>
                        <li><img src="https://pos.nvncdn.com/4ef0bf-108661/contentKey/20230317_6VOgJAwz.png" alt="Chứng nhận bộ công thương" width={150} height={56} loading="lazy" /></li>
                    </ul>
                </section>
                <section>
                    <h5 className="uppercase text-[16px] font-bold mb-[10px]">JM DRESS DESIGN</h5>
                    <ul className="flex flex-col gap-2">
                        <li><Link className="flex items-center gap-2" to={"/"}><FaFacebook />Facebook</Link></li>
                        <li><Link className="flex items-center gap-2" to={"/"}><FaInstagram />Instagram</Link></li>
                        <li><Link className="flex items-center gap-2" to={"/"}><FaYoutube />Facebook</Link></li>
                        <li><Link className="flex items-center gap-2" to={"/"}><AiTwotoneMail />Facebook</Link></li>

                    </ul>
                </section>
            </div>
        </footer>
    )
}
