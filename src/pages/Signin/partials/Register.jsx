import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { registerSchema } from "../../../lib/schemaForm";
import { Form } from "../../../components/ui/form";
import { Button } from "../../../components/ui/button";
import CustomInput from "../../../components/ui/CustomInput";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import AuthService from "../../../apis/AuthService/service";
import { toast } from "sonner";
import { useNavigate } from "react-router";
export default function Register() {
    const navigate = useNavigate();
    const formRegister = useForm({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            email: "",
            password: "",
            phone: "",
            username: ""
        }
    })

    const mutation = useMutation({
        mutationFn: ({ email, username, phone, password }) => {
            return AuthService.authRegister({ email, username, phone, password })
        },
        onSuccess: (data) => {
            navigate("/")
            toast("Chào mừng bạn đến với JM")
        },
        onError: (error) => {
            toast(error.response.data.message, { position: "top-center" })
        }
    })
    function registerSubmit(values) {
        mutation.mutate(values)
    }
    return (
        <Form  {...formRegister}>
            <form className="mt-4 text-[14px] space-y-4" onSubmit={formRegister.handleSubmit(registerSubmit)}>
                <CustomInput name={'email'} label={"Email"} placeholder={'example@gmail.com'} />
                <CustomInput name={'phone'} label={"Số điện thoại"} placeholder={'Nhập số điện thoại khi tài xế liên lạc'} />
                <CustomInput name={'username'} label={"Họ và tên"} placeholder={'Nguyễn Văn A'} />
                <CustomInput type={"password"} name={'password'} label={"Mật khẩu"} placeholder={'Gồm 6 ký tự trở lên'} />
                <Button type={'submit'} className={"uppercase font-bold text-white w-full rounded-none h-[44px] mt-4"}>Đăng ký</Button>
            </form>
        </Form>
    )
}
