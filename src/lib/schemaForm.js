import { email, file, z } from "zod"
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
    password: z.string().min(6, { message: "Mật khẩu không hợp lệ" })
})

export const registerSchema = z.object({
    phone: z.string().regex(phoneRegex, { message: "Số điện thoại không hợp lệ" }),
    email: z.email("Email không hợp lệ"),
    username: z.string().min(2, { message: "Tên cần nhiều hơn 2 chữ cái" }),
    password: z.string().min(6, { message: "Mật khẩu cần có 6 ký tự trở lên" })
})

export const profileSchema = z.object({
    username: z.string().min(3, { message: "Tên người dùng cần 3 chữ trở lên" }),
    phone: z.string().regex(phoneRegex, { message: "Số điện thoại không hợp lệ" }),
    email: z.email("Email không hợp lệ"),
    address: z.string().min(12, "Địa chỉ cần đài hơn 12 ký tự")
})

export const emailFormSchema = z.object({
    email: z.email("Email không hợp lệ"),
})

export const resetPasswordSchema = z.object({
    email: z.email("Email không hợp lệ"),
    otpCode: z.string().min(6, { message: "Mã OTP không chính xác" }),
    password: z.string().min(6, { message: "Mật khẩu cần có 6 ký tự trở lên" })
})

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
export const createProductSchema = z.object({
    name: z.string("Không thể để trống tên sản phẩm"),
    price: z.coerce.number("Không thể để trống giá").positive("Giá không được âm"),
    information: z.string("Không thể để trống thông tin sản phẩm"),
    category: z.string("Không thể để trống danh mục"),
    // collection: z.string("").uuid("Bộ sưu tập không hợp lệ").or(z.literal("")),
    collection: z.string().or(z.literal("")),
    files: z.array(z.file())
    // files: z.array(z.string(), "Không thể để trống hình ảnh mình họa").min(2)
    // .refine((file) => file?.size <= MAX_FILE_SIZE, `Dung lượng tối đa đăng ảnh là 5MB`)
    // .refine(
    //     (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
    //     "Chỉ đăng được ảnh PNG và JPG"
    // )
})



