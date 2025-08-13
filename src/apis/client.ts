import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"
import Cookies from "js-cookie"
export const client = (() => {
    return axios.create({
        baseURL: 'http://localhost:3000/',
        headers: {
            Accept: 'application/json, text/plain, */*'
        },
        withCredentials: true
    })
})()

client.interceptors.response.use(
    (res: AxiosResponse) => {
        return res
    },
    async (err) => {
        const status = err.response ? err.response.status : null
        if (status === 401) {
            Cookies.remove("isLogged")
            window.location.href = "/user/signin"
        }
    }
)

const request = async (options: AxiosRequestConfig) => {
    const onSuccess = (response: AxiosResponse) => {
        const { data } = response
        return data
    }

    const onError = function (error: AxiosError) {
        return Promise.reject({
            message: error.message,
            code: error.code,
            response: error.response
        })
    }

    return client(options).then(onSuccess).catch(onError)
}

export default request;