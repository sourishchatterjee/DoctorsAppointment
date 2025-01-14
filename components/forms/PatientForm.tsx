"use client"
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {Form} from "@/components/ui/form"
import CustomFormField from "../CustomFormField"
import SubmitButton from "../SubmitButton"
import {UserFormValidation} from "../../lib/validation"
import { useRouter } from "next/navigation"
import { createUser } from "@/lib/actions/patient.actions"

export  enum FormFieldType{
  INPUT="input",
  TEXTAREA ="textarea",
  PHONE_INPUT ="phoneInput",
  CHECKBOX="checkbox",
  DATE_PICKER ="datePicker",
  SELECT="select",
  SKELETON = "skeleton",
}

 function PatientForm() {

  const router= useRouter()
  const[isLoading,setLoading] = useState(false)
  // 1. Define  form for the first time.
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email:"",
      phone:"",
    },
  })

  // 2. Define a submit handler.
  async function onSubmit({name,email,phone}: z.infer<typeof UserFormValidation>) {
    setLoading(true);
    try{
    const userData={ name,email,phone,};

    const user= await createUser(userData);

    if(user) router.push(`/patients/${user.$id}/register`)

    }catch(error){
      console.log(error)
    }
    
    
  }

  return(
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
       
       <section className="mb-12 space-y-4">
        <h1 className="header"> Hello Every one! 👋 </h1>
        <p  className="text-dark-700"> Schedule your first appointment</p>
       </section>
       
<CustomFormField  
fieldType={FormFieldType.INPUT}
  control={form.control }
  name="name"
  label="Full name"
  placeholder="John Doe"
  iconSrc="/assets/user.png"
  iconAlt="user"
/>

<CustomFormField  
fieldType={FormFieldType.INPUT}
  control={form.control }
  name="email"
  label="Email"
  placeholder="John Doe@gmail.com"
  iconSrc="/assets/Email.png" 
  iconAlt="email"
/>
<CustomFormField  
fieldType={FormFieldType.PHONE_INPUT}
  control={form.control }
  name="phone"
  label="phone number"
  placeholder="(+91) 12398-45678"
  
/>

<SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
          </form>
        </Form>
  )
}

  export default PatientForm



