import { FormInputProps } from "./FormInputProps";

import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

interface FormInputTextProps extends FormInputProps {
  label : string
  helperText?: string;
  type:  string;
  className?: string
}

export const FormInputText = ({
  label,
  name,
  control,
  helperText,
  type,
  className
}: FormInputTextProps) => {
  return (
        <FormField
          control={control}
          name={name}
          render={({ field, fieldState: { error } }) => (
            <FormItem>
              <FormLabel>{label}</FormLabel>
              <FormControl>
                <Input className={className} type={type} placeholder="shadcn" {...field} />
              </FormControl>
              {
                !error ? <FormDescription>
                {helperText}
              </FormDescription> : <FormMessage className="text-sm" />
              }
              
              
            </FormItem>
          )}
          />)
};

export default FormInputText