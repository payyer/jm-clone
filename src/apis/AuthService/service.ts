import request from "../client"
import { AuthEndpoints } from "./config"
import { AuthSignInBody } from "./query"
export default class {
    public static readonly authLogin = (signInBody: AuthSignInBody) => {
        console.log({ signInBody })
        return request({
            url: AuthEndpoints.login(),
            method: 'post',
            data: signInBody
        })
    }
}