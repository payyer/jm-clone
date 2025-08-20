import { useForm } from "react-hook-form";
import { Form } from "../../../components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { resetPasswordSchema } from "../../../lib/schemaForm";
import CustomInput from "../../../components/ui/CustomInput";
import { Button } from "../../../components/ui/button";
import { Spinner } from "../../../components/ui/shadcn-io/spinner";
import { useMutation } from "@tanstack/react-query";
import AuthService from "../../../apis/AuthService/service";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export default function ResetPassword({ email }) {
    const navigate = useNavigate()
    const resetPasswordForm = useForm({
        resolver: zodResolver(resetPasswordSchema),
        defaultValues: {
            email,
            otp: "",
            password: ""
        }
    })
    const mutation = useMutation({
        mutationFn: (body) => {
            return AuthService.resetPassword(body)
        },
        onSuccess: (data) => {
            toast("Đổi mật khẩu thành công!", {
                position: "top-right"
            })
            navigate('/')
        },
        onError: (error) => {
            console.log({ error })
            toast(error.response.data.message, {
                position: "top-right"
            })
        }
    })
    const resetPassword = (values) => {
        mutation.mutate(values)
    }
    return (
        <>
            <p className="text-[16px] text-red-200 font-medium mt-4">Truy cập vào email để lấy mã OTP</p>
            <Form  {...resetPasswordForm}>
                <form className="space-y-4 mt-4 text-[14px]" onSubmit={resetPasswordForm.handleSubmit(resetPassword)}>
                    <CustomInput label={"Nhập OTP"} name={"otpCode"} placeholder={""} />
                    <CustomInput label={"Nhập mật khẩu mới"} name={"password"} type={"password"} placeholder={""} />
                    <Button type={'submit'} className={"uppercase font-bold text-white w-full rounded-none h-[44px] "}>
                        {mutation.isPending ? <Spinner variant={"circle"} /> : "Gửi"}
                    </Button>
                </form>
            </Form>
        </>
    )
}
