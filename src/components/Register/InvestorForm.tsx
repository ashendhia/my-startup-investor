import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
} from "@/components/ui/form"

import FormInputText from "../Form/FormInputText"
import { useState } from "react"
import { Step, StepLabel, Stepper } from "@mui/material"
import axios from "axios"
import { useNavigate } from "react-router-dom"


const InvestorForm = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [ isLoading, setIsLoading ] = useState<boolean>(false);


  const formSchema = z.object({
    firstName: z.string().min(2, {
      message: "First name must be at least 2 characters.",
    }),
    lastName: z.string().min(2, {
      message: "Last name must be at least 2 characters.",
    }),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters long.",
    }),
    phoneNumber: z.string().min(10, {
      message: "Phone number must be at least 10 characters long.",
    }),
    city: z.string().min(2, {
      message: "City name must be at least 2 characters long.",
    }),
    zipCode: z.string().min(5, {
      message: "Zip code must be at least 5 characters long.",
    }),
    adresse: z.string().min(5, {
      message: "Address must be at least 5 characters long.",
    }),
    description: z.string().min(10, {
      message: "Description must be at least 10 characters long.",
    }),
  });

  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phoneNumber: "",
      city: "",
      zipCode: "",
      adresse: "",
      description: "",
    },
    mode: "onChange"
  });

    const apiUrl = import.meta.env.VITE_REACT_API_URL;

  const createStartUp = async () => {
    setIsLoading(true);
    try {
      const res = await axios.post(`${apiUrl}/investors`, form.getValues());
      if (res.status === 201) {
        setIsLoading(false);
        navigate("/login")
    } else if (res.status === 500) {
        console.log("error", res);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    } catch(err) {
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }


function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    createStartUp();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-between h-full ">
        <div>
          <Stepper activeStep={currentStep - 1} alternativeLabel>
            <Step>
              <StepLabel className="">Step 1</StepLabel>
            </Step>
            <Step>
              <StepLabel className="">Step 2</StepLabel>
            </Step>
          </Stepper>
        </div>
        <div className="flex gap-5 items-center flex-wrap justify-center w-[80%] mx-auto">
          {currentStep === 1 ? (
            <>
              <FormInputText label="First name" name="firstName" control={form.control} type="text" className="w-[200px]" />
              <FormInputText label="Last name" name="lastName" control={form.control} type="text" className="w-[200px]" />
              <FormInputText label="Email" name="email" control={form.control} type="email" className="w-[200px]" />
              <FormInputText label="Password" name="password" control={form.control} type="password" className="w-[200px]" />
            </>
          ) : currentStep === 2 ? (
            <>
              <FormInputText label="Phone number" name="phoneNumber" control={form.control} type="text" className="w-[200px]" />
              <FormInputText label="City" name="city" control={form.control} type="text" className="w-[200px]" />
              <FormInputText label="Zip Code" name="zipCode" control={form.control} type="text" className="w-[200px]" />
              <FormInputText label="Addresse" name="adresse" control={form.control} type="text" className="w-[200px]" />
              <FormInputText label="Description" name="description" control={form.control} type="text" className="w-[200px]" />
            </>
          ): null}
        </div>
        <div className="flex items-center justify-center gap-2">
          {currentStep !== 1 && (
            <Button className="px-5" onClick={() => setCurrentStep(currentStep - 1)}>Previous</Button>
          )}
          {currentStep !== 2 && (
            <Button className="px-5" onClick={() => setCurrentStep(currentStep + 1)}>Next</Button>
          )}
          {currentStep === 2 && (
            <>
              {isLoading ? (
                <div className="spinner">
                </div>
              ) : (
                <Button className="px-5" type="submit">Submit</Button>
              )}
            </>
          )}
        </div>
      </form>
    </Form>
  );
}

export default InvestorForm;
