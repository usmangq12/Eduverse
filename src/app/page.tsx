import {
  Zap,
  Shield,
  Code,
  CheckCircle,
  Upload,
  Wallet,
  Users,
  Star,
  ChevronRight,
  MessageSquare,
  Clock,
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white py-12 md:py-24">
        <div className=" px-4">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-800 mb-6">
                Web3 Learning Marketplace
              </div>
              <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6">
                Learn & Teach{" "}
                <span className="text-emerald-600">Blockchain</span> Development
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                A decentralized platform connecting blockchain experts with
                students on Solana.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-emerald-600 hover:bg-emerald-700 text-white"
                >
                  <Link href="/start-teaching">Become a Teacher</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-100"
                >
                  <Link href="/start-learning">Browse Courses</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-200 to-emerald-100 opacity-50 blur-xl"></div>
              <div className="relative rounded-2xl bg-white border border-gray-200 shadow-lg p-8">
                <Tabs defaultValue="teach" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="teach" className="hover:cursor-pointer">
                      For Teachers
                    </TabsTrigger>
                    <TabsTrigger value="learn" className="hover:cursor-pointer">
                      For Students
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="teach" className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
                        <Upload className="h-5 w-5 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Create Courses</h3>
                        <p className="text-sm text-gray-600">
                          Upload your blockchain expertise
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
                        <Users className="h-5 w-5 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Reach Students</h3>
                        <p className="text-sm text-gray-600">
                          Connect with eager learners
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
                        <Wallet className="h-5 w-5 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Earn Crypto</h3>
                        <p className="text-sm text-gray-600">
                          Get paid in SOL for your knowledge
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="learn" className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
                        <Code className="h-5 w-5 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Learn from Experts</h3>
                        <p className="text-sm text-gray-600">
                          Access quality blockchain content
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
                        <Shield className="h-5 w-5 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Earn Certificates</h3>
                        <p className="text-sm text-gray-600">
                          Get verifiable on-chain credentials
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
                        <Zap className="h-5 w-5 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Build Projects</h3>
                        <p className="text-sm text-gray-600">
                          Apply skills with hands-on experience
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-emerald-50">
        <div className=" px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">
                10K+
              </div>
              <div className="text-gray-600">Active Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">
                200+
              </div>
              <div className="text-gray-600">Expert Instructors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">
                500+
              </div>
              <div className="text-gray-600">Courses Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">
                15K+
              </div>
              <div className="text-gray-600">NFT Certificates</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 md:py-24 bg-white">
        <div className=" px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform connects blockchain experts with students in a
              decentralized ecosystem
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="mb-4 h-12 w-12 rounded-lg bg-emerald-100 flex items-center justify-center">
                  <Upload className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle>For Teachers</CardTitle>
                <CardDescription>
                  Share your blockchain expertise
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Create and upload course content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Set your pricing and enrollment terms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Earn crypto as students enroll</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Build your reputation with reviews</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                >
                  <Link href="/start-teaching">Start Teaching</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4 h-12 w-12 rounded-lg bg-emerald-100 flex items-center justify-center">
                  <Users className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle>For Students</CardTitle>
                <CardDescription>Learn from industry experts</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Browse courses from top instructors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Pay with SOL or other cryptocurrencies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Learn at your own pace</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Earn verifiable on-chain certificates</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                >
                  <Link href="/start-learning">Start Learning</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="py-12 md:py-24 bg-gray-50">
        <div className=" px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Popular Courses</h2>
              <p className="text-gray-600">Most in-demand blockchain courses</p>
            </div>
            <Button
              asChild
              variant="outline"
              className="hidden md:flex items-center gap-2"
            >
              <Link href="/start-learning">
                View All Courses <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Solana Fundamentals",
                instructor: "Alex Johnson",
                students: 1248,
                duration: "8 hours",
                rating: 4.8,
                price: "$59",
                image: "/solana-network-flow.png",
              },
              {
                title: "Smart Contract Development",
                instructor: "Maria Garcia",
                students: 864,
                duration: "12 hours",
                rating: 4.6,
                price: "$79",
                image: "/interconnected-contracts.png",
              },
              {
                title: "DeFi Applications",
                instructor: "James Wilson",
                students: 632,
                duration: "10 hours",
                rating: 4.7,
                price: "$69",
                image: "/interconnected-defi-network.png",
              },
            ].map((course, index) => (
              <Card
                key={index}
                className="overflow-hidden border-gray-200 shadow-sm hover:shadow-md transition-shadow pt-0"
              >
                <div className=" w-full bg-gray-100">
                  <Image

                    src={
                      course.image ||
                      "/placeholder.svg?height=200&width=400&query=blockchain course"
                    }
                    alt={course.title}
                    className="w-full h-56 object-cover "
                    width={0}
                    height={0}
                    sizes="100vw"
                  
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{course.title}</CardTitle>
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
                      <span>{course.students} students</span>
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
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                  >
                    <Link href="/start-learning">Enroll Now</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Button asChild variant="outline" className="items-center gap-2">
              <Link href="/start-learning">
                View All Courses <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 md:py-24">
        <div className=" px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Popular Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our most popular blockchain learning categories
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {[
              { title: "Solana Development", icon: Shield, courses: 24 },
              { title: "Smart Contracts", icon: Code, courses: 18 },
              { title: "DeFi Applications", icon: Zap, courses: 15 },
              { title: "NFT Creation", icon: Wallet, courses: 12 },
            ].map((category, i) => (
              <Card
                key={i}
                className="border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center">
                      <category.icon className="h-6 w-6 text-emerald-600" />
                    </div>
                    <h3 className="font-medium text-lg mb-1">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {category.courses} courses
                    </p>
                    <Button
                      asChild
                      variant="link"
                      className="mt-2 text-emerald-600 hover:text-emerald-700"
                    >
                      <Link href="/start-learning">Browse Courses</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-24 bg-emerald-50">
        <div className=" px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our community of blockchain learners and teachers
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Alex Thompson",
                role: "Software Developer",
                content:
                  "The Solana Fundamentals course was exactly what I needed to transition into blockchain development. The instructor was knowledgeable and the hands-on projects were invaluable.",
                avatar: "/diverse-group-city.png",
              },
              {
                name: "Sarah Chen",
                role: "Blockchain Entrepreneur",
                content:
                  "As someone building a DeFi startup, the Smart Contract Development course gave me the technical foundation I needed. The NFT certificate was a nice bonus that I proudly display on my profile.",
                avatar: "/contemplative-artist.png",
              },
              {
                name: "Michael Rodriguez",
                role: "Web3 Instructor",
                content:
                  "Teaching on this platform has been rewarding both financially and professionally. The tools for course creation are intuitive, and the payment system is seamless with instant crypto transfers.",
                avatar: "/contemplative-man.png",
              },
            ].map((testimonial, i) => (
              <Card
                key={i}
                className="border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage
                          src={
                            testimonial.avatar ||
                            "/placeholder.svg?height=64&width=64&query=person"
                          }
                          alt={testimonial.name}
                        />
                        <AvatarFallback>
                          {testimonial.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 text-yellow-500"
                          fill="currentColor"
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4">
                      &quot;{testimonial.content} &quot;
                    </p>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-12 md:py-24">
        <div className=" px-4">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-800 mb-6">
                Join Our Community
              </div>
              <h2 className="text-3xl font-bold mb-6">
                Connect with Blockchain Enthusiasts
              </h2>
              <p className="text-gray-600 mb-6">
                Become part of our thriving community of blockchain developers,
                educators, and students. Share knowledge, collaborate on
                projects, and grow your network.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Discussion Forums</h3>
                    <p className="text-sm text-gray-600">
                      Engage in technical discussions and get help from
                      experienced developers
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Live Events</h3>
                    <p className="text-sm text-gray-600">
                      Attend virtual workshops, hackathons, and networking
                      events
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Mentorship Opportunities</h3>
                    <p className="text-sm text-gray-600">
                      Connect with mentors or become one to help others grow in
                      the blockchain space
                    </p>
                  </div>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white hover:cursor-pointer">
                  <MessageSquare className="h-4 w-4 mr-2" /> Join Community
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:cursor-pointer"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-200 to-emerald-100 opacity-50 blur-xl"></div>
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/blockchain-meetup.png"
                  alt="Blockchain Community"
                  className="w-full h-auto"
                  width={0}
                  height={0}
                  sizes="100vw"
               
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-24 bg-gray-50">
        <div className=" px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our blockchain learning
              platform
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem
                value="item-1"
                className="bg-white border rounded-lg  "
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:cursor-pointer">
                  How do I get started as a student?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  Getting started is easy! Simply create an account, connect
                  your Solana wallet, browse our course catalog, and enroll in
                  any course that interests you. You can pay with SOL or other
                  supported cryptocurrencies. Once enrolled, you&apos;ll have
                  immediate access to all course materials.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="bg-white border rounded-lg"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:cursor-pointer">
                  How do I become a teacher on the platform?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  To become a teacher, you&apos;ll need to apply through our
                  teacher application process. We review your expertise,
                  experience, and proposed course outline. Once approved,
                  you&apos;ll gain access to our course creation tools where you
                  can upload videos, assignments, and other learning materials.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="bg-white border rounded-lg"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:cursor-pointer">
                  What are NFT certificates and how do they work?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  When you complete a course, you&apos;ll receive an NFT
                  certificate on the Solana blockchain. This certificate is a
                  verifiable credential that proves your completion and skills.
                  You can display it on your profile, share it with employers,
                  or use it as proof of your blockchain education. Each
                  certificate contains metadata about the course, your
                  performance, and completion date.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="bg-white border rounded-lg"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:cursor-pointer">
                  How are teachers paid on the platform?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  Teachers earn revenue from course enrollments. When a student
                  purchases your course, the payment is automatically processed
                  through our smart contract, and your share (typically 70-85%
                  depending on your agreement) is immediately transferred to
                  your connected wallet. You can track all earnings in your
                  teacher dashboard.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="bg-white border rounded-lg "
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:cursor-pointer ">
                  Do I need prior blockchain knowledge to take courses?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  Not at all! We have courses for all skill levels, from
                  complete beginners to advanced developers. Each course clearly
                  indicates the prerequisite knowledge required, and many of our
                  introductory courses assume no prior blockchain experience.
                  You&apos;ll find learning paths that guide you from the basics
                  to advanced topics.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-emerald-600 text-white rounded-t-lg">
        <div className=" px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Blockchain Journey?
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Join thousands of students and teachers in our decentralized
              learning community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-white text-emerald-600 hover:bg-emerald-50"
              >
                <Link href="/start-learning">Start Learning</Link>
              </Button>
              <Button
                asChild
                className="bg-white text-emerald-600 hover:bg-emerald-50"
              >
                <Link href="/start-teaching">Become a Teacher</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
