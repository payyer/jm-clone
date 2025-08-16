import { Button } from "../../../components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from '@react-oauth/google';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import AuthService from "../../../apis/AuthService/service";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { Spinner } from "../../../components/ui/shadcn-io/spinner";

export default function LoginWithGoogle() {
    const navigate = useNavigate()
    const mutation = useMutation({
        mutationFn: (access_token) => {
            return AuthService.loginWithGoogle(access_token)
        },
        onSuccess: (data) => {
            navigate("/")
            toast("Chào mừng bạn đến với JM")
        },
        onError: (err) => {
            // console.log("Google failed", err)
            toast("Lỗi không đăng nhập thành công với Google", {
                position: "top-center",
            })
        }
    })
    const login = useGoogleLogin({
        onSuccess: credentialResponse => {
            // console.log(credentialResponse);
            mutation.mutate(credentialResponse.access_token)
        },
        onError: () => {
            // console.log('Login Failed');
        },
    });
    return (
        <Button onClick={login} className={"bg-white border-[#C4C4C4] border-[1px] text-gray-400 p-0 w-full h-[44px] mt-4 hover-effect rounded-none hover:bg-white"}>
            {mutation.isPending ? <Spinner variant={"circle"} /> : <><FcGoogle className="!w-[24px] !h-[24px]" />Đăng nhập với Google</>}
        </Button>

    )
}
