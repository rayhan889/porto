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
    title: "Simakerja Backend",
    category: "REST API",
    projectUrl: "https://github.com/rayhan889/simakerja-backend",
    description:
      "REST API of UNESA Faculty of Tech partnership web app management system. Capable of handling MoA/IA between campuss as the first party and partners as the second party.",
    technologies: ["Java", "OCR", "Spring Boot", "PostgreSQL"],
    blank: true,
  },
  {
    title: "XCrawler",
    category: "Node Package",
    projectUrl: "https://www.npmjs.com/package/@rayhanhendra/xcrawler",
    description:
      "XCrawler is a robust, stealth-oriented CLI tool built in TypeScript for scraping tweets from X (formerly Twitter). Designed strictly for research purposes, it avoids bot detection using human-like behavior emulation, Playwright stealth plugins, and GraphQL interception.",
    technologies: [
      "Playwright",
      "GraphQL",
      "Typescript",
      "Puppeteer",
      "SQLite",
    ],
    blank: true,
  },
  {
    title: "Tale of Samurai",
    category: "Game",
    projectUrl: "/projects/tale-of-samurai",
    description:
      "Turn-based samurai themed game inspired by the old school Pokemon game model. Players take on the role of a samurai and get the first turn to attack two enemies, who are devils (which called yorei and gotoku in this game).",
    technologies: ["Pygame", "Python"],
    blank: false,
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
