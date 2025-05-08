import { Skeleton } from "@/components/ui/skeleton"

export default function StudentDashboardLoading() {
  return (
    <div className="container px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <Skeleton className="h-10 w-64 mb-2" />
          <Skeleton className="h-5 w-48" />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="h-10 w-40" />
          <Skeleton className="h-10 w-32" />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-4 mb-8">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <Skeleton key={i} className="h-24 rounded-lg" />
          ))}
      </div>

      <Skeleton className="h-10 w-full mb-4" />

      <div className="grid gap-6 md:grid-cols-2 mb-8">
        {Array(2)
          .fill(0)
          .map((_, i) => (
            <Skeleton key={i} className="h-64 rounded-lg" />
          ))}
      </div>

      <Skeleton className="h-10 w-full mb-4" />
      <Skeleton className="h-64 w-full rounded-lg" />
    </div>
  )
}
