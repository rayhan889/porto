import type { WorkItem } from "@/lib/types";
import Link from "next/link";

export function WorkCard({ work }: Readonly<{ work: WorkItem }>) {
  return (
    <Link
      href={work.projectUrl || "#"}
      className="group border bg-background/60 backdrop-blur-sm transform-gpu border-muted rounded-lg p-4 flex flex-col space-y-3 transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-[0_4px_20px_-12px_rgba(255,255,255,0.1)]"
      target={work.blank ? "_blank" : "_parent"}
      rel="noopener noreferrer"
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-0">
        <h3 className="text-sm sm:text-base font-bold text-foreground">
          {work.title}
        </h3>

        <p className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap transition-colors duration-300 group-hover:text-foreground/70">
          {work.category}
        </p>
      </div>

      <p className="text-sm sm:text-base text-foreground/90 leading-relaxed line-clamp-2">
        {work.description}
      </p>

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
    </Link>
  );
}
