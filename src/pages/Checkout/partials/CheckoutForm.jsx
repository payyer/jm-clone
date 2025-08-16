import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Input } from "../../../components/ui/input";
import { Select } from "../../../components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../../components/ui/form"
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../components/ui/select";
import { Textarea } from "../../../components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "../../../components/ui/radio-group"
import { GiReceiveMoney } from "react-icons/gi";
import { checkoutSchema } from "../../../lib/schemaForm";
export default function CheckoutForm() {

    const checkoutForm = useForm({
        resolver: zodResolver(checkoutSchema),
        defaultValues: {
            username: "",
            phone: "",
            address: "",
            email: "",
            city: "",
            districts: "",
            note: "",
            paymentMethod: "cod"
        }
    })

    function checkoutSubmit(values) {
        // console.log({ values })
    }
    return (
        <div className="cart-container--left  mt-8 sm:mt-0">
            <h2 className="text-[22px] font-semibold">Thông tin giao hàng</h2>
            <Form {...checkoutForm}>
                <form onSubmit={checkoutForm.handleSubmit(checkoutSubmit)}>
                    <div className="flex flex-col sm:flex-row mt-4 gap-6 items-start">
                        <FormField
                            control={checkoutForm.control}
                            name="username"
                            className={"w-full"}
                            render={({ field }) => (
                                <FormItem className={"w-full"}>
                                    <FormLabel>Tên</FormLabel>
                                    <FormControl>
                                        <Input className={"rounded-[0px]"} type={"text"} placeholder={"Tên người nhận"} {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={checkoutForm.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem className={"w-full"}>
                                    <FormLabel>Số điện thoại</FormLabel>
                                    <FormControl>
                                        <Input className={"rounded-[0px]"} type={"text"} placeholder={"Số điện thoại người nhận"} {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={checkoutForm.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className={"w-full mt-4"}>
                                <FormLabel>Địa chỉ email</FormLabel>
                                <FormControl>
                                    <Input className={"rounded-[0px]"} type={"email"} placeholder={"Nhập email của bạn"} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={checkoutForm.control}
                        name="address"
                        render={({ field }) => (
                            <FormItem className={"w-full mt-4"}>
                                <FormLabel>Địa chỉ</FormLabel>
                                <FormControl>
                                    <Input className={"rounded-[0px]"} type={"text"} placeholder={"Địa chỉ"} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="flex mt-4 max-w-full sm:max-w-[50%] gap-4 items-start">
                        <FormField
                            control={checkoutForm.control}
                            name="city"
                            render={({ field }) => (
                                <FormItem className={"w-full"}>
                                    <Select onValueChange={field.onChange} defaultValues={field.value}>
                                        <FormControl>
                                            <SelectTrigger className={"rounded-[0] w-full"}>
                                                <SelectValue placeholder={"Tỉnh/TP"} />
                                            </SelectTrigger>
                                        </FormControl>

                                        <SelectContent>
                                            <SelectItem value="HCM">Hồ Chí Mnh</SelectItem>
                                            <SelectItem value="Hà Nội">Hà Nội</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={checkoutForm.control}
                            name="districts"
                            render={({ field }) => (
                                <FormItem className={"w-full"}>
                                    <Select onValueChange={field.onChange} defaultValues={field.value}>
                                        <FormControl>
                                            <SelectTrigger className={"rounded-[0] w-full"}>
                                                <SelectValue placeholder={"Quận"} />
                                            </SelectTrigger>
                                        </FormControl>

                                        <SelectContent>
                                            <SelectItem value="Q.12">Q.12</SelectItem>
                                            <SelectItem value="Q.1">Q.1</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField
                        control={checkoutForm.control}
                        name="note"
                        render={({ field }) => (
                            <FormItem className={"w-full mt-4"}>
                                <FormLabel>Lời nhắn</FormLabel>
                                <FormControl>
                                    <Textarea className={"rounded-[0px] p-4 h-[108px] resize-none"} type={"text"} placeholder={"Ghi chú thêm (ví dụ: Hẻm, gần tòa nhà ...)"} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <h3 className="text-[22px] font-semibold mt-4">Phương thức thanh toán</h3>

                    <FormField
                        control={checkoutForm.control}
                        name="paymentMethod"
                        render={({ field }) => (
                            <FormItem className={"w-full mt-4"}>
                                <FormControl>
                                    <RadioGroup className={"flex flex-col"} onValueChange={field.onChange} defaultValues={field.value}>
                                        <FormItem className={"flex gap-0 items-center h-[100px] w-full bg-[#f6f6f6] rounded-[4px]"}>
                                            <FormControl >
                                                <RadioGroupItem value="cod" className={"peer rounded-tl-[4px]  pl-[4px] rounded-bl-[4px] aria-checked:border-red-200 border-[2px] border-r-0 border-[#e5e5e5] h-full w-[40px] hidden"} />
                                            </FormControl>
                                            <FormLabel className={"peer-aria-checked:border-red-200  flex-1 pl-[40px] peer rounded-[4px] cursor-pointer h-full border-[2px] "}>
                                                <div className="flex gap-4 items-center">
                                                    <GiReceiveMoney className="text-[32px]" />
                                                    <p>Thanh toán khi nhận hàng COD</p>
                                                </div>
                                            </FormLabel>
                                        </FormItem>

                                        <FormItem className={"flex gap-0 items-center h-[100px] w-full bg-[#f6f6f6] rounded-[4px]"}>
                                            <FormControl >
                                                <RadioGroupItem value="momo" className={" peer rounded-tl-[4px]  pl-[4px] rounded-bl-[4px] aria-checked:border-red-200 border-[2px] border-r-0 border-[#e5e5e5] h-full w-[40px] hidden"} />
                                            </FormControl>
                                            <FormLabel className={"peer-aria-checked:border-red-200  flex-1 pl-[40px] peer rounded-tr-[4px] cursor-pointer rounded-[4px] h-full border-[2px] "}>
                                                <div className="flex gap-4 items-center peer-checked:bg-red-100">
                                                    <img src="https://pay2s.vn/blog/wp-content/uploads/2024/11/momo_icon_square_pinkbg_RGB-1024x1024.png" width={32} height={32} alt="momo payment method" loading="lazy" />
                                                    <p>Thanh toán qua momo</p>
                                                </div>
                                            </FormLabel>
                                        </FormItem>
                                    </RadioGroup>
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <button className="hover-effect w-full sm:w-[258px] h-[50px] flex items-center justify-center font-bold text-white bg-[#232222] rounded-[4px] mt-4" type="submit">Đặt hàng ngay</button>
                </form>
            </Form>
        </div>
    )
}
