import { useContentStore } from "@/store/useContentStore";

export const useExperiences = () => useContentStore((s) => s.experiences);
export const useExperienceCount = () =>
  useContentStore((s) => s.experiences.length);

export const useWorks = () => useContentStore((s) => s.works);
export const useWorkCount = () => useContentStore((s) => s.works.length);
