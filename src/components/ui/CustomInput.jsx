import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../components/ui/form"
import { useFormContext } from 'react-hook-form'
import { Input } from "../../components/ui/input"
const CustomInput = ({ label, name, placeholder }) => {
    const formContext = useFormContext()
    const { formState: { errors } } = formContext
    return (
        <FormField
            name={name}
            render={({ field }) => (
                <FormItem>
                    {label && <FormLabel className={""}>{label}</FormLabel>}
                    <FormControl>
                        <Input placeholder={placeholder} className={"rounded-none"} {...field} />
                    </FormControl>
                    {errors && <FormMessage />}
                </FormItem>
            )}
        />
    )
}

export default CustomInput