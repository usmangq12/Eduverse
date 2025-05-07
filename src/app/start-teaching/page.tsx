import { ArrowRight, CheckCircle, Upload, Wallet, Users, MessageSquare } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function StartTeaching() {
  return (
    <div className="container px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Become a Teacher</h1>
        <p className="text-gray-600">Share your blockchain knowledge and earn crypto</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Teacher Application</CardTitle>
              <CardDescription>Tell us about yourself and your teaching experience</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input id="first-name" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="wallet">Solana Wallet Address</Label>
                  <Input id="wallet" placeholder="Enter your Solana wallet address" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="expertise">Area of Expertise</Label>
                  <RadioGroup defaultValue="solana" className="grid gap-4 sm:grid-cols-2">
                    <div className="flex items-center space-x-2 rounded-md border p-3">
                      <RadioGroupItem value="solana" id="solana" />
                      <Label htmlFor="solana" className="flex-1 cursor-pointer">
                        Solana Development
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 rounded-md border p-3">
                      <RadioGroupItem value="smart-contracts" id="smart-contracts" />
                      <Label htmlFor="smart-contracts" className="flex-1 cursor-pointer">
                        Smart Contracts
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 rounded-md border p-3">
                      <RadioGroupItem value="defi" id="defi" />
                      <Label htmlFor="defi" className="flex-1 cursor-pointer">
                        DeFi Applications
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 rounded-md border p-3">
                      <RadioGroupItem value="nft" id="nft" />
                      <Label htmlFor="nft" className="flex-1 cursor-pointer">
                        NFT Creation
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Teaching Experience</Label>
                  <Textarea
                    id="experience"
                    placeholder="Describe your teaching experience and qualifications"
                    className="min-h-[120px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="course-idea">Course Idea</Label>
                  <Textarea
                    id="course-idea"
                    placeholder="Briefly describe the course you&apos;d like to create"
                    className="min-h-[120px]"
                  />
                </div>

                <div className="flex justify-end">
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Submit Application</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Why Teach With Us?</CardTitle>
              <CardDescription>Benefits of becoming an instructor</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
                  <Wallet className="h-3.5 w-3.5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-medium">Earn Crypto</h3>
                  <p className="text-sm text-gray-600">Get paid in SOL for every student enrollment</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
                  <Users className="h-3.5 w-3.5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-medium">Global Reach</h3>
                  <p className="text-sm text-gray-600">Connect with students worldwide</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
                  <Upload className="h-3.5 w-3.5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-medium">Easy Course Creation</h3>
                  <p className="text-sm text-gray-600">Intuitive tools to build and publish your courses</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
                  <MessageSquare className="h-3.5 w-3.5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-medium">Community Support</h3>
                  <p className="text-sm text-gray-600">Join our network of blockchain educators</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
              <CardDescription>The teaching process</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5 text-xs font-medium text-emerald-600">
                  1
                </div>
                <div>
                  <h3 className="font-medium">Apply</h3>
                  <p className="text-sm text-gray-600">Submit your application with your expertise and course idea</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5 text-xs font-medium text-emerald-600">
                  2
                </div>
                <div>
                  <h3 className="font-medium">Get Approved</h3>
                  <p className="text-sm text-gray-600">Our team reviews your application within 3-5 business days</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5 text-xs font-medium text-emerald-600">
                  3
                </div>
                <div>
                  <h3 className="font-medium">Create Content</h3>
                  <p className="text-sm text-gray-600">Build your course with our easy-to-use course builder</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5 text-xs font-medium text-emerald-600">
                  4
                </div>
                <div>
                  <h3 className="font-medium">Launch & Earn</h3>
                  <p className="text-sm text-gray-600">Publish your course and start earning crypto</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/dashboard">View Teacher Dashboard Demo</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Teacher Success Stories</h2>

        <Tabs defaultValue="earnings" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="earnings" className="hover:cursor-pointer">Earnings Potential</TabsTrigger>
            <TabsTrigger value="tools" className="hover:cursor-pointer">Teaching Tools</TabsTrigger>
            <TabsTrigger value="support" className="hover:cursor-pointer">Support System</TabsTrigger>
          </TabsList>

          <TabsContent value="earnings">
            <Card>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Maximize Your Earnings</h3>
                    <p className="text-gray-600 mb-4">
                      Our teachers earn an average of $2,000 per month from course sales. With our revenue share model,
                      you keep 70-85% of all course sales, paid directly to your wallet in SOL.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Set your own course pricing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Earn from course bundles and promotions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Receive tips from satisfied students</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Create multiple courses to increase revenue</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-emerald-50 p-6 rounded-lg">
                    <div className="text-center mb-6">
                      <h4 className="text-lg font-medium mb-2">Average Monthly Earnings</h4>
                      <div className="text-4xl font-bold text-emerald-600">$2,000</div>
                      <p className="text-sm text-gray-500 mt-1">Based on teachers with 2+ courses</p>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Beginner Teacher</span>
                          <span>$500 - $1,000</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div className="h-2 bg-emerald-600 rounded-full w-1/4"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Established Teacher</span>
                          <span>$1,000 - $3,000</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div className="h-2 bg-emerald-600 rounded-full w-1/2"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Top Teacher</span>
                          <span>$3,000 - $10,000+</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div className="h-2 bg-emerald-600 rounded-full w-3/4"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tools">
            <Card>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Powerful Teaching Tools</h3>
                    <p className="text-gray-600 mb-4">
                      Our platform provides everything you need to create engaging blockchain courses. From video
                      hosting to interactive coding environments, we&apos;ve got you covered.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>HD video hosting with no bandwidth limits</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Interactive code playgrounds for Solana and Ethereum</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Quiz and assignment creation tools</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Student progress tracking and analytics</span>
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <Image src="/creation.webp" alt="Course Creation Tools"  width={0}
                  height={0}
                  sizes="100vw" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="support" >
            <Card>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Teacher Support System</h3>
                    <p className="text-gray-600 mb-4">
                      You&apos;re never alone on your teaching journey. Our dedicated support team and teacher community are
                      here to help you succeed every step of the way.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Dedicated teacher success manager</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Private teacher community forum</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Monthly teacher workshops and webinars</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Marketing support to promote your courses</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-emerald-50 p-6 rounded-lg">
                    <h4 className="text-lg font-medium mb-4">Teacher Community</h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 bg-white p-3 rounded-lg">
                        <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
                          <span className="font-medium text-emerald-600">JD</span>
                        </div>
                        <div>
                          <div className="font-medium">John Doe</div>
                          <p className="text-sm text-gray-600">
                             &quot;The teacher community has been invaluable. I got feedback on my course outline that really
                            improved my content. &quot;
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 bg-white p-3 rounded-lg">
                        <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
                          <span className="font-medium text-emerald-600">AS</span>
                        </div>
                        <div>
                          <div className="font-medium">Alice Smith</div>
                          <p className="text-sm text-gray-600">
                          &quot;My success manager helped me optimize my course pricing, which increased my revenue by
                            40%!&quot;
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Share Your Knowledge?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Join our community of blockchain educators and start earning crypto while helping others learn.
        </p>
        <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
          Apply Now <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

