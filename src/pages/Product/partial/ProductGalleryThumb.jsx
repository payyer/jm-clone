import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTrigger,
} from "@/components/ui/dialog"

export default function ProductGalleryThumb({ thumb }) {
    const style = { "--url": "url(/src/assets/Products/product_02.jpeg)", "--zoom-x": "0%", "--zoom-y": "0%", "--display": "none" };
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className='zoomImage h-[640px]'
                    style={style}
                    onMouseMove={(e) => {
                        const zoomImage = e.currentTarget
                        zoomImage.style.setProperty('--display', 'block')
                        let pointer = {
                            x: (e.nativeEvent.offsetX * 100) / zoomImage.offsetWidth,
                            y: (e.nativeEvent.offsetY * 100) / zoomImage.offsetHeight
                        }
                        zoomImage.style.setProperty("--zoom-x", pointer.x + "%")
                        zoomImage.style.setProperty("--zoom-y", pointer.y + "%")
                    }}

                    onMouseOut={(e) => {
                        const zoomImage = e.currentTarget
                        zoomImage.style.setProperty('--display', 'none')
                    }}
                >
                    <img className='w-auto h-full object-cover' src={thumb} width={462} height={592} alt="Thumb image" loading='lazy' />
                </div>
            </DialogTrigger>
            <DialogContent className={"border-none outline-none p-0"} showCloseButton={false}>
                <img src={thumb} className="w-full h-auto rounded-lg" width={462} height={592} alt="thumb image" />
            </DialogContent>
        </Dialog>
    )
}
