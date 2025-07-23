import { email, z } from "zod"
const phoneRegex = new RegExp(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g)

export const checkoutSchema = z.object({
    username: z.string().min(2, { message: "Tên cần nhiều hơn 2 chữ cái" }),
    phone: z.string().regex(phoneRegex, { message: "Số điện thoại không đúng" }),
    address: z.string().min(6, { message: "Cần cung cấp địa chỉ cụ thể hơn" }),
    email: z.email("Email không hợp lệ"),
    city: z.string().min(1, { message: "Vui lòng chọn thành phố" }),
    districts: z.string().min(1, { message: "Vui lòng chọn quận" }),
    note: z.string(),
    paymentMethod: z.enum(["momo", "cod"], { message: "Chọn phương thức thanh toán" })
})

export const loginSchema = z.object({
    emailOrPhone: z.string().min(1, { message: "Vui lòng nhập email hoặc sđt" }),
    password: z.string().min(1, { message: "Vui lòng nhập mật khẩu" })
})

export const registerSchema = z.object({
    phone: z.string().regex(phoneRegex, { message: "Số điện thoại không đúng" }),
    email: z.email("Email không hợp lệ"),
    username: z.string().min(2, { message: "Tên cần nhiều hơn 2 chữ cái" }),
    password: z.string().min(6, { message: "Mật khẩu cần có 6 ký tự trở lên" })
})