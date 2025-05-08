import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container px-4 py-12">
      <div className="flex items-center gap-2 mb-8">
        <Skeleton className="h-10 w-10 rounded-md" />
        <Skeleton className="h-8 w-48" />
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="border rounded-md p-6 space-y-6">
            <div className="space-y-2">
              <Skeleton className="h-8 w-3/4" />
              <div className="flex items-center gap-4">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-24" />
              </div>
            </div>

            <Skeleton className="h-64 w-full rounded-md" />

            <div className="space-y-2">
              <Skeleton className="h-6 w-48" />
              {Array(3)
                .fill(0)
                .map((_, i) => (
                  <Skeleton key={i} className="h-4 w-full" />
                ))}
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <Skeleton className="h-6 w-40" />
                <div className="space-y-2">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Skeleton className="h-5 w-5 rounded-full" />
                        <Skeleton className="h-4 w-full" />
                      </div>
                    ))}
                </div>
              </div>

              <div className="space-y-4">
                <Skeleton className="h-6 w-40" />
                <div className="space-y-2">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Skeleton className="h-5 w-5 rounded-full" />
                        <Skeleton className="h-4 w-full" />
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <Skeleton className="h-1 w-full" />

            <div className="flex items-center gap-4">
              <Skeleton className="h-16 w-16 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-6 w-40" />
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-48" />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="space-y-6">
            <div className="border rounded-md p-6 space-y-6">
              <div className="space-y-2">
                <Skeleton className="h-6 w-40" />
                <Skeleton className="h-4 w-48" />
              </div>

              <div className="space-y-2">
                <div className="flex gap-2">
                  <Skeleton className="h-10 w-full" />
                  <Skeleton className="h-10 w-full" />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                  <div className="flex justify-between">
                    <Skeleton className="h-6 w-32" />
                    <Skeleton className="h-8 w-24" />
                  </div>
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-12 w-full rounded-md" />
                  <Skeleton className="h-10 w-full" />
                </div>
              </div>
            </div>

            <div className="border rounded-md p-6 space-y-4">
              <Skeleton className="h-6 w-32" />
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Skeleton className="h-4 w-4" />
                      <Skeleton className="h-4 w-20" />
                    </div>
                    <Skeleton className="h-4 w-16" />
                  </div>
                ))}
            </div>

            <div className="flex justify-center">
              <Skeleton className="h-4 w-40" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
