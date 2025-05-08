import { CheckCircle, Download, ExternalLink, Copy, Share2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export default function PaymentConfirmation() {
  // This would normally come from a database or transaction record
  const transaction = {
    id: "tx_sol_5f7e9a2d8b3c1e6f",
    courseId: "solana-fundamentals",
    courseTitle: "Solana Fundamentals: Build Your First dApp",
    courseImage: "/solana-program.png",
    amount: 0.375,
    currency: "SOL",
    usdEquivalent: 59.99,
    timestamp: "2023-05-08T14:23:47Z",
    walletAddress: "8ZJ5TKhUr3QvKBV7HP1fSZADGzTyqSL4VrXRdTzYFwjN",
    blockExplorerUrl:
      "https://explorer.solana.com/tx/2NPHVz3RLUZmEDQJjdZKpKjbGK5JTQPxRYv1jqGPwQ6UQA5ECzR9qyqaHLT7mBz3Uv",
    nftMinted: true,
    nftId: "nft_sol_3a4b5c6d7e8f9g0h",
    nftImage: "/placeholder.svg?key=48x8t",
  }

  const formattedDate = new Date(transaction.timestamp).toLocaleString()

  return (
    <div className="container max-w-4xl px-4 py-12">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-4">
          <CheckCircle className="h-8 w-8 text-emerald-600" />
        </div>
        <h1 className="text-3xl font-bold">Payment Successful!</h1>
        <p className="text-gray-500 mt-2">You&apos;ve successfully enrolled in {transaction.courseTitle}</p>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Transaction Details</CardTitle>
          <CardDescription>Your payment has been confirmed on the blockchain</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <div className="aspect-square relative rounded-lg overflow-hidden border">
                <Image
                  src={transaction.courseImage || "/placeholder.svg"}
                  alt={transaction.courseTitle}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3 space-y-4">
              <div>
                <h3 className="text-lg font-medium">{transaction.courseTitle}</h3>
                <Badge variant="outline" className="mt-1">
                  Enrolled
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Amount Paid</p>
                  <p className="font-medium">◎ {transaction.amount} SOL</p>
                  <p className="text-sm text-gray-500">(${transaction.usdEquivalent} USD)</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Date & Time</p>
                  <p className="font-medium">{formattedDate}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Transaction ID</p>
                  <div className="flex items-center gap-1">
                    <p className="font-medium text-sm truncate">{transaction.id}</p>
                    <Button variant="ghost" size="icon" className="h-6 w-6">
                      <Copy className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Wallet Address</p>
                  <div className="flex items-center gap-1">
                    <p className="font-medium text-sm truncate">{transaction.walletAddress}</p>
                    <Button variant="ghost" size="icon" className="h-6 w-6">
                      <Copy className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a href={transaction.blockExplorerUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-1" /> View on Explorer
                  </a>
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-1" /> Download Receipt
                </Button>
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Course Access NFT</h3>
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="md:w-1/4">
                <div className="aspect-square relative rounded-lg overflow-hidden border">
                  <Image
                    src={transaction.nftImage || "/placeholder.svg"}
                    alt="Course Access NFT"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-3/4 space-y-4">
                <div>
                  <h4 className="font-medium">Course Access Token #{transaction.nftId.slice(-8)}</h4>
                  <p className="text-sm text-gray-500">
                    This NFT grants you access to the course content and will be used to track your progress and
                    achievements.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-4 w-4 mr-1" /> View in Wallet
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-1" /> Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center border-t pt-6">
          <Button className="bg-emerald-600 hover:bg-emerald-700" asChild>
            <Link href="/design3/student/dashboard">Go to My Learning Dashboard</Link>
          </Button>
        </CardFooter>
      </Card>

      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-medium mb-4">What happens next?</h3>
        <ol className="space-y-4">
          <li className="flex gap-3">
            <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 font-medium text-sm">
              1
            </div>
            <div>
              <p className="font-medium">Access Your Course</p>
              <p className="text-sm text-gray-500">
                Your course is now available in your learning dashboard. You can start learning immediately.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 font-medium text-sm">
              2
            </div>
            <div>
              <p className="font-medium">Track Your Progress</p>
              <p className="text-sm text-gray-500">
                Your progress will be recorded on-chain as you complete lessons and assignments.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 font-medium text-sm">
              3
            </div>
            <div>
              <p className="font-medium">Earn Achievements</p>
              <p className="text-sm text-gray-500">
                Complete challenges to earn achievement NFTs that showcase your skills.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 font-medium text-sm">
              4
            </div>
            <div>
              <p className="font-medium">Get Certified</p>
              <p className="text-sm text-gray-500">
                Upon course completion, you&apos;ll receive an NFT certificate that verifies your knowledge.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  )
}
