import {
  BookOpen,
  Users,
  Wallet,
  Plus,
  BarChart,
  MessageSquare,
  Settings,
  HelpCircle,
  Bell,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function TeacherDashboard() {  
  return (
    <div className="px-4 pb-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2 dark:text-gray-600">Teacher Dashboard</h1>
          <p className="text-gray-600">
            Manage your courses and track your performance
          </p>
        </div>
        <Button
          asChild
          className="bg-emerald-600 hover:bg-emerald-700 text-white"
        >
          <Link href="/teacher/courses/create">
            <Plus className="mr-2 h-4 w-4" /> Create New Course
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="text-gray-500">
              Total Students
            </CardDescription>
            <CardTitle className="text-3xl">428</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-emerald-600 flex items-center">
              <span className="inline-block mr-1">↑</span> 12% from last month
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="text-gray-500">
              Active Courses
            </CardDescription>
            <CardTitle className="text-3xl">3</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-emerald-600 flex items-center">
              <span className="inline-block mr-1">↑</span> 1 new this month
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="text-gray-500">
              Total Earnings
            </CardDescription>
            <CardTitle className="text-3xl">$2,140</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-emerald-600 flex items-center">
              <span className="inline-block mr-1">↑</span> 18% from last month
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="text-gray-500">
              Average Rating
            </CardDescription>
            <CardTitle className="text-3xl">4.8/5</CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={96} className="h-2 bg-gray-100" />
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="courses" className="mb-8">
        <TabsList className="mb-6">
          <TabsTrigger value="courses">My Courses</TabsTrigger>
          <TabsTrigger value="students">Students</TabsTrigger>
          <TabsTrigger value="earnings">Earnings</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>

        <TabsContent value="courses">
          <div className="grid gap-6">
            {[
              {
                title: "Solana Fundamentals",
                status: "Published",
                students: 248,
                earnings: "$1,240",
                rating: 4.9,
                lastUpdated: "2 weeks ago",
                progress: 100,
              },
              {
                title: "Smart Contract Development",
                status: "Published",
                students: 124,
                earnings: "$620",
                rating: 4.7,
                lastUpdated: "1 month ago",
                progress: 100,
              },
              {
                title: "Advanced Solana Programming",
                status: "Published",
                students: 56,
                earnings: "$280",
                rating: 4.8,
                lastUpdated: "3 months ago",
                progress: 100,
              },
              {
                title: "Web3 Security Fundamentals",
                status: "Draft",
                students: 0,
                earnings: "$0",
                rating: 0,
                lastUpdated: "Last edited 3 days ago",
                progress: 65,
              },
            ].map((course, i) => (
              <Card key={i} className="overflow-hidden py-0">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-64 bg-gray-100 flex items-center justify-center p-4">
                    <div className="h-12 w-12 rounded-md bg-emerald-100 flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-emerald-600" />
                    </div>
                  </div>
                  <div className="flex-1 p-6 py-12">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{course.title}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge
                            className={
                              course.status === "Published"
                                ? "bg-emerald-100 text-emerald-800 hover:bg-emerald-200"
                                : "bg-amber-100 text-amber-800 hover:bg-amber-200"
                            }
                          >
                            {course.status}
                          </Badge>
                          <span className="text-sm text-gray-500">
                            {course.lastUpdated}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-4">
                        <Button asChild variant="outline" size="sm">
                          <Link href={`/design3/teacher/courses/${i}/edit`}>
                            Edit Course
                          </Link>
                        </Button>
                        <Button asChild variant="outline" size="sm">
                          <Link href={`/design3/teacher/courses/${i}/manage`}>
                            Manage
                          </Link>
                        </Button>
                        {course.status === "Draft" && (
                          <Button
                            asChild
                            size="sm"
                            className="bg-emerald-600 hover:bg-emerald-700 text-white"
                          >
                            <Link
                              href={`/design3/teacher/courses/${i}/publish`}
                            >
                              Publish
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>

                    {course.status === "Draft" && (
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Completion</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress
                          value={course.progress}
                          className="h-2 bg-gray-100"
                        />
                      </div>
                    )}

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div>
                        <div className="text-sm text-gray-500">Students</div>
                        <div className="flex items-center gap-1 mt-1">
                          <Users className="h-4 w-4 text-gray-400" />
                          <span className="font-medium">{course.students}</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Earnings</div>
                        <div className="flex items-center gap-1 mt-1">
                          <Wallet className="h-4 w-4 text-gray-400" />
                          <span className="font-medium">{course.earnings}</span>
                        </div>
                      </div>
                      {course.rating > 0 && (
                        <div>
                          <div className="text-sm text-gray-500">Rating</div>
                          <div className="flex items-center gap-1 mt-1">
                            <span className="text-yellow-500">★</span>
                            <span className="font-medium">{course.rating}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="students">
          <Card >
            <CardHeader>
              <CardTitle>Student Activity</CardTitle>
              <CardDescription>
                Recent enrollments and interactions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  {
                    name: "Alex Johnson",
                    action: "enrolled in",
                    course: "Solana Fundamentals",
                    time: "2 hours ago",
                    image: "/student-1.png",
                  },
                  {
                    name: "Maria Garcia",
                    action: "completed",
                    course: "Smart Contract Development",
                    time: "Yesterday",
                    image: "/student-2.png",
                  },
                  {
                    name: "James Wilson",
                    action: "left a review on",
                    course: "Advanced Solana Programming",
                    time: "2 days ago",
                    image: "/student-3.png",
                  },
                  {
                    name: "Sarah Ahmed",
                    action: "asked a question in",
                    course: "Solana Fundamentals",
                    time: "3 days ago",
                    image: "/student-4.png",
                  },
                ].map((activity, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 pb-6 border-b last:border-0 last:pb-0"
                  >
                    <Avatar>
                      <AvatarImage
                        src={activity.image || "/placeholder.svg"}
                        alt={activity.name}
                      />
                      <AvatarFallback>{activity.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-medium">
                        {activity.name} {activity.action}{" "}
                        <span className="text-emerald-600">
                          {activity.course}
                        </span>
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        {activity.time}
                      </div>
                    </div>
                    {activity.action === "asked a question in" && (
                      <Button size="sm" variant="outline">
                        <MessageSquare className="h-4 w-4 mr-1" /> Reply
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Student Activity
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="earnings">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Earnings Overview</CardTitle>
                  <CardDescription>
                    Your revenue from course sales
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80 flex items-center justify-center bg-gray-50 rounded-md">
                    <BarChart className="h-16 w-16 text-gray-300" />
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Available for Withdrawal</CardTitle>
                  <CardDescription>
                    Funds ready to transfer to your wallet
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-4">$1,840</div>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                    <Wallet className="mr-2 h-4 w-4" /> Withdraw to Wallet
                  </Button>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Earnings by Course</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      name: "Solana Fundamentals",
                      earnings: "$1,240",
                      percentage: 58,
                    },
                    {
                      name: "Smart Contract Development",
                      earnings: "$620",
                      percentage: 29,
                    },
                    {
                      name: "Advanced Solana Programming",
                      earnings: "$280",
                      percentage: 13,
                    },
                  ].map((course, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{course.name}</span>
                        <span className="text-gray-500">{course.earnings}</span>
                      </div>
                      <Progress
                        value={course.percentage}
                        className="h-2 bg-gray-100"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="reviews">
          <Card>
            <CardHeader>
              <CardTitle>Course Reviews</CardTitle>
              <CardDescription>Feedback from your students</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  {
                    name: "James Wilson",
                    course: "Advanced Solana Programming",
                    rating: 5,
                    comment:
                      "This course was exactly what I needed to take my Solana development skills to the next level. The instructor explains complex concepts clearly and the hands-on projects were invaluable.",
                    date: "2 days ago",
                    image: "/student-3.png",
                  },
                  {
                    name: "Maria Garcia",
                    course: "Smart Contract Development",
                    rating: 4,
                    comment:
                      "Great course with lots of practical examples. I would have liked more advanced content towards the end, but overall it was very helpful for my career transition into blockchain development.",
                    date: "1 week ago",
                    image: "/student-2.png",
                  },
                  {
                    name: "Alex Johnson",
                    course: "Solana Fundamentals",
                    rating: 5,
                    comment:
                      "As a complete beginner to blockchain, this course was perfect. The instructor breaks down complex topics into digestible pieces. I now feel confident building my first Solana application.",
                    date: "2 weeks ago",
                    image: "/student-1.png",
                  },
                ].map((review, i) => (
                  <div
                    key={i}
                    className="flex gap-4 pb-6 border-b last:border-0 last:pb-0"
                  >
                    <Avatar>
                      <AvatarImage
                        src={review.image || "/placeholder.svg"}
                        alt={review.name}
                      />
                      <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">{review.name}</div>
                        <div className="text-sm text-gray-500">
                          {review.date}
                        </div>
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        Course: {review.course}
                      </div>
                      <div className="flex items-center mt-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={
                              i < review.rating
                                ? "text-yellow-500"
                                : "text-gray-300"
                            }
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                      <div className="mt-2">
                        <Button variant="outline" size="sm">
                          <MessageSquare className="h-3 w-3 mr-1" /> Reply
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Reviews
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Announcements</CardTitle>
            <CardDescription>Platform updates and news</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-emerald-50 rounded-lg">
                <div className="font-medium mb-1">
                  New Course Creation Tools Available
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  We&apos;ve added new interactive quiz features and code playgrounds
                  to help make your courses more engaging.
                </p>
                <div className="text-xs text-gray-500">Posted 3 days ago</div>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="font-medium mb-1">Upcoming Maintenance</div>
                <p className="text-sm text-gray-600 mb-2">
                  The platform will be undergoing maintenance on June 15th from
                  2-4am UTC. Course access will not be affected.
                </p>
                <div className="text-xs text-gray-500">Posted 1 week ago</div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View All Announcements
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Links</CardTitle>
            <CardDescription>Helpful resources for teachers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              <Button variant="outline" className="justify-start">
                <HelpCircle className="mr-2 h-4 w-4" /> Teacher Help Center
              </Button>
              <Button variant="outline" className="justify-start">
                <Settings className="mr-2 h-4 w-4" /> Account Settings
              </Button>
              <Button variant="outline" className="justify-start">
                <Bell className="mr-2 h-4 w-4" /> Notification Preferences
              </Button>
              <Button variant="outline" className="justify-start">
                <MessageSquare className="mr-2 h-4 w-4" /> Community Forum
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
