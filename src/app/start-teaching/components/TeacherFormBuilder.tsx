"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { Routes } from "@/lib/routes";

const formSchema = z.object({
  firstname: z.string().min(2, {
    message: "First Name must be at least 2 characters.",
  }),
  lastname: z.string().min(2, {
    message: "Last Name must be at least 2 characters.",
  }),
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
  price: z.string().min(1, "Price Required"),

  experience: z.string().min(1, "Experience Required").max(500, {
    message: "Experience must not exceed 500 characters.",
  }),
  courseIdea: z.string().min(1, "Course Idea Required").max(500, {
    message: "Course Idea must not exceed 500 characters.",
  }),
});

export const TeacherFormBuilder = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      price: "",
      experience: "",
      courseIdea: "",
    },
  });
  const router = useRouter();
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    router.push(Routes.SubmitSuccess);
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Teacher Application</CardTitle>
        <CardDescription>
          Tell us about yourself and your teaching experience
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 flex flex-col"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your first name " {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your last name " {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email " min={0} {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter course price "
                      min={0}
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="experience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Teaching Experience</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your teaching experience and qualifications"
                      className="min-h-[130px]"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="courseIdea"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course Idea</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Briefly describe the course you'd like to create"
                      className="min-h-[130px]"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="bg-emerald-600 hover:bg-emerald-700 text-white self-end "
              // type="submit"
            >
              Submit
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
