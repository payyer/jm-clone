import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { registerSchema } from "../../../lib/schemaForm";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../../components/ui/form";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
export default function Register() {
    const formRegister = useForm({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            email: "",
            password: "",
            phone: "",
            username: ""
        }
    })

    function registerSubmit(values) {
        console.log(values)
    }
    return (
        <Form  {...formRegister}>
            <form className="mt-4 text-[14px]" onSubmit={formRegister.handleSubmit(registerSubmit)}>
                <FormField
                    control={formRegister.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className={""}>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="example@gmail.com" className={"rounded-none"} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={formRegister.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem className={"mt-4"}>
                            <FormLabel className={""}>Số điện thoại</FormLabel>
                            <FormControl>
                                <Input placeholder="Nhập sđt" className={"rounded-none"} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={formRegister.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem className={"mt-4"}>
                            <FormLabel className={""}>Họ và tên</FormLabel>
                            <FormControl>
                                <Input placeholder="Nguyễn Văn A" className={"rounded-none"} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={formRegister.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem className={"mt-4"}>
                            <FormLabel className={""}>Mật khẩu</FormLabel>
                            <FormControl>
                                <Input placeholder="Gồm 6 ký tự trở lên" type={"password"} className={"rounded-none"} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type={'submit'} className={"uppercase font-bold text-white w-full rounded-none h-[44px] mt-4"}>Đăng ký</Button>
            </form>
        </Form>
    )
}
