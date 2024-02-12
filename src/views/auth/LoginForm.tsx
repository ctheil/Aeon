"use client";
import React from "react";
import { string, infer as zinfer, object } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import axios from "axios";
import { toast } from "sonner";
import CsrfInput from "../components/CsrfInput";

const formSchema = object({
  email: string().email({ message: "Invald email address" }),
  password: string().min(4, {
    message: "Password must be a minimum of 8 characters.",
  }),
});
type Props = {
  token: string;
};
const LoginForm = ({ token }: Props) => {
  const form = useForm<zinfer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: zinfer<typeof formSchema>) => {
    try {
      const finalValues = {
        ...values,
        _csrf: token,
      };
      const res = await axios.post("/v1/auth/login", finalValues);
      if (res.data.success) {
        console.log("redirecting...");
        window.location.href = res.data.redirectURL;
      }
    } catch (err) {
      console.error(err);
      toast.error("Invalid username or password");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <CsrfInput token={token} />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email" {...field} />
                </FormControl>
                <FormDescription>
                  The email associated with your account.
                </FormDescription>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="password" {...field} />
                </FormControl>
                <FormDescription>
                  Must be a minimum of 8 characters
                </FormDescription>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default LoginForm;
