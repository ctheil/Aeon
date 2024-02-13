"use client";
import React from "react";
// import { string, infer as zinfer, object } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { Formik } from "formik";
import { object, string } from "yup";

// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "../components/ui/form";
// import { Input } from "../components/ui/input";
// import { Button } from "../components/ui/button";
import axios from "axios";
// import { toast } from "sonner";
import CsrfInput from "../components/CsrfInput";

// const formSchema = object({
//   email: string().email({ message: "Invald email address" }),
//   password: string().min(4, {
//     message: "Password must be a minimum of 8 characters.",
//   }),
// });
type Props = {
  token: string;
};
const LoginForm = ({ token }: Props) => {
  // const form = useForm<zinfer<typeof formSchema>>({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //     email: "",
  //     password: "",
  //   },
  // });
  //
  const loginSchema = object({
    email: string().email(),
    password: string(),
  });
  type LoginData = {
    email: string;
    password: string;
  };

  type FormProps = {
    setSubmitting: (_: boolean) => void;
  };

  const handleSubmit = async (
    values: LoginData,
    { setSubmitting }: FormProps,
  ) => {
    setSubmitting(true);
    // try {
    //   const finalValues = {
    //     ...values,
    //     _csrf: token,
    //   };
    //   const res = await axios.post("/v1/auth/login", finalValues);
    //   if (res.data.success) {
    //     console.log("redirecting...");
    //     window.location.href = res.data.redirectURL;
    //   }
    // } catch (err) {
    //   console.error(err);
    //   // toast.error("Invalid username or password");
    // }
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={loginSchema}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit} className="space-y-8">
          <CsrfInput token={token} />
          <TextField
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            name="email"
            variant="outlined"
            fullWidth
          />
          <TextField
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            name="password"
            variant="outlined"
            fullWidth
          />
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
