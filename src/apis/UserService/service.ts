import request from "../client"
import { UserEndpoints } from "./config"

export default class UserService {
    public static readonly getProfile = () => {
        return request({
            url: UserEndpoints.getProfile(),
            method: "GET",
        })
    }
}