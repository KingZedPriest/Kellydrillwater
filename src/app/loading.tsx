import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center p-4 min-h-screen">
      <div className="space-y-4 w-full max-w-md">
        {/* Header */}
        <Skeleton className="mx-auto w-3/4 h-8" />
        
        {/* Main content area */}
        <div className="space-y-2">
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-5/6 h-4" />
          <Skeleton className="w-4/5 h-4" />
        </div>
        
        {/* Action area */}
        <Skeleton className="w-full h-10" />
        
        {/* Loading indicator */}
        <div className="flex justify-center items-center gap-2 text-primary">
          <div className="border-2 border-primary border-r-transparent rounded-full w-4 h-4 animate-spin" />
          <span className="font-medium text-sm text-textColor">Loading...</span>
        </div>
      </div>
    </div>
  )
}

