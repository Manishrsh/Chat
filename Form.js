import React from 'react'
import { useForm } from "react-hook-form"

function Form() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm() ;

      const onSubmit = (data) => console.log(data)


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    {/* register your input into the hook by invoking the "register" function */}
    <input defaultValue="test" {...register("username")} />

    {/* include validation with required or other standard HTML validation rules */}
    <input {...register("exampleRequired", { required: true , minLength:{value:3,message:"No"}})} />
    {/* errors will return when field validation fails  */}
    {errors.exampleRequired && <span>{errors.exampleRequired.message}</span>}

    <input type="submit" />
  </form>

    )
}

export default Form