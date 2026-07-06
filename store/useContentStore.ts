import { create } from "zustand";
import type { ExperienceItem, WorkItem } from "@/lib/types";

const experiences: ExperienceItem[] = [
  {
    title: "AI Engineer Cohort",
    company: "Dicoding DBS 2026",
    companyUrl: "https://www.dicoding.com",
    location: "Bandung, ID",
    type: "Remote, Internship",
    startDate: "Feb 2026",
    endDate: "Present",
  },
  {
    title: "Backend Engineer",
    company: "DOT Indonesia",
    companyUrl: "https://dot.co.id",
    location: "Malang, ID",
    type: "Hybrid, Internship",
    startDate: "Jun 2025",
    endDate: "Nov 2025",
  },
  {
    title: "Teaching and Practicum Assistant",
    company: "UNESA",
    companyUrl: "https://unesa.ac.id",
    location: "Surabaya, ID",
    type: "Onsite, Part-Time",
    startDate: "Jul 2024",
    endDate: "Jul 2025",
  },
  {
    title: "Web Programmer",
    company: "PT. Venturo Pro",
    companyUrl: "#",
    location: "Malang, ID",
    type: "Onsite, Internship",
    startDate: "Jun 2022",
    endDate: "Nov 2022",
  },
];

const works: WorkItem[] = [
  {
    title: "Simakerja",
    category: "Web App",
    projectUrl: "https://github.com/rynrama_/simakerja",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966,",
    technologies: ["Java", "OCR", "Spring Boot", "PostgreSQL"],
  },
  {
    title: "XCrawler",
    category: "Node Package",
    projectUrl: "#",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966,",
    technologies: ["Java", "OCR", "Spring Boot", "PostgreSQL"],
  },
  {
    title: "Tale of Samurai",
    category: "Game",
    projectUrl: "#",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966,",
    technologies: ["Pygame", "Python"],
  },
];

interface ContentStore {
  experiences: ExperienceItem[];
  works: WorkItem[];
}

export const useContentStore = create<ContentStore>(() => ({
  experiences,
  works,
}));
