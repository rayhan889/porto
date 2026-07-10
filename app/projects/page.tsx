import { type Metadata } from "next";
import { useContentStore } from "@/store/useContentStore";
import { WorkCard } from "@/components/ui/WorkCard";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Projects | Rayhan Atmadja",
    description:
      "A complete list of projects, tools, and experiments I've built.",
  };
}

export default function ProjectsPage() {
  const works = useContentStore.getState().works;

  return (
    <section className="w-full mx-auto">
      <div className="flex flex-col items-start space-y-2 mb-7">
        <h3 className="tracking-tighter font-bold text-3xl">
          Projects & Fun Little Experiments
        </h3>
        <p className="text-sm md:text-base leading-relaxed text-justify">
          Everything I&apos;ve built, from REST APIs and CLI tools to games and
          experiments.
        </p>
      </div>

      <div className="space-y-3">
        {works.map((work, index) => (
          <WorkCard key={index} work={work} />
        ))}
      </div>
    </section>
  );
}
