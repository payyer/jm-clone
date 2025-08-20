export interface AuthSignInBody {
    emailOrPhone: string,
    password: string
}

export interface AuthRegister {
    email: string,
    phone: string,
    username: string,
    password: string
}

export interface ResetPassword {
    email: string,
    password: string,
    otpCode: string
}