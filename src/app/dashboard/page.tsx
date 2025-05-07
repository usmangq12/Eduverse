import {
  Users,
  BookOpen,
  ArrowUpRight,
  Wallet,
  Star,
  Calendar,
  Award,
  MessageSquare,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export default function Design3Dashboard() {
  return (
    <div className=" px-4 ">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>

      <Tabs defaultValue="teacher" className="mb-8">
        <TabsList className="mb-6">
          <TabsTrigger value="teacher" className="hover:cursor-pointer">Teacher Dashboard</TabsTrigger>
          <TabsTrigger value="student" className="hover:cursor-pointer">Student Dashboard</TabsTrigger>
        </TabsList>

        {/* TEACHER DASHBOARD */}
        <TabsContent value="teacher">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <Card  >
              <CardHeader>
                <CardDescription className="text-gray-500">
                  Total Students
                </CardDescription>
                <CardTitle className="text-3xl">1,248</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-emerald-600 flex items-center">
                  <ArrowUpRight className="h-3 w-3 mr-1" /> 12% from last month
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription className="text-gray-500">
                  Active Courses
                </CardDescription>
                <CardTitle className="text-3xl">8</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-emerald-600 flex items-center">
                  <ArrowUpRight className="h-3 w-3 mr-1" /> 2 new this month
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription className="text-gray-500">
                  Total Earnings
                </CardDescription>
                <CardTitle className="text-3xl">$12,450</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-emerald-600 flex items-center">
                  <ArrowUpRight className="h-3 w-3 mr-1" /> 18% from last month
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

          <div className="grid gap-6 lg:grid-cols-2 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Your Courses</CardTitle>
                <CardDescription>Manage your uploaded courses</CardDescription>
              </CardHeader>
              <CardContent className="mb-0">
                <div className="space-y-4">
                  {[
                    {
                      title: "Solana Fundamentals",
                      students: 428,
                      earnings: "$2,140",
                      rating: 4.9,
                      status: "Published",
                    },
                    {
                      title: "Smart Contract Development",
                      students: 312,
                      earnings: "$3,744",
                      rating: 4.7,
                      status: "Published",
                    },
                    {
                      title: "DeFi Applications",
                      students: 256,
                      earnings: "$1,536",
                      rating: 4.8,
                      status: "Published",
                    },
                    {
                      title: "Web3 Security Fundamentals",
                      students: 0,
                      earnings: "$0",
                      rating: 0,
                      status: "Draft",
                    },
                  ].map((course, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 rounded-lg border border-gray-200 p-4"
                    >
                      <div className="h-12 w-12 rounded-md bg-emerald-100 flex items-center justify-center">
                        <BookOpen className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <div className="font-medium truncate">
                            {course.title}
                          </div>
                          <div className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 ml-2">
                            {course.status}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Users className="h-3.5 w-3.5" />
                            <span>{course.students} students</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Wallet className="h-3.5 w-3.5" />
                            <span>{course.earnings}</span>
                          </div>
                          {course.rating > 0 && (
                            <div className="flex items-center gap-1">
                              <span>★</span>
                              <span>{course.rating}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Student Activity</CardTitle>
                <CardDescription>
                  Recent enrollments and completions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "Alex Johnson",
                      action: "enrolled in",
                      course: "Solana Fundamentals",
                      time: "2 hours ago",
                    },
                    {
                      name: "Maria Garcia",
                      action: "completed",
                      course: "Smart Contract Development",
                      time: "Yesterday",
                    },
                    {
                      name: "James Wilson",
                      action: "left a review on",
                      course: "DeFi Applications",
                      time: "2 days ago",
                    },
                    {
                      name: "Sarah Ahmed",
                      action: "asked a question in",
                      course: "NFT Marketplace Creation",
                      time: "3 days ago",
                    },
                  ].map((activity, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 rounded-lg border border-gray-200 p-4"
                    >
                      <div className="h-10 w-10 rounded-md bg-emerald-100 flex items-center justify-center">
                        <Users className="h-5 w-5 text-emerald-600" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">
                          {activity.name} {activity.action}{" "}
                          <span className="text-emerald-600">
                            {activity.course}
                          </span>
                        </div>
                        <div className="text-xs text-gray-500">
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
            </Card>
          </div>

          <Card >
            <CardHeader>
              <CardTitle>Earnings Overview</CardTitle>
              <CardDescription>Your revenue from course sales</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-gray-500 mb-2">Total Earnings</div>
                    <div className="text-3xl font-bold">$12,450</div>
                    <div className="mt-4 text-sm text-gray-500">
                      From 1,248 course sales
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-gray-500 mb-2">
                      Available for Withdrawal
                    </div>
                    <div className="text-3xl font-bold">$8,320</div>
                    <div className="mt-4">
                      <Button
                        size="sm"
                        className="bg-emerald-600 hover:bg-emerald-700 text-white"
                      >
                        <Wallet className="h-4 w-4 mr-1" /> Withdraw to Wallet
                      </Button>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">
                    Earnings by Course
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        name: "Smart Contract Development",
                        earnings: "$3,744",
                        percentage: 30,
                      },
                      {
                        name: "NFT Marketplace Creation",
                        earnings: "$2,208",
                        percentage: 18,
                      },
                      {
                        name: "Solana Fundamentals",
                        earnings: "$2,140",
                        percentage: 17,
                      },
                      {
                        name: "DeFi Applications",
                        earnings: "$1,536",
                        percentage: 12,
                      },
                      {
                        name: "Other Courses",
                        earnings: "$2,822",
                        percentage: 23,
                      },
                    ].map((course, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">{course.name}</div>
                          <div className="text-sm text-gray-500">
                            {course.earnings} ({course.percentage}%)
                          </div>
                        </div>
                        <Progress
                          value={course.percentage}
                          className="h-2 bg-gray-100"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* STUDENT DASHBOARD */}
        <TabsContent value="student">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardDescription className="text-gray-500">
                  Enrolled Courses
                </CardDescription>
                <CardTitle className="text-3xl">5</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-emerald-600 flex items-center">
                  <ArrowUpRight className="h-3 w-3 mr-1" /> 1 new this month
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription className="text-gray-500">
                  Completed Courses
                </CardDescription>
                <CardTitle className="text-3xl">2</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-emerald-600 flex items-center">
                  <ArrowUpRight className="h-3 w-3 mr-1" /> 1 this month
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription className="text-gray-500">
                  Certificates Earned
                </CardDescription>
                <CardTitle className="text-3xl">2</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-gray-500">
                  NFT certificates on Solana
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription className="text-gray-500">
                  Average Progress
                </CardDescription>
                <CardTitle className="text-3xl">68%</CardTitle>
              </CardHeader>
              <CardContent>
                <Progress value={68} className="h-2 bg-gray-100" />
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Your Learning Progress</CardTitle>
                <CardDescription>Track your course completion</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Solana Fundamentals",
                      instructor: "Alex Johnson",
                      progress: 75,
                      lastAccessed: "Today",
                    },
                    {
                      title: "Smart Contract Development",
                      instructor: "Maria Garcia",
                      progress: 32,
                      lastAccessed: "Yesterday",
                    },
                    {
                      title: "DeFi Applications",
                      instructor: "James Wilson",
                      progress: 0,
                      lastAccessed: "Not started",
                    },
                  ].map((course, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">{course.title}</div>
                        <div className="text-sm text-gray-500">
                          {course.progress}% complete
                        </div>
                      </div>
                      <Progress
                        value={course.progress}
                        className="h-2 bg-gray-100"
                      />
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Instructor: {course.instructor}</span>
                        <span>Last accessed: {course.lastAccessed}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming Deadlines</CardTitle>
                <CardDescription>
                  Assignments and course milestones
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Smart Contract Assignment",
                      course: "Smart Contract Development",
                      due: "Tomorrow",
                      status: "Pending",
                    },
                    {
                      title: "Final Project Submission",
                      course: "Solana Fundamentals",
                      due: "3 days",
                      status: "In Progress",
                    },
                    {
                      title: "Quiz: DeFi Concepts",
                      course: "DeFi Applications",
                      due: "5 days",
                      status: "Not Started",
                    },
                    {
                      title: "Peer Review",
                      course: "Smart Contract Development",
                      due: "1 week",
                      status: "Not Started",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 rounded-lg border border-gray-200 p-4"
                    >
                      <div className="h-10 w-10 rounded-md bg-emerald-100 flex items-center justify-center">
                        <Calendar className="h-5 w-5 text-emerald-600" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{item.title}</div>
                        <div className="text-xs text-gray-500">
                          Course: {item.course} • Due: {item.due}
                        </div>
                      </div>
                      <Badge
                        variant="outline"
                        className={
                          item.status === "Pending"
                            ? "border-yellow-500 text-yellow-600 bg-yellow-50"
                            : item.status === "In Progress"
                              ? "border-blue-500 text-blue-600 bg-blue-50"
                              : "border-gray-300 text-gray-600 bg-gray-50"
                        }
                      >
                        {item.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Certificates</CardTitle>
                <CardDescription>
                  Your earned blockchain credentials
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "NFT Marketplace Creation",
                      date: "March 15, 2023",
                      tokenId: "0x8f72d1...",
                    },
                    {
                      title: "Solana Program Library",
                      date: "January 22, 2023",
                      tokenId: "0x3e91a7...",
                    },
                  ].map((cert, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 rounded-lg border border-gray-200 p-4"
                    >
                      <div className="h-10 w-10 rounded-md bg-emerald-100 flex items-center justify-center">
                        <Award className="h-5 w-5 text-emerald-600" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{cert.title}</div>
                        <div className="text-xs text-gray-500">
                          Issued: {cert.date} • NFT ID: {cert.tokenId}
                        </div>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-emerald-600 border-emerald-200 bg-emerald-50 hover:bg-emerald-100"
                      >
                        View NFT
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recommended Courses</CardTitle>
                <CardDescription>
                  Based on your learning history
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Advanced Solana Programming",
                      instructor: "Michael Chen",
                      rating: 4.9,
                      students: 842,
                      level: "Advanced",
                    },
                    {
                      title: "Web3 Security Fundamentals",
                      instructor: "Sarah Ahmed",
                      rating: 4.8,
                      students: 1024,
                      level: "Intermediate",
                    },
                    {
                      title: "Blockchain Interoperability",
                      instructor: "James Wilson",
                      rating: 4.7,
                      students: 635,
                      level: "Intermediate",
                    },
                  ].map((course, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 rounded-lg border border-gray-200 p-4"
                    >
                      <div className="h-12 w-12 rounded-md bg-emerald-100 flex items-center justify-center">
                        <BookOpen className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium truncate">
                          {course.title}
                        </div>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-sm text-gray-500">
                          <div>By {course.instructor}</div>
                          <div className="flex items-center gap-1">
                            <Star className="h-3.5 w-3.5 text-yellow-500" />
                            <span>{course.rating}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-3.5 w-3.5" />
                            <span>{course.students}</span>
                          </div>
                          <div>{course.level}</div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
