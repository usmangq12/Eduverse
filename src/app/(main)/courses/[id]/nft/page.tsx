import { ArrowLeft, ExternalLink, Share2, Download, Shield, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CourseNFTView() {

  const courseNft = {
    id: "nft_sol_3a4b5c6d7e8f9g0h",
    courseId: "solana-fundamentals",
    courseTitle: "Solana Fundamentals: Build Your First dApp",
    courseImage: "/solana-network-flow.png",
    nftImage: "/solana-network-flow.png",
    mintDate: "May 8, 2023",
    owner: "8ZJ5TKhUr3QvKBV7HP1fSZADGzTyqSL4VrXRdTzYFwjN",
    tokenAddress: "7LPQxR2S9aTb4Wc5RtYuV6W2xZa1Bc",
    blockchain: "Solana",
    standard: "Metaplex NFT Standard",
    transferable: false,
    metadata: {
      name: "Course Access: Solana Fundamentals",
      description:
        "This NFT grants access to the Solana Fundamentals course on BlockLearn. It tracks course progress and unlocks achievements.",
      attributes: [
        { trait_type: "Course Type", value: "Development" },
        { trait_type: "Difficulty", value: "Beginner" },
        { trait_type: "Duration", value: "8 hours" },
        { trait_type: "Instructor", value: "Alex Johnson" },
      ],
      benefits: [
        "Lifetime access to course content",
        "Progress tracking on-chain",
        "Eligibility for achievement NFTs",
        "Certificate upon completion",
      ],
    },
  }

  return (
    <div className=" px-4 py-12">
      <div className="flex items-center gap-2 mb-8">
        <Button asChild variant="outline" size="icon">
          <Link href="/student/dashboard">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-2xl font-bold">Course Access NFT</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <div className="sticky top-6">
            <div className="aspect-square relative rounded-lg overflow-hidden border mb-4">
              <Image
                src={courseNft.nftImage || "/placeholder.svg"}
                alt={courseNft.metadata.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700" asChild>
                <Link href={`/courses/${courseNft.courseId}`}>Access Course</Link>
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Download className="h-4 w-4" />
              </Button>
            </div>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Blockchain Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-500">Token ID</span>
                  <span className="font-mono text-sm truncate max-w-[200px]">{courseNft.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Blockchain</span>
                  <span>{courseNft.blockchain}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Standard</span>
                  <span>{courseNft.standard}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Mint Date</span>
                  <span>{courseNft.mintDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Owner</span>
                  <span className="font-mono text-sm truncate max-w-[200px]">
                    {courseNft.owner.slice(0, 6)}...{courseNft.owner.slice(-4)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Transferable</span>
                  <span>{courseNft.transferable ? "Yes" : "No"}</span>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a
                    href={`https://explorer.solana.com/address/${courseNft.tokenAddress}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" /> View on Explorer
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{courseNft.metadata.name}</CardTitle>
              <CardDescription>
                <Link href={`/courses/${courseNft.courseId}`} className="text-emerald-600 hover:underline">
                  {courseNft.courseTitle}
                </Link>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>{courseNft.metadata.description}</p>

              <Tabs defaultValue="attributes">
                <TabsList className="grid grid-cols-3 mb-4">
                  <TabsTrigger value="attributes">Attributes</TabsTrigger>
                  <TabsTrigger value="benefits">Benefits</TabsTrigger>
                  <TabsTrigger value="utility">Utility</TabsTrigger>
                </TabsList>

                <TabsContent value="attributes" className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    {courseNft.metadata.attributes.map((attr, index) => (
                      <div key={index} className="bg-gray-50 p-3 rounded-md">
                        <p className="text-sm text-gray-500">{attr.trait_type}</p>
                        <p className="font-medium">{attr.value}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="benefits" className="space-y-4">
                  <ul className="space-y-2">
                    {courseNft.metadata.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Shield className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>

                <TabsContent value="utility" className="space-y-4">
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-md">
                      <h4 className="font-medium flex items-center mb-2">
                        <Shield className="h-5 w-5 text-emerald-600 mr-2" />
                        Access Control
                      </h4>
                      <p className="text-sm text-gray-600">
                        This NFT serves as your access key to the course content. Your wallet must hold this NFT to
                        access lessons and materials.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-md">
                      <h4 className="font-medium flex items-center mb-2">
                        <Award className="h-5 w-5 text-emerald-600 mr-2" />
                        Progress Tracking
                      </h4>
                      <p className="text-sm text-gray-600">
                        Your course progress is linked to this NFT and recorded on-chain, creating a verifiable record
                        of your learning journey.
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How Web3 Course Enrollment Works</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <ol className="space-y-4">
                <li className="flex gap-3">
                  <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 font-medium text-sm">
                    1
                  </div>
                  <div>
                    <p className="font-medium">Purchase with Crypto</p>
                    <p className="text-sm text-gray-500">
                      When you purchase a course with cryptocurrency, a smart contract executes the transaction,
                      transferring tokens from your wallet to the platform.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 font-medium text-sm">
                    2
                  </div>
                  <div>
                    <p className="font-medium">NFT Minting</p>
                    <p className="text-sm text-gray-500">
                      Upon successful payment, the platform automatically mints a unique Course Access NFT to your
                      wallet. This NFT contains metadata about the course and your enrollment.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 font-medium text-sm">
                    3
                  </div>
                  <div>
                    <p className="font-medium">Wallet Verification</p>
                    <p className="text-sm text-gray-500">
                      When accessing course content, the platform verifies that your connected wallet holds the
                      appropriate Course Access NFT, granting you entry.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 font-medium text-sm">
                    4
                  </div>
                  <div>
                    <p className="font-medium">On-Chain Progress</p>
                    <p className="text-sm text-gray-500">
                      As you complete lessons and assignments, your progress is recorded on the blockchain, creating a
                      verifiable record of your achievements.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 font-medium text-sm">
                    5
                  </div>
                  <div>
                    <p className="font-medium">Achievement NFTs</p>
                    <p className="text-sm text-gray-500">
                      Completing specific milestones earns you Achievement NFTs that showcase your skills and knowledge
                      in your wallet.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 font-medium text-sm">
                    6
                  </div>
                  <div>
                    <p className="font-medium">Completion Certificate</p>
                    <p className="text-sm text-gray-500">
                      Upon finishing the course, a Certificate NFT is minted to your wallet, providing cryptographically
                      verifiable proof of your education.
                    </p>
                  </div>
                </li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}