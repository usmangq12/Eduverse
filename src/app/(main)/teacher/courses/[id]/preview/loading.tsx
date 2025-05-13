import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Preview Banner */}
      <div className="bg-gradient-to-r from-emerald-800 to-emerald-600 text-white py-3 px-4">
        <div className="container mx-auto flex items-center justify-center gap-2">
          <Skeleton className="h-6 w-24 bg-white/20" />
          <Skeleton className="h-6 w-32 bg-white/20" />
          <Skeleton className="h-8 w-24 bg-white/20 rounded-md" />
        </div>
      </div>

      {/* Course Header */}
      <div className="container mx-auto px-4 py-8">
        <Skeleton className="h-4 w-32 mb-4" />
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <Skeleton className="h-10 w-3/4 mb-4" />
            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-6 w-24" />
            </div>
            <div className="flex items-center gap-3 mb-6">
              <Skeleton className="h-10 w-10 rounded-full" />
              <div>
                <Skeleton className="h-5 w-32 mb-1" />
                <Skeleton className="h-4 w-24" />
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <Skeleton className="h-7 w-48 mb-4" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4 mb-6" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-full" />
              </div>
            </div>
          </div>

          <div className="md:w-1/3">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <Skeleton className="w-full aspect-video" />
              <div className="p-6">
                <div className="flex items-baseline mb-4">
                  <Skeleton className="h-8 w-20 mr-2" />
                  <Skeleton className="h-5 w-16 mr-2" />
                  <Skeleton className="h-5 w-16" />
                </div>
                <div className="space-y-3 mb-6">
                  <Skeleton className="h-10 w-full rounded-md" />
                  <Skeleton className="h-10 w-full rounded-md" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                  <div className="flex justify-between">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                  <div className="flex justify-between">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-8">
          <div className="flex gap-2 mb-6">
            <Skeleton className="h-10 w-24 rounded-md" />
            <Skeleton className="h-10 w-24 rounded-md" />
            <Skeleton className="h-10 w-24 rounded-md" />
            <Skeleton className="h-10 w-24 rounded-md" />
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <Skeleton className="h-7 w-48" />
              <Skeleton className="h-5 w-32" />
            </div>

            <div className="space-y-4">
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-gray-50 p-4">
                  <Skeleton className="h-6 w-64" />
                </div>
                <div className="divide-y">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="p-4 flex items-center">
                      <Skeleton className="h-5 w-5 mr-4 rounded-full" />
                      <div className="flex-1">
                        <Skeleton className="h-5 w-64 mb-1" />
                        <Skeleton className="h-4 w-32" />
                      </div>
                      <Skeleton className="h-8 w-24 rounded-md" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <div className="bg-gray-50 p-4">
                  <Skeleton className="h-6 w-64" />
                </div>
                <div className="divide-y">
                  {[1, 2].map((i) => (
                    <div key={i} className="p-4 flex items-center">
                      <Skeleton className="h-5 w-5 mr-4 rounded-full" />
                      <div className="flex-1">
                        <Skeleton className="h-5 w-64 mb-1" />
                        <Skeleton className="h-4 w-32" />
                      </div>
                      <Skeleton className="h-8 w-24 rounded-md" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Skeleton className="h-8 w-8 mx-auto mb-2 rounded-full" />
                <Skeleton className="h-6 w-48 mx-auto mb-2" />
                <Skeleton className="h-4 w-3/4 mx-auto mb-4" />
                <Skeleton className="h-10 w-32 mx-auto rounded-md" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
