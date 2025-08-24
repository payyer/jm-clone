import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../components/ui/form"
import { useFormContext } from 'react-hook-form'
import { Input } from "../../components/ui/input"
const CustomInput = ({ label, name, placeholder, type, children, accept, multiple, onChange, ...props }) => {
    const formContext = useFormContext()
    const { formState: { errors } } = formContext
    return (
        <FormField
            name={name}
            render={({ field }) => (
                <FormItem>
                    {label && <FormLabel className={""}>{label}</FormLabel>}
                    {children && children}
                    <FormControl>
                        {type === "file" ?
                            <Input type={type ? type : "text"} placeholder={placeholder} className={"rounded-none"} multiple={multiple ? multiple : ""} accept={accept ? accept : ""} onChange={onChange} {...props} name={field.name} />
                            :
                            <Input type={type ? type : "text"} placeholder={placeholder} className={"rounded-none"} multiple={multiple ? multiple : ""} accept={accept ? accept : ""}  {...field} />
                        }
                    </FormControl>
                    {errors && <FormMessage />}
                </FormItem>
            )}
        />
    )
}

export default CustomInput