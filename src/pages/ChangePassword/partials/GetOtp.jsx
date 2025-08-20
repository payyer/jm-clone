import CustomInput from '../../../components/ui/CustomInput'
import { Button } from '../../../components/ui/button'
import { Spinner } from '../../../components/ui/shadcn-io/spinner'
import { Form } from '../../../components/ui/form'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import AuthService from '../../../apis/AuthService/service'
import { emailFormSchema } from '../../../lib/schemaForm'
import { toast } from 'sonner'

export default function GetOtp({ setEmail }) {
    const formSendEmail = useForm({
        resolver: zodResolver(emailFormSchema),
        defaultValues: {
            email: ""
        },
    })

    const mutation = useMutation({
        mutationFn: ({ email }) => {
            return AuthService.getOtpByEmail(email)
        },
        onSuccess: (data) => {
            setEmail(formSendEmail.watch("email"))
        },
        onError: (error) => {
            toast(error.response.data.message, {
                position: "top-right"
            })
        }
    })
    const sendEmail = (values) => {
        mutation.mutate({ email: values.email })
    }
    return (
        <Form  {...formSendEmail}>
            <form className="space-y-4 mt-4 text-[14px]" onSubmit={formSendEmail.handleSubmit(sendEmail)}>
                <CustomInput label={"Nhập email cần thay đổi mật khẩu"} name={"email"} placeholder={"example@gmail.com"} />
                <Button type={'submit'} className={"uppercase font-bold text-white w-full rounded-none h-[44px] "}>
                    {mutation.isPending ? <Spinner variant={"circle"} /> : "Gửi"}
                </Button>
            </form>
        </Form>
    )
}
