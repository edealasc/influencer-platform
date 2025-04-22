import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <Skeleton className="h-8 w-64" />
        <Skeleton className="h-10 w-40" />
      </div>

      {[1, 2].map((i) => (
        <div key={i} className="mb-6 border rounded-lg overflow-hidden">
          <div className="p-4 bg-gray-50">
            <div className="flex justify-between">
              <div>
                <Skeleton className="h-6 w-40 mb-2" />
                <Skeleton className="h-4 w-60" />
              </div>
              <Skeleton className="h-6 w-24" />
            </div>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {[1, 2, 3].map((j) => (
                <div key={j}>
                  <Skeleton className="h-4 w-24 mb-2" />
                  <Skeleton className="h-5 w-32" />
                </div>
              ))}
            </div>

            <Skeleton className="h-4 w-40 mb-2" />
            {[1, 2, 3].map((k) => (
              <Skeleton key={k} className="h-10 w-full mb-2" />
            ))}

            <div className="flex justify-end gap-2 mt-4">
              <Skeleton className="h-10 w-28" />
              <Skeleton className="h-10 w-28" />
              <Skeleton className="h-10 w-36" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

