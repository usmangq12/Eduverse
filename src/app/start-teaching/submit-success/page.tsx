import { CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Routes } from "@/lib/routes"

export default function SubmitSuccess() {
  return (
    <div className=" px-4 py-12">
      <div className="max-w-2xl mx-auto text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-6">
          <CheckCircle className="h-8 w-8 text-emerald-600" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Application Submitted Successfully!</h1>
        <p className="text-gray-600">
          Thank you for applying to become a teacher on our platform. We've received your application and will review it
          shortly.
        </p>
      </div>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>What Happens Next?</CardTitle>
          <CardDescription>Here's what you can expect from the application process</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-sm font-medium text-emerald-600">1</span>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Application Review</h3>
                <p className="text-gray-600">
                  Our team will review your application within 3-5 business days. We'll evaluate your expertise,
                  experience, and proposed course idea.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-sm font-medium text-emerald-600">2</span>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Email Confirmation</h3>
                <p className="text-gray-600">
                  You'll receive an email notification about your application status. If approved, you'll get access to
                  our teacher dashboard and course creation tools.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-sm font-medium text-emerald-600">3</span>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Onboarding Call</h3>
                <p className="text-gray-600">
                  Once approved, we'll schedule a brief onboarding call to walk you through our platform, answer any
                  questions, and help you get started with creating your first course.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-4">
          <Button asChild variant="outline" className="w-full sm:w-auto">
            <Link href={Routes.Home}>Return to Home</Link>
          </Button>
          <Button asChild className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white">
            <Link href={Routes.TeacherDashboard}>
              Preview Teacher Dashboard <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>

      <div className="max-w-2xl mx-auto mt-12 p-6 bg-emerald-50 rounded-lg">
        <h2 className="text-xl font-bold mb-4">While You Wait</h2>
        <p className="text-gray-600 mb-4">
          Here are some resources to help you prepare for creating your first course:
        </p>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
            <span>
              Review our{" "}
              <Link href="#" className="text-emerald-600 hover:underline">
                Course Creation Guidelines
              </Link>
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
            <span>
              Watch our{" "}
              <Link href="#" className="text-emerald-600 hover:underline">
                Teacher Onboarding Video
              </Link>
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
            <span>Prepare your course outline and materials</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
            <span>
              Join our{" "}
              <Link href="#" className="text-emerald-600 hover:underline">
                Teacher Community Forum
              </Link>
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}
