import {
    ArrowLeft,
    CheckCircle,
    CreditCard,
    Wallet,
    Shield,
    Calendar,
    Clock,
    Users,
    Star,
    BookOpen,
  } from "lucide-react"
  import Link from "next/link"
  import Image from "next/image"
  
  import { Button } from "@/components/ui/button"
  import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
  import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
  import { Badge } from "@/components/ui/badge"
  import { Separator } from "@/components/ui/separator"
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
  
  export default function CourseEnrollment() {
    // This would normally come from a database based on the course ID
    const course = {
      id: "solana-fundamentals",
      title: "Solana Fundamentals: Build Your First dApp",
      instructor: "Alex Johnson",
      instructorTitle: "Senior Blockchain Developer",
      instructorImage: "/student-1.png",
      rating: 4.8,
      reviews: 248,
      students: 1248,
      lastUpdated: "May 2023",
      duration: "8 hours",
      lessons: 24,
      level: "Beginner",
      price: 79.99,
      tokenPrice: 0.5,
      discountPrice: 59.99,
      discountEnds: "June 15, 2023",
      image: "/solana-program.png",
      description:
        "Learn the fundamentals of Solana blockchain development from the ground up. This comprehensive course will take you from basic concepts to building your first decentralized application on Solana.",
      includes: [
        "24 on-demand video lessons",
        "15 coding exercises",
        "5 downloadable resources",
        "4 practical projects",
        "Certificate of completion",
        "Lifetime access",
        "Mobile and desktop access",
      ],
      whatYouWillLearn: [
        "Understand Solana's architecture and how it differs from other blockchains",
        "Set up a complete Solana development environment",
        "Write and deploy Solana programs using Rust",
        "Build frontend interfaces that interact with Solana programs",
        "Implement token functionality and NFT capabilities",
        "Understand and implement proper security practices",
      ],
      prerequisites: [
        "Basic programming knowledge (any language)",
        "Familiarity with blockchain concepts (helpful but not required)",
        "Computer with internet connection",
      ],
    }
  
    return (
      <div className="container px-4 py-12">
        <div className="flex items-center gap-2 mb-8">
          <Button asChild variant="outline" size="icon">
            <Link href="/design3/courses">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">Enroll in Course</h1>
        </div>
  
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{course.title}</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <span className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="font-medium">{course.rating}</span>
                    <span className="text-gray-500 ml-1">({course.reviews} reviews)</span>
                  </span>
                  <span className="text-gray-300">|</span>
                  <span className="flex items-center">
                    <Users className="h-4 w-4 text-gray-400 mr-1" />
                    <span>{course.students} students</span>
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="aspect-video relative rounded-lg overflow-hidden">
                  <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
                </div>
  
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">About This Course</h3>
                  <p className="text-gray-600">{course.description}</p>
                </div>
  
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">What You'll Learn</h3>
                    <ul className="space-y-2">
                      {course.whatYouWillLearn.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">This Course Includes</h3>
                    <ul className="space-y-2">
                      {course.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
  
                <Separator />
  
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Prerequisites</h3>
                  <ul className="space-y-2">
                    {course.prerequisites.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
  
                <Separator />
  
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={course.instructorImage || "/placeholder.svg"} alt={course.instructor} />
                    <AvatarFallback>{course.instructor.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-medium">Your Instructor</h3>
                    <p className="font-medium">{course.instructor}</p>
                    <p className="text-gray-500">{course.instructorTitle}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
  
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Enrollment Options</CardTitle>
                  <CardDescription>Choose how you'd like to enroll</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Tabs defaultValue="fiat">
                    <TabsList className="grid grid-cols-2 mb-4">
                      <TabsTrigger value="fiat">Pay with USD</TabsTrigger>
                      <TabsTrigger value="crypto">Pay with SOL</TabsTrigger>
                    </TabsList>
  
                    <TabsContent value="fiat" className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="text-gray-500">Regular Price</div>
                        <div className="text-gray-500 line-through">${course.price}</div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="font-medium">Special Offer</div>
                        <div className="text-2xl font-bold">${course.discountPrice}</div>
                      </div>
                      <div className="text-sm text-amber-600 flex items-center justify-end">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>Offer ends {course.discountEnds}</span>
                      </div>
  
                      <div className="bg-gray-50 p-3 rounded-md text-sm flex items-center gap-2">
                        <Shield className="h-4 w-4 text-emerald-600" />
                        <span>30-day money-back guarantee</span>
                      </div>
  
                      <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                        <CreditCard className="mr-2 h-4 w-4" /> Enroll Now
                      </Button>
                    </TabsContent>
  
                    <TabsContent value="crypto" className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="text-gray-500">Regular Price</div>
                        <div className="text-gray-500 line-through">◎ {course.tokenPrice}</div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="font-medium">Special Offer</div>
                        <div className="text-2xl font-bold">◎ {(course.tokenPrice * 0.75).toFixed(2)}</div>
                      </div>
                      <div className="text-sm text-amber-600 flex items-center justify-end">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>Offer ends {course.discountEnds}</span>
                      </div>
  
                      <div className="bg-gray-50 p-3 rounded-md text-sm flex items-center gap-2">
                        <Shield className="h-4 w-4 text-emerald-600" />
                        <span>30-day money-back guarantee</span>
                      </div>
  
                      <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                        <Wallet className="mr-2 h-4 w-4" /> Pay with Wallet
                      </Button>
                    </TabsContent>
                  </Tabs>
                </CardContent>
                <CardFooter className="flex-col gap-4">
                  <div className="w-full text-center text-sm text-gray-500">
                    By enrolling, you agree to our Terms of Service and Privacy Policy
                  </div>
                </CardFooter>
              </Card>
  
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Course Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>Duration</span>
                    </div>
                    <div className="font-medium">{course.duration}</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-600">
                      <BookOpen className="h-4 w-4" />
                      <span>Lessons</span>
                    </div>
                    <div className="font-medium">{course.lessons} lessons</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="h-4 w-4" />
                      <span>Students</span>
                    </div>
                    <div className="font-medium">{course.students}</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span>Last Updated</span>
                    </div>
                    <div className="font-medium">{course.lastUpdated}</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Star className="h-4 w-4" />
                      <span>Level</span>
                    </div>
                    <Badge variant="outline">{course.level}</Badge>
                  </div>
                </CardContent>
              </Card>
  
              <div className="text-center">
                <Button variant="link" asChild>
                  <Link href="/design3/courses">Browse more courses</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  