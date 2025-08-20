import { Link, useNavigate } from "react-router";
import ProfileForm from "./ProfileForm";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import UserService from "../../../apis/UserService/service";
import { Button } from "../../../components/ui/button";
import AuthService from "../../../apis/AuthService/service";

export default function UserInfo() {
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const { data: userInfo, isPending } = useQuery({
        queryKey: ["User"],
        queryFn: () => UserService.getProfile()
    })

    const mutation = useMutation({
        mutationFn: () => AuthService.authLogout(),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["User"] })
            navigate("/")
        },
        onError: (err) => {
        }
    })
    return (
        <>
            {isPending ? "loading..." :
                <section>
                    <h2 className="text-[18px] font-bold">Hồ sơ của tôi</h2>
                    <div className="flex gap-4 mt-4">
                        <img className="block rounded-full" width={56} height={56} src="https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1114445501.jpg" loading="lazy" decoding="async" />
                        <div className="flex flex-col justify-center ">
                            <span className="text-[16px] font-bold">{userInfo?.username}</span>
                            <Link to={'/user/change-password'} className="underline text-[14px] text-red-200 font-medium hover-effect">Đổi mật khẩu</Link>
                        </div>
                    </div>
                    <ProfileForm userInfo={userInfo} />
                    <Button onClick={mutation.mutate} type={'button'} className={"uppercase font-bold text-white w-full rounded-none h-[44px] mt-4"}>Đăng xuất</Button>
                </section>
            }
        </>

    )
}
