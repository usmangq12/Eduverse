import { ArrowLeft, Upload, Video, ImageIcon, FileText, Plus, Save, CheckCircle, HelpCircle } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function UploadNewCourse() {
  return (
    <div className="container px-4 py-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div className="flex items-center gap-2">
          <Button asChild variant="outline" size="icon">
            <Link href="/design3/teacher/dashboard">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold">Create New Course</h1>
            <p className="text-gray-600">Start building your blockchain course</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Save as Draft</Button>
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Preview Course</Button>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="sticky top-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Course Progress</CardTitle>
                <CardDescription>Complete all required sections</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Overall Completion</span>
                    <span className="font-medium">35%</span>
                  </div>
                  <Progress value={35} className="h-2 bg-gray-100"  />
                </div>

                <div className="space-y-3">
                  {[
                    { name: "Basic Information", complete: true },
                    { name: "Course Content", complete: false, current: true },
                    { name: "Pricing & Promotions", complete: false },
                    { name: "Requirements & Goals", complete: true },
                    { name: "Course Settings", complete: false },
                  ].map((section, i) => (
                    <div
                      key={i}
                      className={`flex items-center justify-between p-2 rounded-md ${
                        section.current ? "bg-emerald-50 border border-emerald-200" : ""
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`h-5 w-5 rounded-full flex items-center justify-center ${
                            section.complete
                              ? "bg-emerald-100 text-emerald-600"
                              : section.current
                                ? "bg-emerald-600 text-white"
                                : "bg-gray-200 text-gray-400"
                          }`}
                        >
                          {section.complete ? (
                            <CheckCircle className="h-4 w-4" />
                          ) : (
                            <span className="text-xs">{i + 1}</span>
                          )}
                        </div>
                        <span
                          className={
                            section.current ? "font-medium text-emerald-700" : section.complete ? "" : "text-gray-500"
                          }
                        >
                          {section.name}
                        </span>
                      </div>
                      {section.complete && <CheckCircle className="h-4 w-4 text-emerald-600" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
                <CardDescription>Resources for course creators</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-2 text-sm">
                  <HelpCircle className="h-4 w-4 text-emerald-600 mt-0.5" />
                  <span>
                    <span className="font-medium block">Course Structure Guide</span>
                    <span className="text-gray-500">Learn how to organize your content effectively</span>
                  </span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <HelpCircle className="h-4 w-4 text-emerald-600 mt-0.5" />
                  <span>
                    <span className="font-medium block">Video Recording Tips</span>
                    <span className="text-gray-500">Best practices for creating engaging videos</span>
                  </span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <HelpCircle className="h-4 w-4 text-emerald-600 mt-0.5" />
                  <span>
                    <span className="font-medium block">Pricing Strategy</span>
                    <span className="text-gray-500">How to price your course for maximum revenue</span>
                  </span>
                </div>
                <Button variant="outline" className="w-full">
                  Visit Teacher Help Center
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="lg:col-span-3">
          <Tabs defaultValue="content" className="space-y-8">
            <TabsList className="w-full border-b pb-px justify-start">
              <TabsTrigger value="basics">Basic Info</TabsTrigger>
              <TabsTrigger value="content">Course Content</TabsTrigger>
              <TabsTrigger value="pricing">Pricing</TabsTrigger>
              <TabsTrigger value="requirements">Requirements</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="basics">
              <Card>
                <CardHeader>
                  <CardTitle>Basic Information</CardTitle>
                  <CardDescription>Set up the fundamental details of your course</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Basic info form content would go here */}
                  <div className="text-center text-gray-500 py-8">Basic information section is complete</div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="content" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Course Structure</CardTitle>
                  <CardDescription>Organize your course into sections and lessons</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="border rounded-md overflow-hidden">
                      <div className="bg-gray-50 p-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">Section 1: Introduction to Blockchain</span>
                          <Badge className="bg-emerald-100 text-emerald-800">4 Lessons</Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                          <Button variant="ghost" size="sm">
                            Reorder
                          </Button>
                        </div>
                      </div>
                      <div className="divide-y">
                        {[
                          {
                            title: "Welcome and Course Overview",
                            type: "Video",
                            duration: "8:45",
                            status: "Uploaded",
                          },
                          {
                            title: "What is Blockchain Technology?",
                            type: "Video",
                            duration: "12:20",
                            status: "Uploaded",
                          },
                          {
                            title: "Key Blockchain Concepts",
                            type: "Reading",
                            duration: "15 min",
                            status: "Uploaded",
                          },
                          {
                            title: "Introduction Quiz",
                            type: "Quiz",
                            duration: "10 min",
                            status: "Draft",
                          },
                        ].map((lesson, i) => (
                          <div key={i} className="p-4 flex items-center justify-between hover:bg-gray-50">
                            <div className="flex items-center gap-3">
                              <div className="text-gray-400 text-sm">{i + 1}.</div>
                              <div>
                                <div className="font-medium">{lesson.title}</div>
                                <div className="text-sm text-gray-500">
                                  {lesson.type} • {lesson.duration}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className={
                                  lesson.status === "Uploaded"
                                    ? "border-emerald-500 text-emerald-600 bg-emerald-50"
                                    : "border-amber-500 text-amber-600 bg-amber-50"
                                }
                              >
                                {lesson.status}
                              </Badge>
                              <Button variant="ghost" size="sm">
                                Edit
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="p-3 bg-gray-50 border-t">
                        <Button variant="outline" size="sm" className="w-full">
                          <Plus className="h-4 w-4 mr-2" /> Add Lesson
                        </Button>
                      </div>
                    </div>

                    <div className="border rounded-md overflow-hidden">
                      <div className="bg-gray-50 p-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">Section 2: Solana Fundamentals</span>
                          <Badge className="bg-emerald-100 text-emerald-800">2 Lessons</Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                          <Button variant="ghost" size="sm">
                            Reorder
                          </Button>
                        </div>
                      </div>
                      <div className="divide-y">
                        {[
                          {
                            title: "Introduction to Solana",
                            type: "Video",
                            duration: "15:30",
                            status: "Uploaded",
                          },
                          {
                            title: "Solana Architecture",
                            type: "Video",
                            duration: "18:45",
                            status: "Uploaded",
                          },
                        ].map((lesson, i) => (
                          <div key={i} className="p-4 flex items-center justify-between hover:bg-gray-50">
                            <div className="flex items-center gap-3">
                              <div className="text-gray-400 text-sm">{i + 1}.</div>
                              <div>
                                <div className="font-medium">{lesson.title}</div>
                                <div className="text-sm text-gray-500">
                                  {lesson.type} • {lesson.duration}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className="border-emerald-500 text-emerald-600 bg-emerald-50">
                                {lesson.status}
                              </Badge>
                              <Button variant="ghost" size="sm">
                                Edit
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="p-3 bg-gray-50 border-t">
                        <Button variant="outline" size="sm" className="w-full">
                          <Plus className="h-4 w-4 mr-2" /> Add Lesson
                        </Button>
                      </div>
                    </div>

                    <Button className="w-full">
                      <Plus className="h-4 w-4 mr-2" /> Add New Section
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Upload Course Content</CardTitle>
                  <CardDescription>Add videos, documents, and other materials</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed rounded-lg p-8 text-center">
                    <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium mb-2">Drag and drop files here</h3>
                    <p className="text-gray-600 mb-6">Support for videos, documents, images, code files, and more</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                        <Upload className="mr-2 h-4 w-4" /> Upload Files
                      </Button>
                      <Button variant="outline">
                        <Video className="mr-2 h-4 w-4" /> Record Video
                      </Button>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="font-medium">Recently Uploaded (3)</div>

                    <div className="grid gap-4 md:grid-cols-2">
                      {[
                        {
                          name: "intro-to-blockchain.mp4",
                          type: "video",
                          size: "18.2 MB",
                          date: "Just now",
                          icon: Video,
                          color: "blue",
                          progress: 100,
                        },
                        {
                          name: "solana-whitepaper.pdf",
                          type: "document",
                          size: "2.4 MB",
                          date: "2 minutes ago",
                          icon: FileText,
                          color: "emerald",
                          progress: 100,
                        },
                        {
                          name: "blockchain-diagram.png",
                          type: "image",
                          size: "1.2 MB",
                          date: "5 minutes ago",
                          icon: ImageIcon,
                          color: "purple",
                          progress: 80,
                        },
                      ].map((file, i) => (
                        <div key={i} className="border rounded-md p-3 flex items-center gap-3">
                          <div
                            className={`h-10 w-10 text-${file.color}-500 bg-${file.color}-50 p-2 rounded-md flex items-center justify-center`}
                          >
                            <file.icon className="h-5 w-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium truncate">{file.name}</div>
                            <div className="text-xs text-gray-500">
                              {file.type} • {file.size} • {file.date}
                            </div>
                            {file.progress < 100 && (
                              <Progress
                                value={file.progress}
                                className="h-1 bg-gray-100 mt-1"
                                
                              />
                            )}
                          </div>
                          <Button variant="ghost" size="sm">
                            Assign
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Uploaded Files
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="pricing">
              <Card>
                <CardHeader>
                  <CardTitle>Pricing & Promotions</CardTitle>
                  <CardDescription>Set your course price and promotional offers</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="pricing-model">Pricing Model</Label>
                      <Select defaultValue="one-time">
                        <SelectTrigger id="pricing-model">
                          <SelectValue placeholder="Select pricing model" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="one-time">One-time Purchase</SelectItem>
                          <SelectItem value="subscription">Subscription</SelectItem>
                          <SelectItem value="free">Free</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="base-price">Base Price (USD)</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                          <Input id="base-price" type="number" className="pl-7" defaultValue="79.99" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="token-price">Token Price (SOL)</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">◎</span>
                          <Input id="token-price" type="number" className="pl-7" defaultValue="0.5" />
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="enable-promotions" className="text-base cursor-pointer">
                          Enable Promotional Offers
                        </Label>
                        <input
                          id="enable-promotions"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-600"
                          defaultChecked
                        />
                      </div>
                      <p className="text-sm text-gray-500">
                        Create limited-time discounts and special offers for your course
                      </p>
                    </div>

                    <div className="border rounded-md p-4 space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="promo-name">Promotion Name</Label>
                        <Input id="promo-name" placeholder="e.g., Launch Special" defaultValue="Early Bird Discount" />
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="discount-type">Discount Type</Label>
                          <Select defaultValue="percentage">
                            <SelectTrigger id="discount-type">
                              <SelectValue placeholder="Select discount type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="percentage">Percentage (%)</SelectItem>
                              <SelectItem value="fixed">Fixed Amount ($)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="discount-value">Discount Value</Label>
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">%</span>
                            <Input id="discount-value" type="number" className="pl-7" defaultValue="20" />
                          </div>
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="start-date">Start Date</Label>
                          <Input id="start-date" type="date" defaultValue="2023-06-01" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="end-date">End Date</Label>
                          <Input id="end-date" type="date" defaultValue="2023-06-30" />
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <Button variant="outline">Add Promotion</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Cancel</Button>
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Save Pricing</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="requirements">
              <Card>
                <CardHeader>
                  <CardTitle>Requirements & Goals</CardTitle>
                  <CardDescription>Define prerequisites and learning objectives</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Requirements form content would go here */}
                  <div className="text-center text-gray-500 py-8">Requirements section is complete</div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>Course Settings</CardTitle>
                  <CardDescription>Configure additional course options</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="course-language">Course Language</Label>
                      <Select defaultValue="english">
                        <SelectTrigger id="course-language">
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="english">English</SelectItem>
                          <SelectItem value="spanish">Spanish</SelectItem>
                          <SelectItem value="french">French</SelectItem>
                          <SelectItem value="german">German</SelectItem>
                          <SelectItem value="chinese">Chinese</SelectItem>
                          <SelectItem value="japanese">Japanese</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="course-level">Course Level</Label>
                      <Select defaultValue="intermediate">
                        <SelectTrigger id="course-level">
                          <SelectValue placeholder="Select level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Beginner</SelectItem>
                          <SelectItem value="intermediate">Intermediate</SelectItem>
                          <SelectItem value="advanced">Advanced</SelectItem>
                          <SelectItem value="all-levels">All Levels</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="course-category">Primary Category</Label>
                      <Select defaultValue="blockchain">
                        <SelectTrigger id="course-category">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="blockchain">Blockchain</SelectItem>
                          <SelectItem value="cryptocurrency">Cryptocurrency</SelectItem>
                          <SelectItem value="web3">Web3</SelectItem>
                          <SelectItem value="defi">DeFi</SelectItem>
                          <SelectItem value="nft">NFTs</SelectItem>
                          <SelectItem value="programming">Programming</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="certificate" className="text-base cursor-pointer">
                          Issue Completion Certificate
                        </Label>
                        <input
                          id="certificate"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-600"
                          defaultChecked
                        />
                      </div>
                      <p className="text-sm text-gray-500">
                        Students will receive an NFT certificate upon course completion
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="forum" className="text-base cursor-pointer">
                          Enable Course Forum
                        </Label>
                        <input
                          id="forum"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-600"
                          defaultChecked
                        />
                      </div>
                      <p className="text-sm text-gray-500">
                        Allow students to discuss course content and ask questions
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="preview" className="text-base cursor-pointer">
                          Enable Course Preview
                        </Label>
                        <input
                          id="preview"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-600"
                          defaultChecked
                        />
                      </div>
                      <p className="text-sm text-gray-500">
                        Allow potential students to preview selected course content before enrolling
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Cancel</Button>
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Save Settings</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-8 flex justify-between">
            <Button variant="outline" asChild>
              <Link href="/teacher/dashboard">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
              </Link>
            </Button>
            <div className="space-x-2">
              <Button variant="outline">Save as Draft</Button>
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                <Save className="mr-2 h-4 w-4" /> Submit for Review
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
