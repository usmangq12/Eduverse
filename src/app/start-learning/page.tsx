import {
  Search,
  Clock,
  Users,
  Star,
  ChevronRight,
  BookOpen,
  Shield,
  Zap,
  Wallet,
  CheckCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export default function StartLearning() {
  return (
    <div className=" px-4 pt-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Explore Courses</h1>
        <p className="text-gray-600">
          Find the perfect blockchain course to advance your skills
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Search</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input placeholder="Search courses..." className="pl-9" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {[
                  { id: "solana", label: "Solana Development", count: 24 },
                  {
                    id: "smart-contracts",
                    label: "Smart Contracts",
                    count: 18,
                  },
                  { id: "defi", label: "DeFi Applications", count: 15 },
                  { id: "nft", label: "NFT Creation", count: 12 },
                  { id: "security", label: "Blockchain Security", count: 9 },
                  { id: "tokenomics", label: "Tokenomics", count: 7 },
                ].map((category) => (
                  <div
                    key={category.id}
                    className="flex items-center space-x-2"
                  >
                    <Checkbox id={category.id} />
                    <Label
                      htmlFor={category.id}
                      className="flex flex-1 items-center justify-between text-sm cursor-pointer"
                    >
                      {category.label}
                      <Badge variant="outline" className="ml-auto">
                        {category.count}
                      </Badge>
                    </Label>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Level</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {[
                  { id: "beginner", label: "Beginner" },
                  { id: "intermediate", label: "Intermediate" },
                  { id: "advanced", label: "Advanced" },
                ].map((level) => (
                  <div key={level.id} className="flex items-center space-x-2">
                    <Checkbox id={level.id} />
                    <Label
                      htmlFor={level.id}
                      className="text-sm cursor-pointer"
                    >
                      {level.label}
                    </Label>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Price</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {[
                  { id: "free", label: "Free" },
                  { id: "paid", label: "Paid" },
                ].map((price) => (
                  <div key={price.id} className="flex items-center space-x-2">
                    <Checkbox id={price.id} />
                    <Label
                      htmlFor={price.id}
                      className="text-sm cursor-pointer"
                    >
                      {price.label}
                    </Label>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Duration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {[
                  { id: "short", label: "0-3 hours" },
                  { id: "medium", label: "3-10 hours" },
                  { id: "long", label: "10+ hours" },
                ].map((duration) => (
                  <div
                    key={duration.id}
                    className="flex items-center space-x-2"
                  >
                    <Checkbox id={duration.id} />
                    <Label
                      htmlFor={duration.id}
                      className="text-sm cursor-pointer"
                    >
                      {duration.label}
                    </Label>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
              Apply Filters
            </Button>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
            <div className="flex items-center gap-2">
              <span className="text-gray-600">Sort by:</span>
              <Select defaultValue="popular">
                <SelectTrigger className="w-[180px] hover:cursor-pointer">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="highest">Highest Rated</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="text-gray-600">Showing 12 of 76 courses</div>
          </div>

          <Tabs defaultValue="all" className="mb-6">
            <TabsList>
              <TabsTrigger value="all" className="hover:cursor-pointer">
                All Courses
              </TabsTrigger>
              <TabsTrigger value="featured" className="hover:cursor-pointer">
                Featured
              </TabsTrigger>
              <TabsTrigger value="trending" className="hover:cursor-pointer">
                Trending
              </TabsTrigger>
              <TabsTrigger value="new" className="hover:cursor-pointer">
                New
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Solana Fundamentals",
                instructor: "Alex Johnson",
                students: 1248,
                duration: "8 hours",
                rating: 4.8,
                price: "$59",
                level: "Beginner",
                image: "/solana-network-flow.png",
              },
              {
                title: "Smart Contract Development",
                instructor: "Maria Garcia",
                students: 864,
                duration: "12 hours",
                rating: 4.6,
                price: "$79",
                level: "Intermediate",
                image: "/interconnected-contracts.png",
              },
              {
                title: "DeFi Applications",
                instructor: "James Wilson",
                students: 632,
                duration: "10 hours",
                rating: 4.7,
                price: "$69",
                level: "Advanced",
                image: "/interconnected-defi-network.png",
              },
              {
                title: "NFT Marketplace Creation",
                instructor: "Sarah Ahmed",
                students: 1032,
                duration: "14 hours",
                rating: 4.9,
                price: "$89",
                level: "Intermediate",
                image: "/interconnected-defi-network.png",
                badge: "Bestseller",
              },
              {
                title: "Solana Program Library",
                instructor: "Michael Chen",
                students: 428,
                duration: "6 hours",
                rating: 4.5,
                price: "$49",
                level: "Advanced",
                image: "/solana-network-flow.png",
              },
              {
                title: "Web3 Security Fundamentals",
                instructor: "David Kim",
                students: 756,
                duration: "9 hours",
                rating: 4.7,
                price: "$69",
                level: "Intermediate",
                image: "/interconnected-contracts.png",
                badge: "New",
              },
              {
                title: "Blockchain Interoperability",
                instructor: "Lisa Wang",
                students: 312,
                duration: "7 hours",
                rating: 4.4,
                price: "$59",
                level: "Advanced",
                image: "/interconnected-contracts.png",
              },
              {
                title: "Tokenomics Design",
                instructor: "Robert Taylor",
                students: 524,
                duration: "5 hours",
                rating: 4.6,
                price: "$49",
                level: "Intermediate",
                image: "/interconnected-defi-network.png",
              },
              {
                title: "Intro to Blockchain",
                instructor: "Emily Brown",
                students: 1876,
                duration: "4 hours",
                rating: 4.9,
                price: "$29",
                level: "Beginner",
                image: "/solana-network-flow.png",
                badge: "Popular",
              },
            ].map((course, index) => (
              <Card
                key={index}
                className="overflow-hidden border-gray-200 shadow-sm hover:shadow-md transition-shadow pt-0"
              >
                <div className=" w-full bg-gray-100 relative">
                  <img
                    src={
                      course.image ||
                      "/placeholder.svg?height=200&width=400&query=blockchain"
                    }
                    alt={course.title}
                    className="h-40 w-full object-cover"
                  />
                  {course.badge && (
                    <Badge className="absolute top-2 right-2 bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                      {course.badge}
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                    <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                      {course.price}
                    </Badge>
                  </div>
                  <CardDescription>By {course.instructor}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{course.students}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>{course.rating}</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-gray-50">
                    {course.level}
                  </Badge>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white hover:cursor-pointer">
                    Enroll Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" disabled>
                <ChevronRight className="h-4 w-4 rotate-180" />
              </Button>
              <Button variant="outline" size="sm" className="bg-emerald-50 ">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                4
              </Button>
              <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Learning Paths</h2>
        <p className="text-gray-600 mb-8 max-w-3xl">
          Not sure where to start? Our curated learning paths guide you from
          beginner to expert in specific blockchain domains.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Solana Developer",
              description: "Become a proficient Solana blockchain developer",
              courses: 5,
              duration: "40 hours",
              level: "Beginner to Advanced",
              image: "/solana-network-flow.png",
            },
            {
              title: "DeFi Specialist",
              description:
                "Master decentralized finance applications and protocols",
              courses: 4,
              duration: "32 hours",
              level: "Intermediate to Advanced",
              image: "/interconnected-defi-network.png",
            },
            {
              title: "NFT Creator",
              description: "Learn to design, mint, and sell NFTs on Solana",
              courses: 3,
              duration: "24 hours",
              level: "Beginner to Intermediate",
              image: "/interconnected-contracts.png",
            },
          ].map((path, index) => (
            <Card
              key={index}
              className="overflow-hidden border-gray-200 shadow-sm hover:shadow-md transition-shadow pt-0"
            >
              <div className=" w-full bg-gray-100">
                <Image
                  src={
                    path.image ||
                    "/placeholder.svg?height=200&width=400&query=learning path"
                  }
                  alt={path.title}
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </div>
              <CardHeader>
                <CardTitle>{path.title}</CardTitle>
                <CardDescription>{path.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-emerald-600" />
                    <span>{path.courses} courses</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-emerald-600" />
                    <span>{path.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-emerald-600" />
                    <span>{path.level}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white hover:cursor-pointer">
                  View Path
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Recommended For You</h2>
        <p className="text-gray-600 mb-8 max-w-3xl">
          Based on your interests and browsing history, we think you might like
          these courses.
        </p>

        <div className="grid gap-6 md:grid-cols-4">
          {[
            {
              title: "Advanced Smart Contract Security",
              instructor: "Jennifer Lee",
              rating: 4.9,
              price: "$89",
              image: "/interconnected-contracts.png",
            },
            {
              title: "Solana Mobile Development",
              instructor: "Marcus Johnson",
              rating: 4.7,
              price: "$79",
              image: "/solana-network-flow.png",
            },
            {
              title: "Web3 Frontend with React",
              instructor: "Sophia Chen",
              rating: 4.8,
              price: "$69",
              image: "/interconnected-defi-network.png",
            },
            {
              title: "Blockchain Game Development",
              instructor: "Daniel Kim",
              rating: 4.6,
              price: "$99",
              image: "/interconnected-contracts.png",
            },
          ].map((course, index) => (
            <Card
              key={index}
              className="overflow-hidden border-gray-200 shadow-sm hover:shadow-md transition-shadow pt-0"
            >
              <div className=" w-full bg-gray-100">
                <img
                  src={
                    course.image ||
                    "/placeholder.svg?height=200&width=400&query=blockchain course"
                  }
                  alt={course.title}
                  className="w-full h-40 object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium text-base mb-1 line-clamp-1">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  By {course.instructor}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm">{course.rating}</span>
                  </div>
                  <Badge className="bg-emerald-100 text-emerald-800">
                    {course.price}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Getting Started</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>New to Blockchain?</CardTitle>
              <CardDescription>
                Start your journey with these beginner-friendly resources
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium">
                      Free Blockchain Basics Course
                    </h4>
                    <p className="text-sm text-gray-600">
                      A comprehensive introduction to blockchain technology
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Blockchain Glossary</h4>
                    <p className="text-sm text-gray-600">
                      Learn the key terminology used in blockchain development
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Beginner Learning Path</h4>
                    <p className="text-sm text-gray-600">
                      A structured curriculum for complete beginners
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Community Forum</h4>
                    <p className="text-sm text-gray-600">
                      Connect with other learners and get your questions
                      answered
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white hover:cursor-pointer">
                Explore Beginner Resources
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How Our Platform Works</CardTitle>
              <CardDescription>
                Learn how to make the most of your learning experience
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5 text-xs font-medium text-emerald-600">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium">Create an Account</h4>
                    <p className="text-sm text-gray-600">
                      Sign up and set up your profile to track your progress
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5 text-xs font-medium text-emerald-600">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium">Connect Your Wallet</h4>
                    <p className="text-sm text-gray-600">
                      Link your Solana wallet to pay for courses and receive
                      certificates
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5 text-xs font-medium text-emerald-600">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium">Enroll in Courses</h4>
                    <p className="text-sm text-gray-600">
                      Browse and enroll in courses that match your interests and
                      goals
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5 text-xs font-medium text-emerald-600">
                    4
                  </div>
                  <div>
                    <h4 className="font-medium">Learn and Earn</h4>
                    <p className="text-sm text-gray-600">
                      Complete courses to earn NFT certificates and build your
                      portfolio
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white hover:cursor-pointer">
                Watch Platform Tutorial
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="mt-16 bg-emerald-50  rounded-lg">
        <div className="flex gap-8 items-stretch flex-col md:flex-row h-full">
          <div className="flex-1 p-8  h-full">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-gray-600 mb-6">
              Join thousands of students who are already advancing their
              blockchain careers through our platform.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <Shield className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium">Quality Content</h4>
                  <p className="text-sm text-gray-600">
                    All courses are vetted by blockchain experts
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Zap className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium">Learn at Your Pace</h4>
                  <p className="text-sm text-gray-600">
                    Access course materials anytime, anywhere
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Wallet className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium">Verifiable Credentials</h4>
                  <p className="text-sm text-gray-600">
                    Earn NFT certificates to showcase your skills
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white hover:cursor-pointer">
                Create Free Account
              </Button>
            </div>
          </div>

          <div className="relative flex-1 flex min-h-full" dir="rtl">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-200 to-emerald-100 opacity-50 blur-xl min-h-full"></div>
            <div className="relative rounded-lg md:rounded-s-lg overflow-hidden min-h-full  shrink">
              <img
                src="/blockchain-meetup.png"
                alt="Student learning blockchain"
                className="w-full min-h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
