import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface UnderConstructionProps {
  title?: string;
  message?: string;
}

export function UnderConstruction({
  title = "Under construction",
  message = "This page isn't ready yet, check back soon.",
}: UnderConstructionProps) {
  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center gap-3 py-24 text-center sm:items-start sm:text-left">
      <h1 className="text-lg font-medium text-foreground">{title}</h1>
      <p className="text-sm text-muted-foreground">{message}</p>
      <Button asChild variant="outline" size="sm" className="mt-2">
        <Link href="/">
          <ChevronLeft data-icon="inline-start" />
          Back to home
        </Link>
      </Button>
    </div>
  );
}
