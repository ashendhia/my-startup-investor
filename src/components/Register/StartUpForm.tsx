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

const StartUpForm = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [ isLoading, setIsLoading ] = useState<boolean>(false);

  const navigate = useNavigate();

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  sector: z.string().min(2, {
    message: "Sector must be at least 2 characters.",
  }),
  marketCap: z.string().min(2, {
    message: "Market cap must be at least 2 characters.",
  }),
  activeYears: z.string().min(2, {
    message: "Active years must be at least 2 characters.",
  }),
  region: z.string().min(2, {
    message: "Region must be at least 2 characters.",
  }),
  longitude: z.string().min(2, {
    message: "Longitude must be at least 2 characters.",
  }),
  latitude: z.string().min(2, {
    message: "Latitude must be between -90 and 90.",
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
});


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      sector: "",
      marketCap: "",
      activeYears: "",
      region: "",
      longitude: "",
      latitude: "",
      email: "",
      password: "",
      phoneNumber: "",
    },
    mode: "onChange"
  });

    const apiUrl = import.meta.env.VITE_REACT_API_URL;

  const createStartUp = async () => {
    setIsLoading(true);
    const res = await axios.post(`${apiUrl}/startups`, form.getValues());
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
              <FormInputText label="Name" name="name" control={form.control} type="text" className="w-[200px]" />
              <FormInputText label="Sector" name="sector" control={form.control} type="text" className="w-[200px]" />
              <FormInputText label="Market Cap" name="marketCap" control={form.control} type="text" className="w-[200px]" />
              <FormInputText label="Active Years" name="activeYears" control={form.control} type="text" className="w-[200px]" />
              <FormInputText label="Region" name="region" control={form.control} type="text" className="w-[200px]" />
            </>
          ) : (
            <>
              <FormInputText label="Longitude" name="longitude" control={form.control} type="text" className="w-[200px]" />
              <FormInputText label="Latitude" name="latitude" control={form.control} type="text" className="w-[200px]" />
              <FormInputText label="Email" name="email" control={form.control} type="email" className="w-[200px]" />
              <FormInputText label="Password" name="password" control={form.control} type="password" className="w-[200px]" />
              <FormInputText label="Phone Number" name="phoneNumber" control={form.control} type="text" className="w-[200px]" />
            </>
          )}
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

export default StartUpForm;
