import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios"

export const client = (() => {
    return axios.create({
        baseURL: 'http://localhost:3000/',
        headers: {
            Accept: 'application/json, text/plain, */*'
        },
        withCredentials: true
    })
})()

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