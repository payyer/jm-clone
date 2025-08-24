import { useForm } from "react-hook-form"
import { Button } from "../../../components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../../../components/ui/dialog"
import { Form } from "../../../components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { createProductSchema } from "../../../lib/schemaForm"
import CustomInput from "../../../components/ui/CustomInput"
import CustomSelectInput from "../../../components/ui/custom-select-input"
import { useState } from "react"
import PreviewImage from "../../../components/ui/preview-images"

export default function CreateFormProduct() {
    const [previewImage, setPreviewImage] = useState([])
    const createProductForm = useForm({
        resolver: zodResolver(createProductSchema),
        defaultValues: {
            name: "",
            price: "",
            information: "",
            category: "",
            collection: "",
            files: []
        },
    })
    const handleCreateProduct = (values) => {
        console.log({ values })
    }

    return (
        <Dialog onOpenChange={(open) => {
            if (!open) {
                setPreviewImage([])
                createProductForm.reset()
            }
        }}>
            <DialogTrigger asChild>
                <Button variant="outline" className="ml-auto">
                    Tạo mới
                </Button>
            </DialogTrigger>
            <DialogContent >
                <DialogHeader>
                    <DialogTitle>Tạo mới sản phẩm</DialogTitle>
                </DialogHeader>
                <Form {...createProductForm}>
                    <form className="space-y-2" onSubmit={createProductForm.handleSubmit(handleCreateProduct)}>
                        <CustomInput label={"Tên"} name={"name"} placeholder={""} />
                        <CustomInput
                            label={"Hình ảnh"}
                            type={"file"}
                            name={"files"}
                            accept=".png, .jpg"
                            multiple={true}
                            onChange={(e) => {
                                if (!e.target.files) return
                                const files = Array.from(e.target.files)
                                const previews = files.map((file) => URL.createObjectURL(file))
                                createProductForm.setValue("files", files)
                                setPreviewImage(previews)
                                console.log("Co1 lam2 gi2 dc ko")
                            }}
                        >
                            <PreviewImage images={previewImage} setPreviewImage={setPreviewImage} />
                        </CustomInput>
                        <CustomInput label={"Giá bán"} type={"number"} name={"price"} placeholder={""} />
                        <CustomInput label={"Thông tin sản phẩm"} name={"information"} placeholder={""} />
                        <CustomSelectInput label={"Danh mục"} name={"category"} placeholder={"Chọn danh mục"} selectItems={["Đầm", "Vấy"]} />
                        <CustomSelectInput label={"Danh mục"} name={"collection"} placeholder={"Chọn bộ sưu tập"} selectItems={["Lạc giữa rừng mer"]} />
                        <Button type={'submit'} className={"!h-[44px] mt-4 w-full rounded-none"}>Xác nhận</Button>
                    </form>
                </Form>
                <DialogClose />
            </DialogContent>
        </Dialog>
    )
}
