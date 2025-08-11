import { loginSchema } from "../../../lib/schemaForm"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form } from "../../../components/ui/form"
import { Button } from "../../../components/ui/button"
import { Link, useNavigate } from "react-router"
import LoginWithGoogle from "./LoginWithGoogle"
import { useMutation } from "@tanstack/react-query"
import AuthService from "../../../apis/AuthService/service"
import { toast } from "sonner"
import CustomInput from "../../../components/ui/CustomInput"

export default function Login() {
    const navigate = useNavigate()
    const formLogin = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            emailOrPhone: "",
            password: ""
        },
    })
    const mutation = useMutation({
        mutationFn: ({ emailOrPhone, password }) => {
            AuthService.authLogin({ emailOrPhone, password })
        },
        onSuccess: () => {
            navigate("/")
            toast("Chào mừng bạn đến với JM")
        },
        onError: () => {
            toast("Email hoặc SĐT hoặc Password không chính xác")
        }
    })

    function loginSubmit(values) {
        console.log({ values })
        mutation.mutate({ emailOrPhone: values.emailOrPhone, password: values.password })
    }

    return (
        <>
            <Form  {...formLogin}>
                <form className="space-y-4 mt-4 text-[14px]" onSubmit={formLogin.handleSubmit(loginSubmit)}>
                    <CustomInput label={"Email / SĐT"} name={"emailOrPhone"} placeholder={"Nhập Email hoặc SĐT"} />
                    <CustomInput label={"Mật khẩu"} name={"password"} placeholder={"Password"} />
                    <Link to={"/user/getpassword"} className="mt-4 block text-right font-semibold underline hover-effect">Quên mật khẩu?</Link>
                    <Button type={'submit'} className={"uppercase font-bold text-white w-full rounded-none h-[44px] mt-4"}>Đăng nhập</Button>
                </form>
            </Form>
            <LoginWithGoogle />
        </>
    )
}
