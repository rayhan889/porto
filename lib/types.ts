import type { ComponentType, SVGProps } from "react";

export interface ExperienceItem {
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  type: string;
  startDate: string;
  endDate: string;
  description?: string;
  highlights?: string[];
}

export interface WorkItem {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  projectUrl?: string;
  blank: boolean;
}

export interface EducationItem {
  major: string;
  school: string;
  schoolUrl: string;
  startDate: string;
  endDate: string;
}

export interface AwardCertifItem {
  title: string;
  issuer: string;
  date: string;
}

export interface StackItem {
  title: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  link: string;
  category?:
    | "lang"
    | "framework"
    | "tool"
    | "database"
    | "testing"
    | "container";
}
