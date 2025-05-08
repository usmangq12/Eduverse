import { ArrowLeft, Check, Clock, Edit, Eye, Save } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function SaveDraft() {
  return (
    <div className=" px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <Button asChild variant="outline" size="icon">
            <Link href="/teacher/courses/create">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Course Draft Saved</h1>
        </div>

        <Card className="mb-8">
          <CardHeader className="pb-4 text-center bg-emerald-50 border-b">
            <div className="mx-auto rounded-full bg-emerald-100 w-16 h-16 flex items-center justify-center mb-4">
              <Check className="h-8 w-8 text-emerald-600" />
            </div>
            <CardTitle className="text-2xl text-emerald-700">Draft Saved Successfully</CardTitle>
            <CardDescription>Your course progress has been saved</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <div className="aspect-video relative rounded-lg overflow-hidden bg-gray-100 mb-3">
                  <Image src="/blockchain-course.png" alt="Course thumbnail" fill className="object-cover" />
                </div>
                <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">Draft</Badge>
              </div>
              <div className="md:w-2/3 space-y-4">
                <h2 className="text-xl font-bold">Solana Smart Contract Development</h2>
                <div className="space-y-2">
                  <div className="text-sm font-medium">Course Completion</div>
                  <Progress value={35} className="h-2" />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>35% complete</span>
                    <span>4 of 5 sections needed</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-medium">Last Edited</div>
                    <div className="text-gray-600">Just now</div>
                  </div>
                  <div>
                    <div className="font-medium">Created On</div>
                    <div className="text-gray-600">May 8, 2023</div>
                  </div>
                  <div>
                    <div className="font-medium">Sections</div>
                    <div className="text-gray-600">2 sections, 6 lessons</div>
                  </div>
                  <div>
                    <div className="font-medium">Estimated Duration</div>
                    <div className="text-gray-600">1 hour 45 minutes</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row gap-3 pt-0">
            <Button className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white" asChild>
              <Link href="/teacher/courses/create">
                <Edit className="mr-2 h-4 w-4" /> Continue Editing
              </Link>
            </Button>
            <Button variant="outline" className="w-full sm:w-auto" asChild>
              <Link href="/teacher/courses/create/preview">
                <Eye className="mr-2 h-4 w-4" /> Preview Course
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>What's Next?</CardTitle>
            <CardDescription>Complete these steps to publish your course</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3 p-3 rounded-lg border">
              <div className="h-6 w-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                <Check className="h-4 w-4" />
              </div>
              <div>
                <div className="font-medium">Basic Information</div>
                <div className="text-sm text-gray-600">Course title, description, and thumbnail are complete</div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg border bg-amber-50">
              <div className="h-6 w-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0">
                <Clock className="h-4 w-4" />
              </div>
              <div>
                <div className="font-medium">Course Content</div>
                <div className="text-sm text-gray-600">
                  Add at least 3 more lessons to complete the curriculum requirements
                </div>
                <Button size="sm" variant="outline" className="mt-2" asChild>
                  <Link href="/teacher/courses/create/add-section">Add Section</Link>
                </Button>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg border bg-amber-50">
              <div className="h-6 w-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0">
                <Clock className="h-4 w-4" />
              </div>
              <div>
                <div className="font-medium">Pricing</div>
                <div className="text-sm text-gray-600">Set your course price in both fiat and cryptocurrency</div>
                <Button size="sm" variant="outline" className="mt-2" asChild>
                  <Link href="/teacher/courses/create">Complete Pricing</Link>
                </Button>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg border">
              <div className="h-6 w-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                <Check className="h-4 w-4" />
              </div>
              <div>
                <div className="font-medium">Requirements & Goals</div>
                <div className="text-sm text-gray-600">Course prerequisites and learning objectives are defined</div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg border bg-amber-50">
              <div className="h-6 w-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0">
                <Clock className="h-4 w-4" />
              </div>
              <div>
                <div className="font-medium">Course Settings</div>
                <div className="text-sm text-gray-600">Configure certificate options and additional settings</div>
                <Button size="sm" variant="outline" className="mt-2" asChild>
                  <Link href="/teacher/courses/create">Complete Settings</Link>
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t pt-6">
            <Button variant="outline" asChild>
              <Link href="/teacher/dashboard">Back to Dashboard</Link>
            </Button>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white" asChild>
              <Link href="/teacher/courses/create">
                <Save className="mr-2 h-4 w-4" /> Continue Course Creation
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <div className="mt-8 text-center text-sm text-gray-500">
          Your draft is automatically saved every 5 minutes. Last auto-save: Just now
        </div>
      </div>
    </div>
  )
}