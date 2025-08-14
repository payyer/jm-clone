import { useForm } from "react-hook-form";
import { Form } from "../../../components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileSchema } from "../../../lib/schemaForm";
import CustomInput from "../../../components/ui/CustomInput";
import { Button } from "../../../components/ui/button";

export default function ProfileForm({ userInfo }) {

    const profileForm = useForm({
        resolver: zodResolver(profileSchema),
        defaultValues: {
            email: userInfo?.email ? userInfo?.email : "",
            phone: userInfo?.phone ? userInfo?.phone : "",
            username: userInfo?.username ? userInfo?.username : "",
            address: userInfo?.address ? userInfo?.address : ""
        }
    })

    const submitProfileForm = (values) => {
        console.log(values)
    }
    return (
        <Form {...profileForm} >
            <form className="space-y-4 mt-4" onSubmit={profileForm.handleSubmit(submitProfileForm)}>
                <CustomInput label={'Tên'} name={'username'} />
                <CustomInput label={'Số điện thoại'} name={'phone'} />
                <CustomInput label={'Email'} name={'email'} />
                <CustomInput label={'Địa chỉ'} name={'address'} />
                <Button type={'submit'} className={"uppercase font-bold text-white w-full rounded-none h-[44px] mt-4"}>Lưu</Button>
            </form>
        </Form>
    )
}
