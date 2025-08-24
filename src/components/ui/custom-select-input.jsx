import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "./form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select"
export default function CustomSelectInput({ label, name, placeholder, selectItems }) {
    return (
        <FormField
            name={name}
            render={({ field }) => (
                <FormItem >
                    <FormLabel>{label}</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                            <SelectTrigger className={"w-full !h-[44px] rounded-none border-[#C7C7C7]"}>
                                <SelectValue placeholder={placeholder} />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent className={"z-[1000] w-full"}>
                            {selectItems?.map((item, index) =>
                                <SelectItem key={index} value={item}>{item}</SelectItem>
                            )}
                        </SelectContent>
                    </Select>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}
