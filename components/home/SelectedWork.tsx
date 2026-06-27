interface WorkItem {
  title: string;
  category: string;
  description: string;
  technologies: string[];
}

const works: WorkItem[] = [
  {
    title: "Simakerja",
    category: "Web App",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966,",
    technologies: ["Java", "OCR", "Spring Boot", "PostgreSQL"],
  },
  {
    title: "XCrawler",
    category: "Node Package",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966,",
    technologies: ["Java", "OCR", "Spring Boot", "PostgreSQL"],
  },
  {
    title: "Portfolio Website",
    category: "Next.js App",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966,",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
];

export const SelectedWork = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col space-y-8">
        {/* Header */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Selected Work{" "}
            <span className="text-muted-foreground">({works.length})</span>
          </h2>
        </div>

        {/* Work Items */}
        <div className="space-y-6">
          {works.map((work, index) => (
            <div
              key={index}
              className="border border-muted rounded-lg p-6 sm:p-8 flex flex-col space-y-4"
            >
              {/* Title and Category */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-0">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  {work.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground whitespace-nowrap">
                  {work.category}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-foreground leading-relaxed">
                {work.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {work.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-muted rounded-md text-sm text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="pt-4">
          <button className="border border-muted rounded-lg px-6 py-3 text-base font-medium text-foreground hover:bg-muted/50 transition-colors">
            View all projects{" "}
            <span className="ml-1">↗</span>
          </button>
        </div>
      </div>
    </section>
  );
};
