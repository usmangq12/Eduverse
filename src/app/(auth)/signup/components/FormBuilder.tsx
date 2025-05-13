"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useRouter } from "next/navigation"
import { Routes } from "@/lib/routes"
import { UserIcon, MailIcon } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),

  email: z.string().min(1, { message: "This field has to be filled." }).email("This is not a valid email."),
})

export const FormBuilder = ({
  userType,
}: {
  userType: "student" | "teacher"
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  })
  const router = useRouter()
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values, userType)
    router.push(Routes.SubmitSuccess)
  }

  return (
    <Card className="h-auto w-full max-w-md mx-auto shadow-lg border-0">
      <CardHeader className="space-y-1 pb-2">
        <CardTitle className="text-2xl font-bold text-center">
          Sign Up as {userType.charAt(0).toUpperCase() + userType.slice(1)}
        </CardTitle>
        <CardDescription className="text-center">Create your account and tell us a bit about yourself</CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <UserIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      <Input placeholder="Enter your name" className="pl-10" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <MailIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      <Input placeholder="Enter your email" className="pl-10" type="email" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <CardFooter className="flex justify-between px-0 pt-2">
              <Button
                className="text-gray-600 hover:text-gray-500"
                type="button"
                variant="outline"
                onClick={() => router.push(Routes.Home)}
              >
                Cancel
              </Button>
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white" type="submit">
                Submit
              </Button>
            </CardFooter>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
