import { Link } from "react-router";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";
import { product_02 } from "../../assets/Products"
import { FaMinus, FaPlus } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
export default function index() {
    return (
        <section className="small-container">
            <h2 className="text-[26px] font-bold uppercase text-center">sản phẩm yêu thích</h2>
            <p className="text-[14px] font-semibold text-center">Có 0 sản phẩm trong mục ưu thích của bạn</p>

            <Table className={"mt-8"}>
                <TableHeader className={"h-[60px] bg-[#f6f6f6]"}>
                    <TableRow className={undefined}>
                        <TableHead className=" px-8">Hình ảnh</TableHead>
                        <TableHead className={" px-8"}>Thông tin</TableHead>
                        <TableHead className=" text-right px-8">Giá tiền</TableHead>
                        <TableHead className="px-8"></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className={undefined}>
                    <TableRow className={undefined}>
                        <TableCell className="font-medium px-8">
                            <img src={product_02} className="w-[120px] h-auto rounded-[4px]" width={78} height={118} alt="name" loading="lazy" />
                        </TableCell>
                        <TableCell className={"text-gray-400 font-bold px-8"}>
                            <Link className="" to={"/"}>Đầm 2 dây dính nơ vai, cổ U - Đen - S</Link>
                        </TableCell>
                        <TableCell className="text-right px-8 text-red-200 font-bold text-[16px]">700.000đ</TableCell>
                        <TableCell className="text-right px-8">
                            <button title="delete product"><FaXmark className="text-red-200 text-[24px]" /></button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </section>
    )
}
