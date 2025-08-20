import request from "../client"
import { AuthEndpoints } from "./config"
import { AuthRegister, AuthSignInBody, ResetPassword } from "./query"
export default class AuthService {
    public static readonly authLogin = (signInBody: AuthSignInBody) => {
        return request({
            url: AuthEndpoints.login(),
            method: 'post',
            data: signInBody
        })
    }

    public static readonly authRegister = (registerBody: AuthRegister) => {
        return request({
            url: AuthEndpoints.register(),
            method: 'post',
            data: registerBody
        })
    }

    public static readonly authLogout = () => {
        return request({
            url: AuthEndpoints.logout(),
            method: 'post',
        })
    }

    public static readonly loginWithGoogle = (access_token: string) => {
        return request({
            url: AuthEndpoints.loginWithGoogle(),
            method: 'post',
            data: { access_token }
        })
    }

    public static readonly getOtpByEmail = (email: string) => {
        return request({
            url: AuthEndpoints.getOtpByEmail(),
            method: 'post',
            data: { email }
        })
    }

    public static readonly resetPassword = (resetPasswordBody: ResetPassword) => {
        return request({
            url: AuthEndpoints.resetPassword(),
            method: 'put',
            data: resetPasswordBody
        })
    }
}