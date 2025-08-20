export const AuthEndpoints = {
    login: () => `auth/sign-in`,
    logout: () => `auth/logout`,
    register: () => `auth/register`,
    loginWithGoogle: () => `auth/google`,
    getOtpByEmail: () => `email/otp`,
    resetPassword: () => `auth/reset-password`
}