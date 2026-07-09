import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center gap-3 py-24 text-center sm:items-start sm:text-left">
      <h1 className="text-lg font-medium text-foreground">
        404 — Page not found
      </h1>
      <p className="text-sm text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Button asChild variant="outline" size="sm" className="mt-2">
        <Link href="/">
          <ChevronLeft data-icon="inline-start" />
          Back to home
        </Link>
      </Button>
    </div>
  );
}
