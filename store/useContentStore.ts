import { create } from "zustand";
import type {
  AwardCertifItem,
  EducationItem,
  ExperienceItem,
  StackItem,
  WorkItem,
} from "@/lib/types";
import { SpringIcon } from "@/components/icon/SpringIcon";
import { GoIcon } from "@/components/icon/GoIcon";
import { DockerIcon } from "@/components/icon/DockerIcon";
import { PostgresIcon } from "@/components/icon/PostgresIcon";
import { GrafanaIcon } from "@/components/icon/GrafanaIcon";
import { TypescriptIcon } from "@/components/icon/NextJSIcon";
import { PythonIcon } from "@/components/icon/PythonIcon";
import { RedisIcon } from "@/components/icon/RedisIcon";
import { ReactIcon } from "@/components/icon/ReactIcon";
import { JavaIcon } from "@/components/icon/JavaIcon";
import { MySqlIcon } from "@/components/icon/MySqlIcon";
import { MongoDBIcon } from "@/components/icon/MongoDBIcon";

const experiences: ExperienceItem[] = [
  {
    title: "AI Engineer Cohort",
    company: "Dicoding DBS 2026",
    companyUrl: "https://www.dicoding.com",
    location: "Bandung, ID",
    type: "Remote, Internship",
    startDate: "Feb 2026",
    endDate: "Jul 2026",
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
    companyUrl: "https://venturo.id/",
    location: "Malang, ID",
    type: "Onsite, Internship",
    startDate: "Jun 2022",
    endDate: "Nov 2022",
  },
];

const educations: EducationItem[] = [
  {
    major: "Computer Science",
    school: "UNESA",
    schoolUrl: "https://unesa.ac.id/",
    startDate: "Jul 2023",
    endDate: "Present",
  },
  {
    major: "Software Engineering",
    school: "SMK Telkom Malang",
    schoolUrl: "https://www.smktelkom-mlg.sch.id/",
    startDate: "Jul 2020",
    endDate: "May 2023",
  },
];

const works: WorkItem[] = [
  {
    title: "Mock Stream Processing Pipeline",
    category: "System Design",
    projectUrl: "https://github.com/rayhan889/mock-streamprocess",
    description:
      "A mock streaming pipeline that simulates ingesting tweets, cleaning them, and sinking the results to MongoDB. Built as a Kafka producer/consumer chain in Go.",
    technologies: ["Go", "Kafka", "MongoDB", "Docker", "Python"],
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
  {
    title: "Job Portal CLI",
    category: "CLI",
    projectUrl: "https://github.com/rayhan889/job-portal-cli",
    description:
      "Linkedin-like CLI based program that let's find you find your desired job.",
    technologies: ["Java"],
    blank: true,
  },
];

const awardsCertifications: AwardCertifItem[] = [
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "AWS",
    date: "Jan 2026",
    certUrl: "https://drive.google.com/file/d/1kK_z29B1LmpaWOZgYyli92DksCxT5Iaa/view?usp=sharing"
  },
  {
    title: "Build Serverless Applications with Cloud Run Functions",
    issuer: "Google Cloud",
    date: "Jan 2026",
    certUrl: "https://www.skills.google/public_profiles/63c4f142-0e83-41e7-856c-b89ede1426ee/badges/21719703"
  },
  {
    title: "The Basics of Google Cloud Compute ",
    issuer: "Google Cloud",
    date: "Jan 2026",
    certUrl: "https://www.skills.google/public_profiles/63c4f142-0e83-41e7-856c-b89ede1426ee/badges/21680722"
  },
  {
    title: "Introduction to Generative AI",
    issuer: "IBM SkillsBuild",
    date: "Dec 2025",
    certUrl: "https://drive.google.com/file/d/1u05hgnneewyVvfLKsxS3GIM1tBvbHT_-/view?usp=sharing"
  },
];

const stacks: StackItem[] = [
  { title: "Go", icon: GoIcon, link: "https://go.dev/", category: "lang" },
  {
    title: "Springboot",
    icon: SpringIcon,
    link: "https://spring.io/projects/spring-boot",
    category: "framework",
  },
  {
    title: "Docker",
    icon: DockerIcon,
    link: "https://www.docker.com/",
    category: "container",
  },
  {
    title: "Postgres",
    icon: PostgresIcon,
    link: "https://www.postgresql.org/",
    category: "database",
  },
  {
    title: "Grafana",
    icon: GrafanaIcon,
    link: "https://grafana.com/",
    category: "testing",
  },
  {
    title: "Typescript",
    icon: TypescriptIcon,
    link: "https://www.typescriptlang.org/",
    category: "lang",
  },
  {
    title: "Python",
    icon: PythonIcon,
    link: "https://www.python.org/",
    category: "lang",
  },
  {
    title: "Redis",
    icon: RedisIcon,
    link: "https://redis.io/",
    category: "database",
  },
  {
    title: "React",
    icon: ReactIcon,
    link: "https://react.dev/",
    category: "framework",
  },
  {
    title: "Java",
    icon: JavaIcon,
    link: "https://www.java.com/en/",
    category: "lang",
  },
  {
    title: "MySQL",
    icon: MySqlIcon,
    link: "https://www.mysql.com/",
    category: "database",
  },
  {
    title: "MongoDB",
    icon: MongoDBIcon,
    link: "https://www.mongodb.com/",
    category: "database",
  },
  {
    title: "NextJS",
    icon: ReactIcon,
    link: "https://nextjs.org/",
    category: "framework",
  },
  {
    title: "Gin",
    icon: ReactIcon,
    link: "https://gin-gonic.com/en/",
    category: "framework",
  },
  {
    title: "Gorm",
    icon: ReactIcon,
    link: "https://gofiber.io/",
    category: "framework",
  },
  {
    title: "C++",
    icon: ReactIcon,
    link: "https://isocpp.org/",
    category: "lang",
  },
];

interface ContentStore {
  experiences: ExperienceItem[];
  works: WorkItem[];
  educations: EducationItem[];
  awardsCertifications: AwardCertifItem[];
  stacks: StackItem[];
}

export const useContentStore = create<ContentStore>(() => ({
  experiences,
  works,
  educations,
  awardsCertifications,
  stacks,
}));
