import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
} from "@/components/ui/form"

import FormInputText from "../Form/FormInputText"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"


const StartUpLogin = () => {
  const [ isLoading, setIsLoading ] = useState<boolean>(false);



    const formSchema = z.object({
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters long.",
    }),
  });


    const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange"
  });

    const apiUrl = import.meta.env.VITE_REACT_API_URL;

  const login = async () => {
    setIsLoading(true);
    const res = await axios.post(`${apiUrl}/investors`, form.getValues());
    if (res.status === 201) {
      setIsLoading(false);
      navigate("/dashboard")
  } else if (res.status === 500) {
      console.log("error", res);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }


function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    login();
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-between h-full ">
        <div className="flex gap-5 items-center flex-col justify-center w-[80%] mx-auto">
              <FormInputText label="Email" name="email" control={form.control} type="email" className="w-[300px]" />
              <FormInputText label="Password" name="password" control={form.control} type="password" className="w-[300px]" />
        <div className="flex items-center justify-center gap-2">
              {isLoading ? (
                <div className="spinner">
                </div>
              ) : (
                <Button className="px-5" type="submit">Submit</Button>
              )}
        </div>
        </div>
      </form>
    </Form>
  )
}

export default StartUpLogin