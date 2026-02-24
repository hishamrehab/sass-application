"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { signUpSchema } from "@/app/schemas/auth";

export default function SignUpPage() {
  const form = useForm({
    resolver: zodResolver(signUpSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });

  function onSubmit() {
     console.log("submit")
  }

  return (
         <Card>
            <CardHeader>
                <CardTitle>Sign up</CardTitle>
                <CardDescription>Create a new account to get started.</CardDescription>
            </CardHeader>
         
          <CardContent>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FieldGroup className="gap-y-4">
                    <Controller
                     name="name" 
                     control={form.control}
                     render={({field , fieldState}) => (
                        <Field>
                            <FieldLabel>Full Name</FieldLabel>
                            <Input
                            aria-invalid={fieldState.invalid}
                             placeholder="Hisham Rehab" {...field} />
                            {fieldState.invalid && (
                                <FieldError>{fieldState.error?.message}</FieldError>
                            )}
                        </Field>
                    )} />

               <Controller
                     name="email" 
                     control={form.control}
                     render={({field , fieldState}) => (
                        <Field>
                            <FieldLabel>Email</FieldLabel>
                            <Input
                            aria-invalid={fieldState.invalid}
                             placeholder="hisham@rehab.com"
                             type="email"
                             {...field} />
                            {fieldState.invalid && (
                                <FieldError>{fieldState.error?.message}</FieldError>
                            )}
                        </Field>
                    )} />


                        <Controller
                        name="password" 
                        control={form.control}
                        render={({field , fieldState}) => (
                        <Field>
                            <FieldLabel>Password</FieldLabel>
                            <Input
                             placeholder="*******"
                             type="password"
                           aria-invalid={fieldState.invalid}
                           {...field} />
                            {fieldState.invalid && (
                                <FieldError>{fieldState.error?.message}</FieldError>
                            )}
                        </Field>
                    )} />

                    <Button type="submit" className="w-full">Sign up</Button>



                </FieldGroup>
            </form>
          </CardContent>
         </Card>
    )
}
