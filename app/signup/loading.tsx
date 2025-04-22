import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function SignupLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Skeleton className="h-8 w-56 mx-auto" />
          <Skeleton className="h-4 w-72 mx-auto mt-2" />
        </div>

        <Card>
          <CardHeader>
            <Skeleton className="h-10 w-full rounded-md" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Skeleton className="h-4 w-16 mb-2" />
                  <Skeleton className="h-10 w-full" />
                </div>
                <div>
                  <Skeleton className="h-4 w-16 mb-2" />
                  <Skeleton className="h-10 w-full" />
                </div>
              </div>

              <div className="space-y-2">
                <Skeleton className="h-4 w-12 mb-2" />
                <Skeleton className="h-10 w-full" />
              </div>

              <div className="space-y-2">
                <Skeleton className="h-4 w-16 mb-2" />
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-3 w-48 mt-1" />
              </div>

              <div className="space-y-2">
                <Skeleton className="h-4 w-32 mb-2" />
                <Skeleton className="h-10 w-full" />
              </div>

              <div className="flex items-start space-x-2 pt-2">
                <Skeleton className="h-4 w-4 mt-1 rounded" />
                <Skeleton className="h-4 w-full" />
              </div>

              <Skeleton className="h-10 w-full" />
            </div>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Skeleton className="h-px w-full" />
                </div>
                <div className="relative flex justify-center">
                  <Skeleton className="h-4 w-32 bg-white" />
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Skeleton className="h-4 w-64" />
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

