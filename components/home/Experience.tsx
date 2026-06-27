interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  type: string;
  startDate: string;
  endDate: string;
  description?: string;
  highlights?: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "AI Engineer Cohort",
    company: "Coding Camp DBS x Dicoding 2026",
    location: "Bandung, ID",
    type: "Remote, Internship",
    startDate: "Feb 2026",
    endDate: "Present",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966,",
    highlights: [
      "when designers at Letraset and James Mosley,",
      "the librarian at St Bride Printing Library, took a 1914",
      "Cicero translation and scrambled it",
    ],
  },
  {
    title: "Backend Engineer",
    company: "DOT Indonesia",
    location: "Malang, ID",
    type: "Hybrid, Internship",
    startDate: "Jun",
    endDate: "Nov 2025",
  },
  {
    title: "Data Structure & Basic Programming Practicum Assistant",
    company: "State University of Surabaya",
    location: "Surabaya, ID",
    type: "On site, Part time",
    startDate: "Jun 2024",
    endDate: "Jun 2025",
  },
  {
    title: "Fullstack Web Developer",
    company: "PT Venturo",
    location: "Malang, ID",
    type: "On site, Internship",
    startDate: "May",
    endDate: "Nov 2022",
  },
];

export const Experience = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col space-y-8">
        {/* Header */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Experience{" "}
            <span className="text-muted-foreground">({experiences.length})</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-2.5 top-0 bottom-0 w-0.5 bg-muted-foreground/20" />

          {/* Experience items */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-10 sm:pl-12">
                {/* Bullet point */}
                <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-foreground" />

                <div className="flex flex-col space-y-3">
                  {/* Title and Company */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-0">
                    <div className="flex flex-col gap-1">
                      <h3 className="font-bold text-base sm:text-lg text-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        <span className="text-foreground font-semibold">
                          at
                        </span>{" "}
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-sm text-muted-foreground whitespace-nowrap">
                      {exp.startDate} – {exp.endDate}
                    </div>
                  </div>

                  {/* Location and Type */}
                  <p className="text-sm text-muted-foreground">
                    {exp.location} - {exp.type}
                  </p>

                  {/* Description */}
                  {exp.description && (
                    <p className="text-sm text-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  )}

                  {/* Highlights */}
                  {exp.highlights && exp.highlights.length > 0 && (
                    <ul className="space-y-1.5 mt-2">
                      {exp.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="text-sm text-foreground flex items-start gap-2"
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
