import { GiCancel } from "react-icons/gi";
export default function PreviewImage({ images, setPreviewImage, ...props }) {

  return (
    <div className=" flex flex-wrap gap-[3.5%]">
      {Array.isArray(images) && images.map((image, index) => (
        <div key={index} className="relative w-[31%]">
          <img
            src={image}
            alt={`preview-${index}`}
            className="object-cover rounded aspect-[2/3]  "
            {...props}
          />
          <button onClick={() => {
            const newImages = images.filter((_, i) => i !== index)
            setPreviewImage(newImages)
          }}
            type="button" className={"bg-transparent  hover-effect"}
          >
            <GiCancel className="absolute top-[-8px] right-[-8px] text-red-200" />
          </button>
        </div>
      ))}
    </div>
  )
}
