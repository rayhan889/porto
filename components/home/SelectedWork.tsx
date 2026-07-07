import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";
import { useContentStore } from "@/store/useContentStore";

export const SelectedWork = () => {
  const works = useContentStore.getState().works;

  return (
    <section className="w-full mt-10">
      <div className="flex flex-col space-y-6">
        <div>
          <h2 className="font-bold text-foreground">
            Selected Work{" "}
            <span className="text-muted-foreground text-xs font-normal">
              ({works.length})
            </span>
          </h2>
        </div>

        {/* Project Grid / List */}
        <div className="space-y-3">
          {works.map((work, index) => (
            <div
              key={index}
              className="group border bg-background/60 backdrop-blur-sm border-muted rounded-lg p-4 flex flex-col space-y-3 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-[0_4px_20px_-12px_rgba(255,255,255,0.1)]"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-0">
                <a
                  href={work.projectUrl || "#"}
                  target={work.blank ? "_blank" : "_parent"}
                  rel="noopener noreferrer"
                  className="relative inline-block w-fit group/title"
                >
                  <h3 className="text-sm sm:text-base font-bold text-foreground flex items-center gap-1 border-b border-transparent hover:border-current transition-colors duration-300">
                    {work.title}
                    <ArrowUpRight
                      size={14}
                      className="text-muted-foreground opacity-0 -translate-x-1 translate-y-1 transition-all duration-300 group-hover/title:opacity-100 group-hover/title:translate-x-0 group-hover/title:translate-y-0"
                    />
                  </h3>
                </a>

                <p className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap transition-colors duration-300 group-hover:text-foreground/70">
                  {work.category}
                </p>
              </div>

              <p className="text-sm sm:text-base text-foreground/90 leading-relaxed line-clamp-2">
                {work.description}
              </p>

              {/* Technologies list with interaction */}
              <div className="flex flex-wrap gap-2">
                {work.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-muted rounded-md text-xs text-foreground/90 transition-colors duration-300 group-hover:bg-accent/60 group-hover:text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Link Button */}
        <div className="w-full flex items-center justify-end">
          <Button
            variant="ghost"
            size="lg"
            className="group w-full md:w-fit flex items-center gap-1.5 transition-all duration-300 hover:bg-accent/50 hover:shadow-sm"
          >
            <ArrowUpRight
              size={20}
              className="text-muted-foreground transition-transform duration-300 ease-out group-hover:rotate-45 group-hover:text-foreground"
            />
            <span className="transition-colors duration-300 group-hover:text-foreground">
              View All Projects
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
