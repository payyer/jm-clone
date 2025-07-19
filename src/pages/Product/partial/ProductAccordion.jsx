import { sizeChart01, sizeChart02 } from "../../../assets/SizeChart"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../../../components/ui/accordion"
export default function ProductDetailInfo() {
    return (
        <Accordion
            collapsible="true"
            type="multiple"
            className="w-full"
        >
            <AccordionItem value="item-1">
                <AccordionTrigger changeIcon={true} className={"text-[16px] font-medium"}>Thông tin chi tiết</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque quibusdam quae aperiam eaque asperiores. Alias ipsa cum, non deserunt accusamus unde quod modi, aut suscipit distinctio adipisci incidunt ad! Itaque.
                    Repellat, iusto. Ratione, quod dolor! Earum odit odio, perspiciatis consequatur dolore, sapiente quaerat accusamus facere quam quidem unde veniam eius amet necessitatibus, quas nisi ipsum nostrum aut iusto quod ipsam.
                    Placeat perferendis ex sunt laboriosam, alias adipisci quidem ipsa debitis, sint vero officia! Id, exercitationem voluptatem, earum ipsa amet aspernatur molestiae officia soluta neque commodi illum dolores provident est fugit!
                    Aspernatur odit ex, architecto delectus tempore sed expedita labore distinctio ut, vero fugiat. Doloremque, atque mollitia accusamus tenetur tempora facere animi laboriosam nemo voluptate quam officia minus dolorem laudantium repudiandae.
                    Enim, quos fugit ducimus adipisci dolorem earum tempore commodi illum voluptatibus, sint nostrum hic ullam. Accusantium quisquam maiores amet consequuntur a eos necessitatibus qui? Maxime autem numquam qui cupiditate itaque?
                    Consectetur ipsam voluptatibus ad eligendi optio eius dolore blanditiis voluptatum, eveniet modi quod quasi maxime at voluptas! Magnam, cum fugiat quibusdam pariatur nam dignissimos illo blanditiis id obcaecati, nesciunt cupiditate.
                    Porro deserunt explicabo corrupti maiores adipisci itaque ratione odio. Perferendis, vel voluptas repudiandae aliquid consequuntur quos porro! Doloremque, id rem est esse molestiae nihil velit a quidem excepturi totam placeat.
                    Neque, possimus eos incidunt, dolor beatae sint veritatis minus quibusdam veniam sapiente accusamus repellendus vel corrupti, soluta ipsum itaque animi maxime consequuntur obcaecati ex. Corrupti fugit officia voluptate in voluptates.
                    Labore sequi veritatis vel omnis, veniam impedit provident harum quae exercitationem nisi saepe voluptatum vero id rerum, perspiciatis fugit eligendi perferendis. Molestias illum dicta sint nobis rerum ea iure. Odit.
                    Dignissimos eum ex fuga sunt harum, deleniti vitae ad minus pariatur similique fugit delectus dicta distinctio recusandae! Necessitatibus, magnam pariatur delectus aspernatur dolore facilis, rerum, repudiandae ullam neque in minus?
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger changeIcon={true} className={"text-[16px] font-medium"}>Bảng size</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                    <img src={sizeChart01} className="w-full h-auto" alt="Size chart 01" loading="lazy" />
                    <img src={sizeChart02} className="w-full h-auto" alt="Size chart 02" loading="lazy" />
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
