import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { WorkCard } from "../ui/WorkCard";
import { useContentStore } from "@/store/useContentStore";

const SELECTED_WORK = 3;

export const SelectedWork = () => {
  const selectedWorks = useContentStore
    .getState()
    .works.slice(0, SELECTED_WORK);

  return (
    <section className="w-full mt-10">
      <div className="flex flex-col space-y-6">
        <div>
          <h2 className="font-bold text-foreground font-mono">
            Selected Work{" "}
            <span className="text-muted-foreground text-xs font-normal">
              ({selectedWorks.length})
            </span>
          </h2>
        </div>

        {/* Project Grid / List */}
        <div className="space-y-3">
          {selectedWorks.map((work, index) => (
            <WorkCard key={index} work={work} />
          ))}
        </div>

        {/* Footer Link Button */}
        <div className="w-full flex items-center justify-end">
          <Button
            asChild
            variant="ghost"
            size="lg"
            className="group w-full md:w-fit flex items-center gap-1.5 transition-all duration-300 hover:bg-accent/50 hover:shadow-sm"
          >
            <Link href="/projects">
              <ArrowUpRight
                size={20}
                className="text-muted-foreground transition-transform duration-300 ease-out group-hover:rotate-45 group-hover:text-foreground"
              />
              <span className="transition-colors duration-300 group-hover:text-foreground">
                View All Projects
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
