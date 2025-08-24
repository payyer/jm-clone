import { ColumnDef } from "@tanstack/react-table"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu"
import { Button } from "../../../components/ui/button"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Checkbox } from "../../../components/ui/checkbox"
export const ProductColumn: ColumnDef<any>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                className={""}
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                className={""}
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "name",
        header: ({ column }) =>
            <Button variant={'ghost'} className={""} size={""} onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                Tên
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>,
        cell: ({ row }) => {
            return <div className="text-left font-medium">{row.getValue("name")}</div>
        }
    },
    {
        accessorKey: "price",
        header: ({ column }) =>
            <Button variant={'ghost'} className={""} size={""} onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                Giá
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>,
        cell: ({ row }) => {
            const price = parseFloat(row.getValue("price"))
            const formatted = price.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND"
            });
            return <div className="text-left font-medium">{formatted}</div>
        }
    },
    {
        accessorKey: "collection",
        header: ({ column }) =>
            <Button variant={'ghost'} className={""} size={""} onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                Bộ sưu tập
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>,
        cell: ({ row }) => {
            return <div className="text-left font-medium">{row.getValue("collection")}</div>
        }
    },
    {
        id: "actions",
        header: () => <div className="text-left">Options</div>,
        cell: ({ row }) => {
            const rowData = row.original
            return <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button className="h-8 w-8 p-0" variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className={""}>
                    <DropdownMenuItem className={"cursor-pointer"} inset>
                        Chi tiết
                    </DropdownMenuItem>
                    <DropdownMenuItem className={"cursor-pointer"} inset>
                        Chỉnh sửa
                    </DropdownMenuItem>
                    <DropdownMenuItem className={"cursor-pointer"} inset>
                        Xóa
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        }
    }
]
export const ProductData = [
    {
        id: "1",
        name: "Đầm voan hoa cổ vuông",
        price: "720000",
        information: "Chất liệu voan mềm mại với họa tiết hoa nhỏ xinh, cổ vuông tôn đường nét vai thanh thoát.",
        collection: "Mùa xuân dịu dàng",
    },
    {
        id: "2",
        name: "Áo sơ mi lụa cổ nơ",
        price: "560000",
        information: "Áo sơ mi chất liệu lụa mềm, điểm nhấn cổ nơ tạo vẻ thanh lịch và nữ tính.",
        collection: "Office Chic",
    },
    {
        id: "3",
        name: "Quần tây ống rộng màu be",
        price: "680000",
        information: "Thiết kế ống rộng tôn dáng, màu be trung tính dễ phối nhiều phong cách.",
        collection: "Minimal Line",
    },
    {
        id: "4",
        name: "Chân váy xếp ly midi",
        price: "620000",
        information: "Váy midi xếp ly cổ điển, mang lại cảm giác thanh lịch và dịu dàng.",
        collection: "Everyday Chic",
    },
    {
        id: "5",
        name: "Túi xách da mini quai tròn",
        price: "950000",
        information: "Túi xách da nhân tạo cao cấp, kiểu dáng nhỏ gọn phù hợp tiệc tối.",
        collection: "Golden Night",
    },
    {
        id: "6",
        name: "Giày cao gót mũi nhọn đen",
        price: "870000",
        information: "Giày cao gót 7cm, mũi nhọn thanh lịch, phù hợp môi trường công sở.",
        collection: "Elegant Touch",
    },
    {
        id: "7",
        name: "Áo thun cotton in họa tiết",
        price: "320000",
        information: "Áo thun cotton thoáng mát, in họa tiết trẻ trung năng động.",
        collection: "Hương mùa hạ",
    },
    {
        id: "8",
        name: "Áo khoác blazer kẻ sọc",
        price: "1150000",
        information: "Blazer dáng dài kẻ sọc, mang hơi hướng menswear hiện đại.",
        collection: "Sức hút đô thị",
    },
    {
        id: "9",
        name: "Giày sneaker trắng basic",
        price: "690000",
        information: "Đôi sneaker trắng thiết kế tối giản, dễ phối với mọi outfit.",
        collection: "Street Vibes",
    },
    {
        id: "10",
        name: "Túi tote canvas in chữ",
        price: "280000",
        information: "Túi tote canvas nhẹ, tiện lợi, in chữ slogan cá tính.",
        collection: "Everyday Use",
    },
    {
        id: "11",
        name: "Đầm maxi lệch vai ánh kim",
        price: "1190000",
        information: "Sang trọng và nổi bật trong buổi tiệc tối nhờ chất liệu ánh kim cùng thiết kế lệch vai tinh tế.",
        collection: "Golden Night",
    },
    {
        id: "12",
        name: "Áo cardigan len mỏng",
        price: "540000",
        information: "Cardigan len mỏng nhẹ, dễ khoác ngoài trong tiết trời se lạnh.",
        collection: "Thu quyến rũ",
    },
    {
        id: "13",
        name: "Khăn choàng lụa hoa văn",
        price: "430000",
        information: "Khăn choàng lụa sang trọng, hoa văn tinh tế, thích hợp làm phụ kiện.",
        collection: "Nàng thơ",
    },
    {
        id: "14",
        name: "Mũ bucket jean xanh",
        price: "250000",
        information: "Mũ bucket cá tính, chất liệu jean bền bỉ, phong cách streetwear.",
        collection: "Street Vibes",
    },
    {
        id: "15",
        name: "Quần short kaki nữ",
        price: "390000",
        information: "Quần short kaki năng động, dễ kết hợp áo thun hoặc sơ mi.",
        collection: "Summer Breeze",
    },
    {
        id: "16",
        name: "Đầm suông linen tay phồng",
        price: "780000",
        information: "Thoải mái và tinh tế, linen kết hợp tay phồng nhẹ nhàng.",
        collection: "Hơi thở tự nhiên",
    },
    {
        id: "17",
        name: "Áo khoác bomber nỉ",
        price: "970000",
        information: "Bomber nỉ unisex, giữ ấm tốt và dễ phối đồ phong cách sporty.",
        collection: "Casual Life",
    },
    {
        id: "18",
        name: "Giày sandal quai ngang",
        price: "520000",
        information: "Sandal quai ngang đơn giản, đế thấp phù hợp đi dạo phố.",
        collection: "Everyday Chic",
    },
    {
        id: "19",
        name: "Áo hoodie oversize",
        price: "750000",
        information: "Hoodie oversize unisex, chất liệu nỉ mềm thoải mái, năng động.",
        collection: "Street Vibes",
    },
    {
        id: "20",
        name: "Túi đeo chéo vải bố",
        price: "460000",
        information: "Túi chéo vải bố bền bỉ, thiết kế basic dễ dùng hằng ngày.",
        collection: "Everyday Use",
    },
    {
        id: "21",
        name: "Đầm midi ren trắng",
        price: "890000",
        information: "Đầm ren trắng tinh khôi, phom dáng midi cổ điển cho nàng thơ dịu dàng.",
        collection: "Nàng thơ trắng",
    },
    {
        id: "22",
        name: "Áo sơ mi denim dáng crop",
        price: "650000",
        information: "Sơ mi denim ngắn, cá tính và dễ phối với quần cạp cao.",
        collection: "Blue Jean Days",
    },
    {
        id: "23",
        name: "Quần jogger nỉ unisex",
        price: "520000",
        information: "Jogger thoải mái, phong cách sporty, phù hợp tập gym hoặc dạo phố.",
        collection: "Casual Life",
    },
    {
        id: "24",
        name: "Khuyên tai bạc dạng vòng",
        price: "310000",
        information: "Khuyên tai vòng bạc tối giản, dễ phối với nhiều trang phục.",
        collection: "Elegant Touch",
    },
    {
        id: "25",
        name: "Giày loafer da bóng",
        price: "990000",
        information: "Loafer da bóng cổ điển, sang trọng, phù hợp công sở và dự tiệc.",
        collection: "Elegant Touch",
    },
    {
        id: "26",
        name: "Áo tank top croptop",
        price: "280000",
        information: "Tank top dáng croptop, thoáng mát, phù hợp mùa hè năng động.",
        collection: "Summer Breeze",
    },
    {
        id: "27",
        name: "Quần culottes lưng cao",
        price: "710000",
        information: "Culottes lưng cao thanh lịch, thích hợp phối sơ mi hoặc áo basic.",
        collection: "Minimal Line",
    },
    {
        id: "28",
        name: "Váy bút chì công sở",
        price: "660000",
        information: "Váy bút chì ôm dáng, thích hợp mặc đi làm, sang trọng và tinh tế.",
        collection: "Office Chic",
    },
    {
        id: "29",
        name: "Giày thể thao chunky sole",
        price: "890000",
        information: "Sneaker đế thô chunky hợp trend, cá tính và năng động.",
        collection: "Street Vibes",
    },
    {
        id: "30",
        name: "Túi clutch ánh bạc",
        price: "1250000",
        information: "Clutch ánh bạc sang trọng, lựa chọn hoàn hảo cho tiệc tối.",
        collection: "Midnight Lights",
    },
]
