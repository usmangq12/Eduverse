import {
  BookOpen,
  Clock,
  Award,
  CheckCircle,
  ChevronRight,
  BarChart3,
  Zap,
  Star,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { DashboardNavbar } from "./components/DashboardNavbar";

export default function StudentDashboard() {
  // This would normally come from a database or blockchain query
  const enrolledCourses = [
    {
      id: "solana-fundamentals",
      title: "Solana Fundamentals: Build Your First dApp",
      instructor: "Alex Johnson",
      progress: 35,
      lastAccessed: "2 days ago",
      image: "/solana-network-flow.png",
      nftId: "nft_sol_3a4b5c6d7e8f9g0h",
      nftImage: "/placeholder.svg?key=6cc8u",
      totalLessons: 24,
      completedLessons: 8,
    },
    {
      id: "defi-protocols",
      title: "DeFi Protocols: Building Financial Applications",
      instructor: "Sarah Chen",
      progress: 12,
      lastAccessed: "1 week ago",
      image: "/defi-course-access-token.png",
      nftId: "nft_sol_1i2j3k4l5m6n7o8p",
      nftImage: "/defi-course-access-token.png",
      totalLessons: 32,
      completedLessons: 4,
    },
  ];

  const achievements = [
    {
      id: "first-smart-contract",
      title: "First Smart Contract",
      description: "Successfully deployed your first smart contract",
      image: "/interconnected-contracts.png",
      dateEarned: "April 28, 2023",
      nftId: "nft_ach_2b3c4d5e6f7g8h9i",
    },
    {
      id: "blockchain-basics",
      title: "Blockchain Fundamentals",
      description: "Completed the blockchain basics module",
      image: "/silver-blockchain-badge.png",
      dateEarned: "April 15, 2023",
      nftId: "nft_ach_9i8h7g6f5e4d3c2b",
    },
  ];

  const walletInfo = {
    address: "8ZJ5TKhUr3QvKBV7HP1fSZADGzTyqSL4VrXRdTzYFwjN",
    balance: 2.45,
    learningTokens: 120,
    nftCount: 4,
  };

  return (
    <div className=" px-4 pb-12">
      <DashboardNavbar walletAddress={walletInfo.address} />
      <div className="grid gap-6 md:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Wallet Balance</CardDescription>
            <CardTitle className="text-2xl">
              ◎ {walletInfo.balance} SOL
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Learning Tokens</CardDescription>
            <CardTitle className="text-2xl flex items-center">
              <Zap className="h-5 w-5 text-amber-500 mr-1" />{" "}
              {walletInfo.learningTokens} LRN
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Courses Enrolled</CardDescription>
            <CardTitle className="text-2xl">{enrolledCourses.length}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>NFTs Collected</CardDescription>
            <CardTitle className="text-2xl">{walletInfo.nftCount}</CardTitle>
          </CardHeader>
        </Card>
      </div>

      <Tabs defaultValue="courses" className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="courses">My Courses</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="certificates">Certificates</TabsTrigger>
        </TabsList>

        <TabsContent value="courses" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {enrolledCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden py-0">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 relative">
                    <div className="aspect-square md:h-full relative">
                      <Image
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-full"
                      />
                    </div>
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-emerald-600">NFT Access</Badge>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-4 flex flex-col py-6">
                    <h3 className="font-medium line-clamp-2">{course.title}</h3>
                    <p className="text-sm text-gray-500 mb-2">
                      Instructor: {course.instructor}
                    </p>

                    <div className="mt-auto space-y-3">
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>

                      <div className="flex justify-between text-xs text-gray-500">
                        <span className="flex items-center">
                          <BookOpen className="h-3 w-3 mr-1" />
                          {course.completedLessons}/{course.totalLessons}{" "}
                          lessons
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          Last accessed {course.lastAccessed}
                        </span>
                      </div>

                      <div className="flex justify-between">
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/courses/${course.id}/nft`}>
                            View NFT
                          </Link>
                        </Button>
                        <Button
                          size="sm"
                          className="bg-emerald-600 hover:bg-emerald-700"
                          asChild
                        >
                          <Link href={`/courses/${course.id}`}>
                            Continue Learning
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement) => (
              <Card key={achievement.id} className="overflow-hidden">
                <CardHeader className="pb-2 text-center">
                  <div className="mx-auto w-24 h-24 relative mb-2">
                    <Image
                      src={achievement.image || "/placeholder.svg"}
                      alt={achievement.title}
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-full"
                    />
                  </div>
                  <CardTitle className="text-lg">{achievement.title}</CardTitle>
                  <CardDescription>{achievement.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center text-sm">
                  <p>Earned on {achievement.dateEarned}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    NFT ID: {achievement.nftId.slice(-8)}
                  </p>
                </CardContent>
                <CardFooter className="justify-center pt-0">
                  <Button variant="outline" size="sm">
                    View on Blockchain
                  </Button>
                </CardFooter>
              </Card>
            ))}

            <Card className="overflow-hidden border-dashed">
              <CardHeader className="pb-2 text-center">
                <div className="mx-auto w-24 h-24 relative mb-2 flex items-center justify-center bg-gray-100 rounded-full">
                  <Award className="h-12 w-12 text-gray-300" />
                </div>
                <CardTitle className="text-lg">More to Earn</CardTitle>
                <CardDescription>
                  Complete courses to earn more achievements
                </CardDescription>
              </CardHeader>
              <CardFooter className="justify-center pt-0">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/achievements">View All Achievements</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="certificates" className="space-y-6">
          <Card className="p-8 text-center">
            <div className="mx-auto w-24 h-24 flex items-center justify-center bg-gray-100 rounded-full mb-4">
              <Award className="h-12 w-12 text-gray-300" />
            </div>
            <h3 className="text-xl font-medium mb-2">No Certificates Yet</h3>
            <p className="text-gray-500 mb-6">
              Complete a course to earn your first certificate NFT
            </p>
            <Button
              className="bg-emerald-600 hover:bg-emerald-700 mx-auto"
              asChild
            >
              <Link href="/courses">Continue Learning</Link>
            </Button>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold dark:text-gray-600">Learning Activity</h2>
          <Button variant="link" size="sm" className="text-emerald-600" asChild>
            <Link href="/student/activity">
              View All <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>On-Chain Learning Progress</CardTitle>
            <CardDescription>
              Your learning activity is recorded on the blockchain
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 rounded-full p-2 mt-1">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <div className="flex items-center">
                    <h4 className="font-medium">
                      Completed Lesson: Introduction to Solana Architecture
                    </h4>
                    <Badge variant="outline" className="ml-2">
                      +10 LRN
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-500">
                    May 7, 2023 at 2:45 PM
                  </p>
                  <p className="text-xs text-gray-400 font-mono mt-1">
                    Transaction: 2NPHVz3R...7mBz3Uv
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 rounded-full p-2 mt-1">
                  <Star className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <div className="flex items-center">
                    <h4 className="font-medium">
                      Earned Achievement: First Smart Contract
                    </h4>
                    <Badge variant="outline" className="ml-2">
                      NFT Minted
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-500">
                    April 28, 2023 at 11:20 AM
                  </p>
                  <p className="text-xs text-gray-400 font-mono mt-1">
                    Transaction: 7LPQxR2S...9aTb4Wc
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 rounded-full p-2 mt-1">
                  <BarChart3 className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <div className="flex items-center">
                    <h4 className="font-medium">
                      Quiz Completed: Blockchain Fundamentals
                    </h4>
                    <Badge variant="outline" className="ml-2">
                      Score: 85%
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-500">
                    April 15, 2023 at 3:30 PM
                  </p>
                  <p className="text-xs text-gray-400 font-mono mt-1">
                    Transaction: 5RtYuV6W...2xZa1Bc
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
