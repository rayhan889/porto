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
}
