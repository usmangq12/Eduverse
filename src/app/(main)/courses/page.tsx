import { Clock, Users, Star, Search, Filter, BookOpen, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Design3Courses() {
  return (
    <div className=" px-4 py-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Courses</h1>
          <p className="text-gray-600">Courses you&apos;re enrolled in</p>
        </div>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Search courses..." className="pl-9 border-gray-300" />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList className="mb-6">
          <TabsTrigger value="all" className="hover:cursor-pointer">All Courses</TabsTrigger>
          <TabsTrigger value="in-progress" className="hover:cursor-pointer">In Progress</TabsTrigger>
          <TabsTrigger value="completed" className="hover:cursor-pointer">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Solana Fundamentals",
                instructor: "Alex Johnson",
                progress: 75,
                students: 1248,
                duration: "8 hours",
                rating: 4.8,
                lessons: 12,
                level: "Beginner",
              },
              {
                title: "Smart Contract Development",
                instructor: "Maria Garcia",
                progress: 32,
                students: 864,
                duration: "12 hours",
                rating: 4.6,
                lessons: 18,
                level: "Intermediate",
              },
              {
                title: "DeFi Applications",
                instructor: "James Wilson",
                progress: 0,
                students: 632,
                duration: "10 hours",
                rating: 4.7,
                lessons: 15,
                level: "Advanced",
              },
              {
                title: "NFT Marketplace Creation",
                instructor: "Sarah Ahmed",
                progress: 100,
                students: 1032,
                duration: "14 hours",
                rating: 4.9,
                lessons: 20,
                level: "Intermediate",
              },
              {
                title: "Solana Program Library",
                instructor: "Michael Chen",
                progress: 100,
                students: 428,
                duration: "6 hours",
                rating: 4.5,
                lessons: 8,
                level: "Advanced",
              },
            ].map((course, index) => (
              <Card key={index} className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-2 bg-emerald-600"></div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{course.title}</CardTitle>
                    <Badge
                      variant="outline"
                      className={
                        course.progress === 0
                          ? "border-gray-300 text-gray-600 bg-gray-50"
                          : course.progress === 100
                            ? "border-green-500 text-green-600 bg-green-50"
                            : "border-blue-500 text-blue-600 bg-blue-50"
                      }
                    >
                      {course.progress === 0 ? "Not Started" : course.progress === 100 ? "Completed" : "In Progress"}
                    </Badge>
                  </div>
                  <CardDescription>By {course.instructor}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-medium">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2 bg-gray-100"  />
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <BookOpen className="h-4 w-4" />
                      <span>{course.lessons} lessons</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="h-4 w-4" />
                      <span>{course.students} students</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>
                        {course.rating} ({course.level})
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                    {course.progress === 0
                      ? "Start Course"
                      : course.progress === 100
                        ? "View Certificate"
                        : "Continue Learning"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="in-progress">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Solana Fundamentals",
                instructor: "Alex Johnson",
                progress: 75,
                students: 1248,
                duration: "8 hours",
                rating: 4.8,
                lessons: 12,
                level: "Beginner",
                lastAccessed: "Today",
              },
              {
                title: "Smart Contract Development",
                instructor: "Maria Garcia",
                progress: 32,
                students: 864,
                duration: "12 hours",
                rating: 4.6,
                lessons: 18,
                level: "Intermediate",
                lastAccessed: "Yesterday",
              },
            ].map((course, index) => (
              <Card key={index} className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-2 bg-blue-600"></div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{course.title}</CardTitle>
                    <Badge variant="outline" className="border-blue-500 text-blue-600 bg-blue-50">
                      In Progress
                    </Badge>
                  </div>
                  <CardDescription>By {course.instructor}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-medium">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2 bg-gray-100" />
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <BookOpen className="h-4 w-4" />
                      <span>{course.lessons} lessons</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="h-4 w-4" />
                      <span>{course.students} students</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>
                        {course.rating} ({course.level})
                      </span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-600">Last accessed: {course.lastAccessed}</div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Continue Learning</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="completed">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "NFT Marketplace Creation",
                instructor: "Sarah Ahmed",
                completedDate: "March 15, 2023",
                certificate: "0x8f72d1...",
                students: 1032,
                duration: "14 hours",
                rating: 4.9,
                lessons: 20,
                level: "Intermediate",
              },
              {
                title: "Solana Program Library",
                instructor: "Michael Chen",
                completedDate: "January 22, 2023",
                certificate: "0x3e91a7...",
                students: 428,
                duration: "6 hours",
                rating: 4.5,
                lessons: 8,
                level: "Advanced",
              },
            ].map((course, index) => (
              <Card key={index} className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-2 bg-green-600"></div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{course.title}</CardTitle>
                    <Badge variant="outline" className="border-green-500 text-green-600 bg-green-50">
                      Completed
                    </Badge>
                  </div>
                  <CardDescription>By {course.instructor}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-sm text-gray-600">
                    <div>Completed on {course.completedDate}</div>
                    <div className="mt-1">Certificate NFT: {course.certificate}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <BookOpen className="h-4 w-4" />
                      <span>{course.lessons} lessons</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="h-4 w-4" />
                      <span>{course.students} students</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>
                        {course.rating} ({course.level})
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">View Certificate</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Recommended For You</h2>
          <Button variant="link" className="text-emerald-600 hover:text-emerald-700 p-0 flex items-center">
            View All <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Advanced Solana Programming",
              instructor: "Michael Chen",
              students: 842,
              duration: "16 hours",
              rating: 4.9,
              lessons: 24,
              level: "Advanced",
              price: "$89",
            },
            {
              title: "Web3 Security Fundamentals",
              instructor: "Sarah Ahmed",
              students: 1024,
              duration: "10 hours",
              rating: 4.8,
              lessons: 15,
              level: "Intermediate",
              price: "$69",
            },
            {
              title: "Blockchain Interoperability",
              instructor: "James Wilson",
              students: 635,
              duration: "12 hours",
              rating: 4.7,
              lessons: 18,
              level: "Intermediate",
              price: "$79",
            },
          ].map((course, index) => (
            <Card key={index} className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-2 bg-indigo-600"></div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{course.title}</CardTitle>
                  <Badge variant="outline" className="border-indigo-500 text-indigo-600 bg-indigo-50">
                    {course.price}
                  </Badge>
                </div>
                <CardDescription>By {course.instructor}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <BookOpen className="h-4 w-4" />
                    <span>{course.lessons} lessons</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="h-4 w-4" />
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span>
                      {course.rating} ({course.level})
                    </span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">Enroll Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
