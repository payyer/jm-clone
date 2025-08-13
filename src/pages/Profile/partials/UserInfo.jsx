import { Link } from "react-router";
import ProfileForm from "./ProfileForm";
import { useQuery } from "@tanstack/react-query";
import UserService from "../../../apis/UserService/service";

export default function UserInfo() {
    const { data: userInfo, isPending } = useQuery({
        queryKey: ["User"],
        queryFn: () => UserService.getProfile()
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
                            <Link to={'/'} className="underline text-[14px] text-red-200 font-medium hover-effect">Đổi mật khẩu</Link>
                        </div>
                    </div>
                    <ProfileForm userInfo={userInfo} />
                </section>
            }
        </>

    )
}
