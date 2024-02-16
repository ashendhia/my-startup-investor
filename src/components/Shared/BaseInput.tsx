import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const BaseInput = ({
  label,
  type,
  placeholder,
  id,
  classNames,
}: {
  label: string;
  type: string;
  placeholder: string;
  id: string;
  classNames?: string;
}) => {
  return (
    <div className={cn(`grid w-full items-center gap-1.5`, classNames)} id={id}>
      <Label className="flex self-start" htmlFor={label}>
        {label}
      </Label>
      <Input type={type} id={label} placeholder={placeholder} />
    </div>
  );
};

export default BaseInput;
