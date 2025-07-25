import { loginSchema } from "../../../lib/schemaForm"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../../components/ui/form"
import { Input } from "../../../components/ui/input"
import { Button } from "../../../components/ui/button"
import { Link } from "react-router"
import LoginWithGoogle from "./LoginWithGoogle"

export default function Login() {
    const formLogin = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            emailOrPhone: "",
            password: ""
        }
    })

    function loginSubmit(values) {
        console.log(values)
    }

    return (
        <>
            <Form  {...formLogin}>
                <form className="mt-4 text-[14px]" onSubmit={formLogin.handleSubmit(loginSubmit)}>
                    <FormField
                        control={formLogin.control}
                        name="emailOrPhone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className={""}>Email / SĐT</FormLabel>
                                <FormControl>
                                    <Input placeholder="Nhập email hoặc sđt" className={"rounded-none"} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={formLogin.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className={" mt-4"}>Mật khẩu</FormLabel>
                                <FormControl>
                                    <Input placeholder="Password" className={"rounded-none"} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Link to={"/user/getpassword"} className="mt-4 block text-right font-semibold underline hover-effect">Quên mật khẩu?</Link>

                    <Button type={'submit'} className={"uppercase font-bold text-white w-full rounded-none h-[44px] mt-4"}>Đăng nhập</Button>
                </form>
            </Form>
            <LoginWithGoogle />
        </>
    )
}
