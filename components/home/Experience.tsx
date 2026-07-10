import { useContentStore } from "@/store/useContentStore";

export const Experience = () => {
  const experiences = useContentStore.getState().experiences;

  return (
    <section className="w-full mt-10">
      <div className="flex flex-col space-y-8">
        <div>
          <h2 className="font-bold text-foreground font-mono">
            Experience{" "}
            <span className="text-muted-foreground text-xs">
              ({experiences.length})
            </span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-2.5 top-0 bottom-0 w-0.5 bg-muted-foreground/20" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group relative pl-10 sm:pl-12 transition-transform duration-300 ease-out hover:translate-x-1"
              >
                <div className="absolute left-0 top-1 flex items-center justify-center h-6 w-6 rounded-sm text-xs font-bold border border-muted-foreground bg-primary transition-colors duration-300 group-hover:bg-foreground group-hover:text-background group-hover:border-foreground font-mono">
                  {index + 1}
                </div>

                <div className="flex flex-col space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-0">
                    <div className="flex flex-col gap-1">
                      <h3 className="font-bold text-foreground transition-colors duration-300">
                        {exp.title}{" "}
                        <span className="font-normal text-muted-foreground">
                          at
                        </span>{" "}
                        <a
                          href={exp.companyUrl || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative inline-block text-foreground font-bold border-b border-transparent hover:border-current transition-colors duration-300"
                        >
                          {exp.company}
                        </a>
                      </h3>
                    </div>
                    <div className="text-sm font-mono text-muted-foreground whitespace-nowrap transition-colors duration-300 group-hover:text-foreground/80">
                      {exp.startDate} – {exp.endDate}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-muted-foreground/90">
                    {exp.location} — {exp.type}
                  </p>

                  {exp.description && (
                    <p className="text-sm text-foreground/90 leading-relaxed">
                      {exp.description}
                    </p>
                  )}

                  {exp.highlights && exp.highlights.length > 0 && (
                    <ul className="space-y-1.5 mt-2">
                      {exp.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="text-sm text-foreground/90 flex items-start gap-2"
                        >
                          <span className="text-muted-foreground mt-0.5">
                            •
                          </span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
