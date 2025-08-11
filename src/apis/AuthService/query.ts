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