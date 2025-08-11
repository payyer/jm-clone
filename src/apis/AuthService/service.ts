import request from "../client"
import { AuthEndpoints } from "./config"
import { AuthRegister, AuthSignInBody } from "./query"
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
}