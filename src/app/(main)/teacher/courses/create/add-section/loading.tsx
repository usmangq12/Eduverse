import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container px-4 py-12">
      <div className="flex items-center gap-2 mb-8">
        <Skeleton className="h-10 w-10 rounded-md" />
        <Skeleton className="h-10 w-64" />
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-64 space-y-4">
          <div>
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="space-y-4">
                <div>
                  <Skeleton className="h-4 w-20 mb-1" />
                  <Skeleton className="h-5 w-full mb-1" />
                  <Skeleton className="h-3 w-24" />
                </div>
                <Skeleton className="h-px w-full" />
                <div>
                  <Skeleton className="h-4 w-32 mb-2" />
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Skeleton className="h-5 w-5 rounded-full" />
                      <Skeleton className="h-4 w-40" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Skeleton className="h-5 w-5 rounded-full" />
                      <Skeleton className="h-4 w-40" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Skeleton className="h-5 w-5 rounded-full" />
                      <Skeleton className="h-4 w-40" />
                    </div>
                  </div>
                </div>
                <Skeleton className="h-px w-full" />
                <Skeleton className="h-10 w-full rounded-md" />
                <Skeleton className="h-10 w-full rounded-md" />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4 mt-4">
              <Skeleton className="h-4 w-24 mb-2" />
              <div className="space-y-2">
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-full" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b">
              <Skeleton className="h-6 w-48 mb-2" />
              <Skeleton className="h-4 w-64" />
            </div>
            <div className="p-6 space-y-6">
              <div className="space-y-2">
                <Skeleton className="h-4 w-32 mb-1" />
                <Skeleton className="h-10 w-full rounded-md" />
                <Skeleton className="h-4 w-3/4" />
              </div>

              <div className="space-y-2">
                <Skeleton className="h-4 w-48 mb-1" />
                <Skeleton className="h-24 w-full rounded-md" />
              </div>

              <div className="space-y-2">
                <Skeleton className="h-4 w-32 mb-1" />
                <Skeleton className="h-10 w-full rounded-md" />
              </div>

              <Skeleton className="h-px w-full" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <Skeleton className="h-6 w-24" />
                  <Skeleton className="h-9 w-32 rounded-md" />
                </div>

                <div className="space-y-4">
                  {/* Lesson 1 Skeleton */}
                  <div className="border rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Skeleton className="h-5 w-5 mt-1" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <Skeleton className="h-5 w-20" />
                          <Skeleton className="h-8 w-24 rounded-md" />
                        </div>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Skeleton className="h-4 w-24 mb-1" />
                            <Skeleton className="h-10 w-full rounded-md" />
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Skeleton className="h-4 w-24 mb-1" />
                              <Skeleton className="h-10 w-full rounded-md" />
                            </div>
                            <div className="space-y-2">
                              <Skeleton className="h-4 w-24 mb-1" />
                              <div className="flex gap-2">
                                <Skeleton className="h-10 flex-1 rounded-md" />
                                <Skeleton className="h-10 w-[120px] rounded-md" />
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Skeleton className="h-5 w-10 rounded-full" />
                            <Skeleton className="h-4 w-48" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Lesson 2 Skeleton */}
                  <div className="border rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Skeleton className="h-5 w-5 mt-1" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <Skeleton className="h-5 w-20" />
                          <Skeleton className="h-8 w-24 rounded-md" />
                        </div>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Skeleton className="h-4 w-24 mb-1" />
                            <Skeleton className="h-10 w-full rounded-md" />
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Skeleton className="h-4 w-24 mb-1" />
                              <Skeleton className="h-10 w-full rounded-md" />
                            </div>
                            <div className="space-y-2">
                              <Skeleton className="h-4 w-24 mb-1" />
                              <div className="flex gap-2">
                                <Skeleton className="h-10 flex-1 rounded-md" />
                                <Skeleton className="h-10 w-[120px] rounded-md" />
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Skeleton className="h-5 w-10 rounded-full" />
                            <Skeleton className="h-4 w-48" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Skeleton className="h-10 w-full rounded-md" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-6">
            <Skeleton className="h-10 w-24 rounded-md" />
            <Skeleton className="h-10 w-32 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  )
}
