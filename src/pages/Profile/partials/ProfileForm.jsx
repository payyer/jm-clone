import { useForm } from "react-hook-form";
import { Form } from "../../../components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileSchema } from "../../../lib/schemaForm";
import CustomInput from "../../../components/ui/CustomInput";
import { Button } from "../../../components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import UserService from "../../../apis/UserService/service";
import { toast } from "sonner";
import { Spinner } from "../../../components/ui/shadcn-io/spinner"

export default function ProfileForm({ userInfo }) {
    const queryClient = useQueryClient()
    const profileForm = useForm({
        resolver: zodResolver(profileSchema),
        defaultValues: {
            email: userInfo?.email ? userInfo?.email : "",
            phone: userInfo?.phone ? userInfo?.phone : "",
            username: userInfo?.username ? userInfo?.username : "",
            address: userInfo?.address ? userInfo?.address : ""
        },
    })

    const mutation = useMutation({
        mutationFn: (updateUser) => {
            return UserService.updateProfile(updateUser)
        },
        onSuccess: async () => {
            await queryClient.refetchQueries({ queryKey: ["User"] });
            toast("Cập nhập thông tin thành công !!", { position: "top-center" })
        },
        onError: (error) => {
            toast(error.response.data.message, { position: "top-center" })
        }
    })

    const submitProfileForm = (values) => {
        mutation.mutate(values)
    }
    return (
        <Form {...profileForm} >
            <form className="space-y-4 mt-4" onSubmit={profileForm.handleSubmit(submitProfileForm)}>
                <CustomInput label={'Tên'} name={'username'} />
                <CustomInput label={'Số điện thoại'} name={'phone'} />
                <CustomInput label={'Email'} name={'email'} />
                <CustomInput label={'Địa chỉ'} name={'address'} />
                <Button type={'submit'} className={"uppercase font-bold text-white w-full rounded-none h-[44px] mt-4"}>
                    {mutation.isPending ? <Spinner variant={"circle"} /> : "Cập nhật thông tin"}
                </Button>
            </form>
        </Form>
    )
}
