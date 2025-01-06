import Link from 'next/link';
import { AlertCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center p-4 min-h-screen text-center">
      <div className="space-y-6 max-w-md">
        <AlertCircle className="mx-auto w-12 h-12 text-yellow-500" />
        
        <h1 className="font-bold text-3xl sm:text-4xl tracking-tighter">Page Not Found</h1>
        
        <p className="text-gray-500 dark:text-gray-400">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been removed, renamed, or doesn&apos;t exist.
        </p>
        
        <Button asChild>
          <Link href="/">
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  )
}

