import { Skeleton } from "@/components/ui/skeleton"

export default function PaymentConfirmationLoading() {
  return (
    <div className="container max-w-4xl px-4 py-12">
      <div className="text-center mb-8">
        <Skeleton className="h-16 w-16 rounded-full mx-auto mb-4" />
        <Skeleton className="h-10 w-64 mx-auto mb-2" />
        <Skeleton className="h-5 w-96 max-w-full mx-auto" />
      </div>

      <Skeleton className="h-[600px] w-full mb-8 rounded-lg" />

      <Skeleton className="h-64 w-full rounded-lg" />
    </div>
  )
}
