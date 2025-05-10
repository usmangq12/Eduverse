import { Skeleton } from "@/components/ui/skeleton"

export default function CourseNFTLoading() {
  return (
    <div className="container px-4 py-12">
      <div className="flex items-center gap-2 mb-8">
        <Skeleton className="h-10 w-10 rounded-md" />
        <Skeleton className="h-8 w-48" />
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <Skeleton className="aspect-square w-full rounded-lg mb-4" />
          <div className="flex gap-2 mb-6">
            <Skeleton className="h-10 flex-1 rounded-md" />
            <Skeleton className="h-10 w-10 rounded-md" />
            <Skeleton className="h-10 w-10 rounded-md" />
          </div>
          <Skeleton className="h-64 w-full rounded-lg" />
        </div>

        <div className="space-y-6">
          <Skeleton className="h-80 w-full rounded-lg" />
          <Skeleton className="h-96 w-full rounded-lg" />
        </div>
      </div>
    </div>
  )
}
