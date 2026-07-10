import React from "react";
import { useContentStore } from "@/store/useContentStore";
import { type Metadata } from "next";
import Link from "next/link";

const CATEGORY_LABELS: Record<string, string> = {
  lang: "Languages",
  framework: "Frameworks",
  database: "Databases",
  container: "Container",
  testing: "Testing",
  tool: "Tools",
};

const CATEGORY_ORDER = [
  "lang",
  "framework",
  "database",
  "container",
  "testing",
  "tool",
];

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About | Rayhan Atmadja",
    description:
      "Get to know me more if you would. There's something interesting here.",
  };
}

export default function AboutPage() {
  const experiences = useContentStore.getState().experiences;
  const educations = useContentStore.getState().educations;
  const awardsCertifications = useContentStore.getState().awardsCertifications;
  const stacks = useContentStore.getState().stacks;

  const stacksByCategory = CATEGORY_ORDER.map((category) => ({
    category,
    items: stacks.filter((stack) => (stack.category ?? "tool") === category),
  })).filter((group) => group.items.length > 0);

  return (
    <section className="w-full mx-auto flex flex-col space-y-12">
      <div className="flex flex-col items-start space-y-2">
        <h3 className={`tracking-tighter font-bold text-3xl`}>
          Software Engineer? Backend Focus? Vibe Code?
        </h3>
        <p className="text-sm md:text-base leading-relaxed text-justify">
          Basically i enjoy building something fun. challenging. likely new in
          my own way. Lately taking interest in cooking some backend system with
          Go, Spring and .NET. But yeah of course i vibe code too oftentimes.
        </p>
      </div>

      <div className="flex flex-col w-full space-y-3">
        <h2 className="font-bold text-foreground font-mono">Stack</h2>
        <table className="w-full border-collapse">
          <thead className="hidden md:table-header-group text-left text-xs uppercase font-mono tracking-wider">
            <tr>
              <th className="pb-3 pr-4 font-semibold w-1/4">Category</th>
              <th className="pb-3 pl-4 font-semibold w-3/4">Technologies</th>
            </tr>
          </thead>
          <tbody>
            {stacksByCategory.map(({ category, items }) => (
              <tr
                key={category}
                className="flex flex-col pb-4 mb-4 last:pb-0 last:mb-0 md:table-row md:py-4 text-sm"
              >
                <td className="font-mono text-muted-foreground whitespace-nowrap md:py-4 md:pr-4 md:w-1/4">
                  {CATEGORY_LABELS[category] ?? category}
                </td>

                <td className="text-foreground pt-1 md:pt-0 md:pl-4 md:w-3/4">
                  {items.map((item, i) => (
                    <React.Fragment key={item.title}>
                      <Link
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-foreground border-b border-transparent hover:border-current transition-colors duration-300"
                      >
                        {item.title}
                      </Link>
                      {i < items.length - 1 && ", "}
                    </React.Fragment>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col w-full space-y-3">
        <h2 className="font-bold text-foreground font-mono">Experiences</h2>
        <table className="w-full border-collapse">
          <thead className="hidden md:table-header-group text-left text-xs uppercase font-mono tracking-wider">
            <tr>
              <th className="pb-3 pr-4 font-semibold w-1/4">Date</th>
              <th className="pb-3 px-4 font-semibold w-2/5">Role</th>
              <th className="pb-3 pl-4 font-semibold w-1/3">Company</th>
            </tr>
          </thead>
          <tbody>
            {experiences.map((exp, i) => (
              <tr
                key={i}
                className="flex flex-col pb-4 mb-4 last:pb-0 last:mb-0 md:table-row md:py-4 text-sm"
              >
                <td className="font-mono text-muted-foreground whitespace-nowrap md:py-4 md:pr-4 md:w-1/4">
                  {exp.startDate} – {exp.endDate}
                </td>

                <td className="text-foreground pt-1 md:pt-0 md:px-4 md:w-2/5">
                  {exp.title}
                </td>

                <td className="text-foreground md:py-4 md:pl-4 md:w-1/3">
                  <Link
                    href={exp.companyUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-foreground border-b border-transparent hover:border-current transition-colors duration-300"
                  >
                    {exp.company}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col w-full space-y-3">
        <h2 className="font-bold text-foreground font-mono">Educations</h2>
        <table className="w-full border-collapse">
          <thead className="hidden md:table-header-group text-left text-xs uppercase font-mono tracking-wider">
            <tr>
              <th className="pb-3 pr-4 font-semibold w-1/4">Period</th>
              <th className="pb-3 px-4 font-semibold w-2/5">Major</th>
              <th className="pb-3 pl-4 font-semibold w-1/3">Institution</th>
            </tr>
          </thead>
          <tbody>
            {educations.map((edu, i) => (
              <tr
                key={i}
                className="flex flex-col pb-4 mb-4 last:pb-0 last:mb-0 md:table-row md:py-4 text-sm"
              >
                <td className="font-mono text-muted-foreground whitespace-nowrap md:py-4 md:pr-4 md:w-1/4">
                  {edu.startDate} – {edu.endDate}
                </td>

                <td className="text-foreground pt-1 md:pt-0 md:px-4 md:w-2/5">
                  {edu.major}
                </td>

                <td className="text-foreground md:py-4 md:pl-4 md:w-1/3">
                  <Link
                    href={edu.schoolUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-foreground border-b border-transparent hover:border-current transition-colors duration-300"
                  >
                    {edu.school}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col w-full space-y-3">
        <h2 className="font-bold text-foreground font-mono">
          Awards & Certifications
        </h2>
        <table className="w-full border-collapse">
          <thead className="hidden md:table-header-group text-left text-xs uppercase font-mono tracking-wider">
            <tr>
              <th className="pb-3 pr-4 font-semibold w-1/4">Date</th>
              <th className="pb-3 px-4 font-semibold w-2/5">Title</th>
              <th className="pb-3 pl-4 font-semibold w-1/3">Issuer</th>
            </tr>
          </thead>
          <tbody>
            {awardsCertifications.map((award, i) => (
              <tr
                key={i}
                className="flex flex-col pb-4 mb-4 last:pb-0 last:mb-0 md:table-row md:py-4 text-sm"
              >
                <td className="font-mono text-muted-foreground whitespace-nowrap md:py-4 md:pr-4 md:w-1/4">
                  {award.date}
                </td>

                <td className="text-foreground pt-1 md:pt-0 md:px-4 md:w-2/5">
                  {award.title}
                </td>

                <td className="text-foreground pt-1 md:pt-0 md:px-4 md:w-2/5">
                  {award.issuer}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
