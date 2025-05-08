'use client'
import { Save, ArrowLeft, Plus, Upload, Video, FileText, Code, HelpCircle, Eye } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Routes } from "@/lib/routes"
import { useRouter } from "next/navigation"

export default function CreateCourse() {
  const router   = useRouter()
  return (
    <div className="px-4 py-12">
      <div className="flex items-center gap-2 mb-8">
        <Button asChild variant="outline" size="icon">
          <Link href={Routes.TeacherDashboard}>
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Create New Course</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-64 space-y-4">
          <div className="sticky top-6">
            <Card>
              <CardContent className="p-4">
                <nav className="space-y-2">
                  <a
                    href="#basic-info"
                    className="flex items-center gap-2 p-2 rounded-md bg-emerald-50 text-emerald-700 font-medium"
                  >
                    <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center text-xs">
                      1
                    </div>
                    <span>Basic Info</span>
                  </a>
                  <a
                    href="#curriculum"
                    className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 text-gray-700"
                  >
                    <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-xs">2</div>
                    <span>Curriculum</span>
                  </a>
                  <a href="#pricing" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 text-gray-700">
                    <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-xs">3</div>
                    <span>Pricing</span>
                  </a>
                  <a
                    href="#settings"
                    className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 text-gray-700"
                  >
                    <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-xs">4</div>
                    <span>Settings</span>
                  </a>
                </nav>
              </CardContent>
            </Card>

            <Card className="mt-4">
              <CardContent className="p-4">
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-medium mb-1">Course Status</div>
                    <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">Draft</Badge>
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-1">Completion</div>
                    <div className="h-2 w-full bg-gray-100 rounded-full">
                      <div className="h-2 w-1/4 bg-emerald-600 rounded-full"></div>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">25% complete</div>
                  </div>
                  <div className="pt-2">
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white" onClick = {()=>{router.push("/teacher/courses/save-draft")}}>
                      <Save className="mr-2 h-4 w-4" /> Save Draft
                    </Button>
                  </div>
                  <div>
                    <Button variant="outline" className="w-full" onClick={()=>{router.push("/teacher/courses/3/preview")}}>
                      <Eye className="mr-2 h-4 w-4" /> Preview Course
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-4">
              <CardContent className="p-4">
                <div className="text-sm font-medium mb-2">Need Help?</div>
                <p className="text-sm text-gray-600 mb-3">
                  Check out our course creation guides or contact support for assistance.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  <HelpCircle className="mr-2 h-4 w-4" /> Get Help
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex-1">
          <div id="basic-info" className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>Provide the essential details about your course</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="course-title">Course Title</Label>
                  <Input id="course-title" placeholder="e.g., Solana Smart Contract Development" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="course-subtitle">Subtitle</Label>
                  <Input id="course-subtitle" placeholder="e.g., Learn to build secure and efficient smart contracts" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="course-description">Description</Label>
                  <Textarea
                    id="course-description"
                    placeholder="Describe what students will learn in your course"
                    className="min-h-[150px]"
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="course-category">Category</Label>
                    <Select>
                      <SelectTrigger id="course-category">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="solana">Solana Development</SelectItem>
                        <SelectItem value="smart-contracts">Smart Contracts</SelectItem>
                        <SelectItem value="defi">DeFi Applications</SelectItem>
                        <SelectItem value="nft">NFT Creation</SelectItem>
                        <SelectItem value="security">Blockchain Security</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="course-level">Level</Label>
                    <Select>
                      <SelectTrigger id="course-level">
                        <SelectValue placeholder="Select a level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Course Thumbnail</Label>
                  <div className="border-2 border-dashed rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                    <p className="text-sm text-gray-600 mb-2">Drag and drop your thumbnail image here</p>
                    <p className="text-xs text-gray-500 mb-4">Recommended size: 1280x720px (16:9 ratio)</p>
                    <Button variant="outline" size="sm">
                      Browse Files
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Course Promo Video (Optional)</Label>
                  <div className="border-2 border-dashed rounded-lg p-6 text-center">
                    <Video className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                    <p className="text-sm text-gray-600 mb-2">Upload a short promotional video for your course</p>
                    <p className="text-xs text-gray-500 mb-4">Max duration: 2 minutes, Max size: 100MB</p>
                    <Button variant="outline" size="sm">
                      Browse Files
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div id="curriculum" className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Course Curriculum</CardTitle>
                <CardDescription>Organize your course content into sections and lessons</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-gray-50 p-4 flex items-center justify-between">
                    <div className="font-medium">Section 1: Introduction to Solana</div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                        Delete
                      </Button>
                    </div>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="flex items-center gap-3 p-3 border rounded-md">
                      <Video className="h-5 w-5 text-gray-400" />
                      <div className="flex-1">
                        <div className="font-medium">1.1 Welcome and Course Overview</div>
                        <div className="text-sm text-gray-500">Video • 5:30</div>
                      </div>
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </div>
                    <div className="flex items-center gap-3 p-3 border rounded-md">
                      <Video className="h-5 w-5 text-gray-400" />
                      <div className="flex-1">
                        <div className="font-medium">1.2 Setting Up Your Development Environment</div>
                        <div className="text-sm text-gray-500">Video • 12:45</div>
                      </div>
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </div>
                    <div className="flex items-center gap-3 p-3 border rounded-md">
                      <FileText className="h-5 w-5 text-gray-400" />
                      <div className="flex-1">
                        <div className="font-medium">1.3 Solana Architecture Overview</div>
                        <div className="text-sm text-gray-500">Article • 10 min read</div>
                      </div>
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </div>
                    <Button variant="outline" size="sm" className="ml-8 bg-emerald-600 hover:bg-emerald-700 text-white">
                      <Plus className="h-4 w-4 mr-1" /> Add Lesson
                    </Button>
                  </div>
                </div>

                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-gray-50 p-4 flex items-center justify-between">
                    <div className="font-medium">Section 2: Smart Contract Basics</div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                        Delete
                      </Button>
                    </div>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="flex items-center gap-3 p-3 border rounded-md">
                      <Video className="h-5 w-5 text-gray-400" />
                      <div className="flex-1">
                        <div className="font-medium">2.1 Understanding Smart Contracts</div>
                        <div className="text-sm text-gray-500">Video • 15:20</div>
                      </div>
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </div>
                    <div className="flex items-center gap-3 p-3 border rounded-md">
                      <Code className="h-5 w-5 text-gray-400" />
                      <div className="flex-1">
                        <div className="font-medium">2.2 Writing Your First Smart Contract</div>
                        <div className="text-sm text-gray-500">Coding Exercise • 30 min</div>
                      </div>
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </div>
                    <Button variant="outline" size="sm" className="ml-8 bg-emerald-600 hover:bg-emerald-700 text-white">
                      <Plus className="h-4 w-4 mr-1" /> Add Lesson
                    </Button>
                  </div>
                </div>

                <Button className="w-full bg-emerald-600 hover:bg-emerald-700" onClick={()=>{router.push('/teacher/courses/create/add-section')}}>
                  <Plus className="h-4 w-4 mr-1" /> Add New Section
                </Button>
              </CardContent>
            </Card>
          </div>

          <div id="pricing" className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Course Pricing</CardTitle>
                <CardDescription>Set the price for your course</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Tabs defaultValue="paid">
                  <TabsList className="mb-4">
                    <TabsTrigger value="paid">Paid Course</TabsTrigger>
                    <TabsTrigger value="free">Free Course</TabsTrigger>
                  </TabsList>
                  <TabsContent value="paid" className="space-y-4">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="course-price">Price (USD)</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                          <Input id="course-price" className="pl-7" placeholder="49.99" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="course-currency">Currency</Label>
                        <Select defaultValue="usd">
                          <SelectTrigger id="course-currency">
                            <SelectValue placeholder="Select currency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="usd">USD ($)</SelectItem>
                            <SelectItem value="sol">SOL</SelectItem>
                            <SelectItem value="usdc">USDC</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="font-medium mb-2">Price Breakdown</div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Your Price</span>
                          <span>$49.99</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Platform Fee (15%)</span>
                          <span>-$7.50</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Transaction Fee</span>
                          <span>-$1.50</span>
                        </div>
                        <Separator className="my-2" />
                        <div className="flex justify-between font-medium">
                          <span>Your Earnings Per Sale</span>
                          <span className="text-emerald-600">$40.99</span>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="free">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-gray-600 mb-2">
                        Your course will be available for free to all students. This is a great way to build your
                        audience and showcase your expertise.
                      </p>
                      <p className="text-sm text-gray-500">
                        Note: You can change your course from free to paid later, but not from paid to free.
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div id="settings" className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Course Settings</CardTitle>
                <CardDescription>Configure additional settings for your course</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Course Visibility</Label>
                      <p className="text-sm text-gray-500">Control who can see your course</p>
                    </div>
                    <Select defaultValue="private">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select visibility" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="private">Private</SelectItem>
                        <SelectItem value="public">Public</SelectItem>
                        <SelectItem value="unlisted">Unlisted</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Certificate of Completion</Label>
                      <p className="text-sm text-gray-500">
                        Issue NFT certificates to students who complete the course
                      </p>
                    </div>
                    <Switch />
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Course Forum</Label>
                      <p className="text-sm text-gray-500">Enable a discussion forum for your course</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Student Prerequisites</Label>
                      <p className="text-sm text-gray-500">
                        Require students to meet certain criteria before enrolling
                      </p>
                    </div>
                    <Switch />
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Course Deadline</Label>
                      <p className="text-sm text-gray-500">Set a deadline for course completion</p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-between">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
            </Button>
            <div className="space-x-2">
              <Button variant="outline">Save as Draft</Button>
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Continue to Preview</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}