import { ArrowLeft, Plus, Trash, GripVertical, Save, X } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export default function AddSection() {
  return (
    <div className="px-4 py-12">
      <div className="flex items-center gap-2 mb-8">
        <Button asChild variant="outline" size="icon">
          <Link href="/teacher/courses/create">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Add New Section</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-64 space-y-4">
          <div className="sticky top-6">
            <Card>
              <CardContent className="p-4">
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-medium mb-1">Course</div>
                    <div className="font-medium">Solana Smart Contract Development</div>
                    <div className="text-xs text-gray-500">Draft • 25% complete</div>
                  </div>
                  <Separator />
                  <div>
                    <div className="text-sm font-medium mb-1">Current Sections</div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <Badge className="h-5 w-5 rounded-full p-0 flex items-center justify-center">1</Badge>
                        <span>Introduction to Solana</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Badge className="h-5 w-5 rounded-full p-0 flex items-center justify-center">2</Badge>
                        <span>Smart Contract Basics</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Badge className="h-5 w-5 rounded-full p-0 flex items-center justify-center bg-emerald-600">
                          3
                        </Badge>
                        <span className="font-medium text-emerald-600">New Section</span>
                      </li>
                    </ul>
                  </div>
                  <Separator />
                  <div className="pt-2">
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                      <Save className="mr-2 h-4 w-4" /> Save Section
                    </Button>
                  </div>
                  <div>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/teacher/courses/create">Cancel</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-4">
              <CardContent className="p-4">
                <div className="text-sm font-medium mb-2">Section Tips</div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Keep sections focused on a specific topic</li>
                  <li>• Aim for 4-8 lessons per section</li>
                  <li>• Use clear, descriptive titles</li>
                  <li>• Order content from basic to advanced</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex-1">
          <Card>
            <CardHeader>
              <CardTitle>Section Information</CardTitle>
              <CardDescription>Provide details about this section of your course</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="section-title">Section Title</Label>
                <Input id="section-title" placeholder="e.g., Advanced Solana Programming" />
                <p className="text-sm text-gray-500">
                  Choose a clear title that describes what students will learn in this section
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="section-description">Section Description (Optional)</Label>
                <Textarea
                  id="section-description"
                  placeholder="Briefly describe what this section covers"
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="section-order">Section Order</Label>
                <Select defaultValue="3">
                  <SelectTrigger id="section-order">
                    <SelectValue placeholder="Select position" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 - First section</SelectItem>
                    <SelectItem value="2">2 - After   &quot;Introduction to Solana &quot;</SelectItem>
                    <SelectItem value="3">3 - After   &quot;Smart Contract Basics &quot;</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">Lessons</h3>
                  <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                    <Plus className="h-4 w-4 mr-1" /> Add Lesson
                  </Button>
                </div>

                <div className="space-y-4">
                  {/* Lesson 1 */}
                  <div className="border rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 text-gray-400">
                        <GripVertical className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-medium">Lesson 1</h4>
                          <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                            <Trash className="h-4 w-4 mr-1" /> Remove
                          </Button>
                        </div>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="lesson-title-1">Lesson Title</Label>
                            <Input id="lesson-title-1" placeholder="e.g., Introduction to Program Derived Addresses" />
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="lesson-type-1">Content Type</Label>
                              <Select defaultValue="video">
                                <SelectTrigger id="lesson-type-1">
                                  <SelectValue placeholder="Select type" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="video">Video Lecture</SelectItem>
                                  <SelectItem value="article">Article</SelectItem>
                                  <SelectItem value="quiz">Quiz</SelectItem>
                                  <SelectItem value="exercise">Coding Exercise</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="lesson-duration-1">Duration</Label>
                              <div className="flex gap-2">
                                <Input id="lesson-duration-1" placeholder="15" type="number" />
                                <Select defaultValue="minutes">
                                  <SelectTrigger className="w-[120px]">
                                    <SelectValue placeholder="Unit" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="minutes">Minutes</SelectItem>
                                    <SelectItem value="hours">Hours</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Switch id="preview-1" />
                            <Label htmlFor="preview-1">Make available as free preview</Label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Lesson 2 */}
                  <div className="border rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 text-gray-400">
                        <GripVertical className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-medium">Lesson 2</h4>
                          <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                            <Trash className="h-4 w-4 mr-1" /> Remove
                          </Button>
                        </div>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="lesson-title-2">Lesson Title</Label>
                            <Input id="lesson-title-2" placeholder="e.g., Working with Cross-Program Invocations" />
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="lesson-type-2">Content Type</Label>
                              <Select defaultValue="video">
                                <SelectTrigger id="lesson-type-2">
                                  <SelectValue placeholder="Select type" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="video">Video Lecture</SelectItem>
                                  <SelectItem value="article">Article</SelectItem>
                                  <SelectItem value="quiz">Quiz</SelectItem>
                                  <SelectItem value="exercise">Coding Exercise</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="lesson-duration-2">Duration</Label>
                              <div className="flex gap-2">
                                <Input id="lesson-duration-2" placeholder="20" type="number" />
                                <Select defaultValue="minutes">
                                  <SelectTrigger className="w-[120px]">
                                    <SelectValue placeholder="Unit" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="minutes">Minutes</SelectItem>
                                    <SelectItem value="hours">Hours</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Switch id="preview-2" />
                            <Label htmlFor="preview-2">Make available as free preview</Label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    <Plus className="h-4 w-4 mr-1" /> Add Another Lesson
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between mt-6">
            <Button variant="outline" asChild>
              <Link href="/teacher/courses/create">
                <X className="mr-2 h-4 w-4" /> Cancel
              </Link>
            </Button>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
              <Save className="mr-2 h-4 w-4" /> Save Section
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
