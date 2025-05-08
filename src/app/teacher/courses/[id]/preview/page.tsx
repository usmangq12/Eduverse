import {
  ArrowLeft,
  BookOpen,
  Clock,
  Play,
  Star,
  Users,
  CheckCircle,
  Lock,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function CoursePreview() {
  // This would normally come from a database or API
  const course = {
    id: "solana-dev-101",
    title: "Solana Development Fundamentals",
    instructor: "Alex Rivera",
    instructorRole: "Senior Blockchain Engineer",
    instructorAvatar: "/student-1.png",
    rating: 4.8,
    reviews: 342,
    students: 1245,
    lastUpdated: "April 2025",
    duration: "12 hours",
    lessons: 24,
    level: "Intermediate",
    description:
      "Learn how to build decentralized applications on Solana, one of the fastest and most efficient blockchains. This course covers everything from basic concepts to advanced development techniques.",
    price: 79.99,
    discountPrice: 49.99,
    thumbnail: "/solana-dev-path.png",
    previewVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-12">
      {/* Preview Banner */}
      <div className="bg-gradient-to-r from-emerald-800 to-emerald-600 text-white py-3 px-4 text-center">
        <div className="container mx-auto flex items-center justify-center gap-2">
          <span className="font-medium">Preview Mode</span>
          <Badge variant="outline" className="text-white border-white">
            Limited Access
          </Badge>
          <span className="mx-2">•</span>
          <Link href={`/courses/${course.id}/enroll`}>
            <Button
              size="sm"
              variant="secondary"
              className="bg-white text-emerald-800 hover:bg-gray-100"
            >
              Enroll Now
            </Button>
          </Link>
        </div>
      </div>

      {/* Course Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link
            href="/courses"
            className="inline-flex items-center text-sm text-gray-600 hover:text-emerald-600 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to Courses
          </Link>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
              <div className="flex items-center gap-4 mb-4 flex-wrap">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <span className="ml-1 font-medium">{course.rating}</span>
                  <span className="ml-1 text-gray-500">
                    ({course.reviews} reviews)
                  </span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="h-5 w-5 mr-1" />
                  <span>{course.students} students</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-1" />
                  <span>{course.duration}</span>
                </div>
                <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                  {course.level}
                </Badge>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src={course.instructorAvatar || "/placeholder.svg"}
                  alt={course.instructor}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <div className="font-medium">{course.instructor}</div>
                  <div className="text-sm text-gray-500">
                    {course.instructorRole}
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <h2 className="text-xl font-semibold mb-4">
                  About This Course
                </h2>
                <p className="text-gray-700 mb-4">{course.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 mt-0.5" />
                    <span>Build real-world Solana applications</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 mt-0.5" />
                    <span>Write secure and efficient smart contracts</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 mt-0.5" />
                    <span>Understand Solan&apos;s architecture</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 mt-0.5" />
                    <span>Deploy and test on Solana&apos;s network</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/3">
              <Card className="overflow-hidden sticky top-6">
                <div className="relative aspect-video">
                  <Image
                    src={course.thumbnail || "/placeholder.svg"}
                    alt={course.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button
                      size="icon"
                      className="rounded-full h-14 w-14 bg-emerald-600 hover:bg-emerald-700 text-white"
                    >
                      <Play className="h-6 w-6 ml-1" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-baseline mb-4">
                    <span className="text-3xl font-bold">
                      ${course.discountPrice}
                    </span>
                    <span className="ml-2 text-lg text-gray-500 line-through">
                      ${course.price}
                    </span>
                    <Badge className="ml-2 bg-red-100 text-red-800">
                      37% off
                    </Badge>
                  </div>
                  <div className="space-y-3 mb-6">
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                      Enroll Now
                    </Button>
                    <Button variant="outline" className="w-full">
                      Try Free Preview
                    </Button>
                  </div>
                  <div className="text-sm text-gray-500 space-y-2">
                    <div className="flex justify-between">
                      <span>Last updated</span>
                      <span className="font-medium text-gray-700">
                        {course.lastUpdated}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total lessons</span>
                      <span className="font-medium text-gray-700">
                        {course.lessons}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Duration</span>
                      <span className="font-medium text-gray-700">
                        {course.duration}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Access</span>
                      <span className="font-medium text-gray-700">
                        Lifetime
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Course Content Tabs */}
        <Tabs defaultValue="curriculum" className="mt-8">
          <TabsList className="mb-6">
            <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="instructor">Instructor</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          <TabsContent
            value="curriculum"
            className="bg-white rounded-lg shadow-sm p-6"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Course Curriculum</h2>
              <div className="text-sm text-gray-500">
                <span className="font-medium">{course.lessons} lessons</span> •{" "}
                {course.duration} total
              </div>
            </div>

            {/* Section 1 */}
            <div className="mb-6 border rounded-lg overflow-hidden">
              <div className="bg-gray-50 p-4 flex items-center justify-between">
                <div className="font-medium">
                  Section 1: Introduction to Solana
                </div>
                <div className="text-sm text-gray-500">3 lessons • 45 min</div>
              </div>
              <div className="divide-y">
                {/* Free Preview Lesson */}
                <div className="p-4 flex items-center hover:bg-gray-50">
                  <div className="mr-4">
                    <Play className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">
                      Welcome and Course Overview
                    </div>
                    <div className="text-sm text-gray-500">Video • 5:30</div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-emerald-600"
                  >
                    Free Preview
                  </Button>
                </div>
                {/* Locked Lesson */}
                <div className="p-4 flex items-center hover:bg-gray-50">
                  <div className="mr-4">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">
                      Setting Up Your Development Environment
                    </div>
                    <div className="text-sm text-gray-500">Video • 12:45</div>
                  </div>
                  <Badge variant="outline" className="text-gray-500">
                    Locked
                  </Badge>
                </div>
                <div className="p-4 flex items-center hover:bg-gray-50">
                  <div className="mr-4">
                    <BookOpen className="h-5 w-5 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">
                      Solana Architecture Overview
                    </div>
                    <div className="text-sm text-gray-500">
                      Article • 10 min read
                    </div>
                  </div>
                  <Badge variant="outline" className="text-gray-500">
                    Locked
                  </Badge>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-6 border rounded-lg overflow-hidden">
              <div className="bg-gray-50 p-4 flex items-center justify-between">
                <div className="font-medium">
                  Section 2: Smart Contract Basics
                </div>
                <div className="text-sm text-gray-500">
                  4 lessons • 1h 20min
                </div>
              </div>
              <div className="divide-y">
                <div className="p-4 flex items-center hover:bg-gray-50">
                  <div className="mr-4">
                    <Play className="h-5 w-5 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">
                      Understanding Smart Contracts
                    </div>
                    <div className="text-sm text-gray-500">Video • 15:20</div>
                  </div>
                  <Badge variant="outline" className="text-gray-500">
                    Locked
                  </Badge>
                </div>
                <div className="p-4 flex items-center hover:bg-gray-50">
                  <div className="mr-4">
                    <Play className="h-5 w-5 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">
                      Writing Your First Smart Contract
                    </div>
                    <div className="text-sm text-gray-500">Video • 18:45</div>
                  </div>
                  <Badge variant="outline" className="text-gray-500">
                    Locked
                  </Badge>
                </div>
              </div>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Lock className="h-8 w-8 text-gray-400 mx-auto mb-2" />
              <h3 className="text-lg font-medium mb-2">
                Full Curriculum Locked
              </h3>
              <p className="text-gray-600 mb-4">
                Enroll in this course to access all {course.lessons} lessons and
                start learning today.
              </p>
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                Enroll Now
              </Button>
            </div>
          </TabsContent>

          <TabsContent
            value="overview"
            className="bg-white rounded-lg shadow-sm p-6"
          >
            <h2 className="text-xl font-semibold mb-4">Course Overview</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">What You&apos;ll Learn</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 mt-0.5 shrink-0" />
                    <span>
                      Understand Solana&apos;s unique architecture and consensus
                      mechanism
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 mt-0.5 shrink-0" />
                    <span>
                      Set up a complete Solana development environment
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 mt-0.5 shrink-0" />
                    <span>
                      Write, test, and deploy Solana programs using Rust
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 mt-0.5 shrink-0" />
                    <span>
                      Build frontend applications that interact with Solana
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 mt-0.5 shrink-0" />
                    <span>
                      Implement wallet integration and transaction signing
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 mt-0.5 shrink-0" />
                    <span>
                      Optimize programs for Solana&apos;s performance requirements
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Prerequisites</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Basic understanding of blockchain concepts</li>
                  <li>Familiarity with JavaScript and web development</li>
                  <li>
                    Some programming experience (Rust knowledge helpful but not
                    required)
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">
                  This Course Includes
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="flex items-center">
                    <Play className="h-5 w-5 text-gray-500 mr-2" />
                    <span>{course.duration} of video content</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-gray-500 mr-2" />
                    <span>Comprehensive documentation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-gray-500 mr-2" />
                    <span>5 coding exercises</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-gray-500 mr-2" />
                    <span>Community access</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-gray-500 mr-2" />
                    <span>Certificate of completion</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-gray-500 mr-2" />
                    <span>Lifetime access</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent
            value="instructor"
            className="bg-white rounded-lg shadow-sm p-6"
          >
            <div className="flex items-start gap-6 mb-6">
              <Image
                src={course.instructorAvatar || "/placeholder.svg"}
                alt={course.instructor}
                width={100}
                height={100}
                className="rounded-full"
              />
              <div>
                <h2 className="text-xl font-semibold mb-1">
                  {course.instructor}
                </h2>
                <p className="text-gray-600 mb-3">{course.instructorRole}</p>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <span className="ml-1 font-medium">4.9</span>
                    <span className="ml-1 text-gray-500">
                      Instructor Rating
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-5 w-5 mr-1" />
                    <span>3,245 Students</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <BookOpen className="h-5 w-5 mr-1" />
                    <span>5 Courses</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              Alex Rivera is a Senior Blockchain Engineer with over 6 years of
              experience building decentralized applications. He has worked with
              major blockchain platforms including Ethereum, Solana, and
              Polkadot, specializing in smart contract development and
              blockchain architecture.
            </p>
            <p className="text-gray-700 mb-4">
              Previously, Alex was the lead developer at BlockTech Solutions
              where he helped build enterprise blockchain solutions. He holds a
              Master&apos;s degree in Computer Science and is an active contributor
              to several open-source blockchain projects.
            </p>
            <p className="text-gray-700">
              Alex is passionate about teaching blockchain development and
              making complex concepts accessible to developers of all skill
              levels. His courses have helped thousands of students launch their
              careers in Web3.
            </p>
          </TabsContent>

          <TabsContent
            value="reviews"
            className="bg-white rounded-lg shadow-sm p-6"
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-5xl font-bold text-emerald-600 mb-2">
                    {course.rating}
                  </div>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(course.rating)
                            ? "text-yellow-500 fill-yellow-500"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-gray-600 mb-4">
                    Course Rating • {course.reviews} Reviews
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="text-sm w-8">5 ★</span>
                      <Progress value={85} className="h-2 flex-1 mx-2" />
                      <span className="text-sm w-8 text-right">85%</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm w-8">4 ★</span>
                      <Progress value={10} className="h-2 flex-1 mx-2" />
                      <span className="text-sm w-8 text-right">10%</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm w-8">3 ★</span>
                      <Progress value={3} className="h-2 flex-1 mx-2" />
                      <span className="text-sm w-8 text-right">3%</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm w-8">2 ★</span>
                      <Progress value={1} className="h-2 flex-1 mx-2" />
                      <span className="text-sm w-8 text-right">1%</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm w-8">1 ★</span>
                      <Progress value={1} className="h-2 flex-1 mx-2" />
                      <span className="text-sm w-8 text-right">1%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-lg font-medium mb-4">Student Reviews</h3>
                <div className="space-y-6">
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 font-medium mr-3">
                          JD
                        </div>
                        <div>
                          <div className="font-medium">John Doe</div>
                          <div className="text-xs text-gray-500">
                            2 weeks ago
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 text-yellow-500 fill-yellow-500"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700">
                      This course exceeded my expectations! The instructor
                      explains complex Solana concepts in a way that&apos;s easy to
                      understand. I was able to deploy my first smart contract
                      within a week of starting the course.
                    </p>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-medium mr-3">
                          SM
                        </div>
                        <div>
                          <div className="font-medium">Sarah Miller</div>
                          <div className="text-xs text-gray-500">
                            1 month ago
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < 4 ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700">
                      Great course with lots of practical examples. The section
                      on program optimization was particularly helpful. Would
                      have liked more content on testing strategies, but overall
                      very satisfied.
                    </p>
                  </div>

                  <div className="text-center">
                    <Button variant="outline">Load More Reviews</Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
