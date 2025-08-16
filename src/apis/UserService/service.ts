import request from "../client"
import { UserEndpoints } from "./config"
import { UpdateUser } from "./query"

export default class UserService {
    public static readonly getProfile = () => {
        return request({
            url: UserEndpoints.getProfile(),
            method: "GET",
        })
    }

    public static readonly updateProfile = (formUpdate: UpdateUser) => {
        return request({
            url: UserEndpoints.updateUser(),
            method: "PUT",
            data: formUpdate
        })
    }
}