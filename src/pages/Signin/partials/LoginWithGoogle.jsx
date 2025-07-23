import { Button } from "../../../components/ui/button";
import { FcGoogle } from "react-icons/fc";
export default function LoginWithGoogle() {
    return (
        <Button className={"bg-white border-[#C4C4C4] border-[1px] text-gray-400 p-0 w-full h-[44px] mt-4 hover-effect rounded-none hover:bg-white"}>
            <FcGoogle className="!w-[24px] !h-[24px]" />Đăng nhập với Google
        </Button>
    )
}
